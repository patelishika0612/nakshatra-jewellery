import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type:
    | 'text'
    | 'tel'
    | 'email'
    | 'date'
    | 'time'
    | 'select'
    | 'textarea'
    | 'file';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface FormBuilderProps {
  fields: FormField[];
  submitLabel: string;
  successTitle: string;
  successMessage: string;
}

export default function FormBuilder({
  fields,
  submitLabel,
  successTitle,
  successMessage,
}: FormBuilderProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // WhatsApp number
  const whatsappNumber = '918160315863';

  const validate = () => {
    const next: Record<string, string> = {};

    fields.forEach((f) => {
      // Required field validation
      if (
        f.required &&
        f.type !== 'file' &&
        !values[f.name]?.trim()
      ) {
        next[f.name] = 'This field is required.';
      }

      // Email validation
      if (f.type === 'email' && values[f.name]) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[f.name])) {
          next[f.name] = 'Please enter a valid email.';
        }
      }

      // Phone validation
      if (f.type === 'tel' && values[f.name]) {
        if (!/^[+\d][\d\s-]{6,}$/.test(values[f.name])) {
          next[f.name] = 'Please enter a valid phone number.';
        }
      }

      // File validation
      if (f.type === 'file' && f.required && !file) {
        next[f.name] = 'Please select an image.';
      }
    });

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    field: FormField
  ) => {
    // File input
    if (field.type === 'file') {
      const selectedFile = (
        e.target as HTMLInputElement
      ).files?.[0];

      if (selectedFile) {
        if (!selectedFile.type.startsWith('image/')) {
          setErrors((prev) => ({
            ...prev,
            [field.name]: 'Please select a valid image.',
          }));

          return;
        }

        setFile(selectedFile);

        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[field.name];
          return updated;
        });
      }

      return;
    }

    // Normal input
    setValues((prev) => ({
      ...prev,
      [field.name]: e.target.value,
    }));

    // Remove error after user starts typing
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field.name];
      return updated;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validate()) {
      return;
    }

    /*
      Create dynamic WhatsApp message.
      This works for ALL forms using FormBuilder.
    */

    const formLines = fields
      .filter((field) => field.type !== 'file')
      .map((field) => {
        const value = values[field.name] || '';

        if (!value) return '';

        return `${field.label}: ${value}`;
      })
      .filter(Boolean)
      .join('\n');

    const message = `
Hello Nakshatra Elite Diamond Jewels,

I have submitted an enquiry through your website.

${formLines}

${file ? `Reference Image: ${file.name}` : ''}

Thank you.
    `.trim();

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show success message
    setSubmitted(true);
  };

  // Success screen
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center justify-center gap-5 border border-gold-600/30 bg-ivory px-6 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-gold-600" />

        <h3 className="font-heading text-2xl text-charcoal-900">
          {successTitle}
        </h3>

        <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal-600">
          {successMessage}
        </p>

        <p className="text-xs text-charcoal-500">
          WhatsApp has been opened with your enquiry details.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {fields.map((f) => {
        const colSpan =
          f.type === 'textarea' || f.type === 'file'
            ? 'sm:col-span-2'
            : '';

        return (
          <div key={f.name} className={colSpan}>
            <label
              htmlFor={f.name}
              className="block font-body text-[0.7rem] uppercase tracking-[0.2em] text-charcoal-700"
            >
              {f.label}

              {f.required && (
                <span className="text-gold-700"> *</span>
              )}
            </label>

            {/* Select */}
            {f.type === 'select' ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                value={values[f.name] || ''}
                onChange={(e) => handleChange(e, f)}
                className="input-lux mt-2"
              >
                <option value="">Select...</option>

                {f.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : f.type === 'textarea' ? (
              /* Textarea */
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                value={values[f.name] || ''}
                onChange={(e) => handleChange(e, f)}
                className="input-lux mt-2 resize-none"
              />
            ) : f.type === 'file' ? (
              /* File */
              <input
                id={f.name}
                name={f.name}
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e, f)}
                className="input-lux mt-2"
              />
            ) : (
              /* Text / Phone / Email / Date / Time */
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] || ''}
                onChange={(e) => handleChange(e, f)}
                className="input-lux mt-2"
              />
            )}

            {/* Error */}
            {errors[f.name] && (
              <p className="mt-1 font-body text-xs text-red-700">
                {errors[f.name]}
              </p>
            )}
          </div>
        );
      })}

      {/* Submit */}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}