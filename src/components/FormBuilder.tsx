import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'date' | 'time' | 'select' | 'textarea' | 'file';
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !values[f.name]?.trim()) {
        next[f.name] = 'This field is required.';
      } else if (f.type === 'email' && values[f.name]) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[f.name])) {
          next[f.name] = 'Please enter a valid email.';
        }
      } else if (f.type === 'tel' && values[f.name]) {
        if (!/^[+\d][\d\s-]{6,}$/.test(values[f.name])) {
          next[f.name] = 'Please enter a valid phone number.';
        }
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center gap-5 border border-gold-600/30 bg-ivory px-6 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-gold-600" />
        <h3 className="font-heading text-2xl text-charcoal-900">{successTitle}</h3>
        <p className="max-w-sm font-body text-sm leading-relaxed text-charcoal-600">
          {successMessage}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {fields.map((f) => {
        const colSpan =
          f.type === 'textarea' || f.type === 'file' ? 'sm:col-span-2' : '';
        return (
          <div key={f.name} className={colSpan}>
            <label
              htmlFor={f.name}
              className="block font-body text-[0.7rem] uppercase tracking-[0.2em] text-charcoal-700"
            >
              {f.label}
              {f.required && <span className="text-gold-700"> *</span>}
            </label>
            {f.type === 'select' ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                value={values[f.name] || ''}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [f.name]: e.target.value }))
                }
                className="input-lux mt-2"
              >
                <option value="">Select...</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                value={values[f.name] || ''}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [f.name]: e.target.value }))
                }
                className="input-lux mt-2 resize-none"
              />
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] || ''}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [f.name]: e.target.value }))
                }
                className="input-lux mt-2"
                {...(f.type === 'file' ? { accept: 'image/*' } : {})}
              />
            )}
            {errors[f.name] && (
              <p className="mt-1 font-body text-xs text-red-700">{errors[f.name]}</p>
            )}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
