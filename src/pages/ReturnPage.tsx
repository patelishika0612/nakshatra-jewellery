import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { site } from '@/config/site';

export default function ReturnPage() {
  return (
    <>
      <Seo
        title="Return, Exchange, Refund & Cancellation Policy | Nakshatra Elite Diamond Jewels"
        description="Return, exchange, refund and cancellation policy for Nakshatra Elite Diamond Jewels."
      />

      <PageHeader
        eyebrow="Legal"
        title="Return, Exchange, Refund & Cancellation Policy"
      />

      <article className="bg-ivory py-20 lg:py-28">
        <div className="container-lux max-w-2xl space-y-6 font-body text-sm leading-relaxed text-charcoal-700">

          <p>
            <strong>Last Updated: August 21, 2026</strong>
          </p>

          <p>
            At <strong>{site.brandFull}</strong>, all jewellery products are
            carefully checked and securely packed before dispatch.
          </p>

          <p>
            Due to the nature and value of our real-gold jewellery products,
            <strong>
              {' '}we do not accept returns for change of mind, personal
              preference, or any reason other than a verified wrong, damaged,
              or manufacturing-defective product
            </strong>
            , subject to applicable law.
          </p>

          {/* 1. Returns */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            1. Returns
          </h2>

          <p>
            <strong>We do not provide returns on delivered jewellery products.</strong>
          </p>

          <p>
            Customers are requested to carefully check the product details,
            size, design, weight, purity, and other specifications before
            placing an order.
          </p>

          {/* 2. Exchange */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            2. Exchange for Wrong or Damaged Products
          </h2>

          <p>An exchange may be provided if:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>The wrong product has been delivered.</li>
            <li>The product has been damaged during delivery.</li>
            <li>A genuine manufacturing defect is verified.</li>
          </ul>

          <p>
            Exchange requests are subject to verification and approval by{' '}
            {site.brandFull}.
          </p>

          {/* 3. Unboxing Video */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            3. Unboxing Video Requirement
          </h2>

          <p>
            For any claim involving a damaged, wrong, or defective product,
            the customer{' '}
            <strong>
              must record a continuous, clear, and complete unboxing video
              from the beginning of opening the package until the jewellery
              and its contents have been fully inspected.
            </strong>
          </p>

          <p>The video should clearly show:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>The unopened package</li>
            <li>Shipping label/details</li>
            <li>Opening of the package</li>
            <li>The jewellery/product</li>
            <li>Packaging and accompanying documents</li>
          </ul>

          <p>
            The unboxing video may be required to verify the condition of the
            product at the time of delivery.
          </p>

          {/* 4. Claim Period */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            4. Exchange Claim Period
          </h2>

          <p>
            Customers must notify {site.brandFull}{' '}
            <strong>within 24 hours of receiving the delivery</strong> if they
            receive a wrong, damaged, or defective product.
          </p>

          <p>
            Exchange requests submitted after 24 hours may not be accepted.
          </p>

          <p>
            Please contact us immediately after receiving the order if you
            identify any issue.
          </p>

          {/* 5. How to Submit */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            5. How to Submit an Exchange Request
          </h2>

          <p>To submit a claim, contact us through:</p>

          <p>
            <strong>Email:</strong> [YOUR EMAIL ADDRESS]
            <br />
            <strong>Phone/WhatsApp:</strong> [YOUR PHONE NUMBER]
          </p>

          <p>Please provide:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Order number</li>
            <li>Customer name</li>
            <li>Contact number</li>
            <li>Description of the issue</li>
            <li>Complete unboxing video</li>
            <li>Clear photographs, if requested</li>
          </ul>

          <p>
            Please do not send the product back without receiving instructions
            from {site.brandFull}.
          </p>

          {/* 6. Verification */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            6. Verification
          </h2>

          <p>
            All exchange claims are subject to verification.
          </p>

          <p>
            {site.brandFull} may inspect the product, packaging, invoice,
            certification/hallmark documentation, photographs, video, and
            other relevant information before approving an exchange.
          </p>

          <p>
            An exchange may not be approved where the product has been:
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Worn or used</li>
            <li>Altered or resized</li>
            <li>Damaged after delivery</li>
            <li>Repaired by a third party</li>
            <li>Modified or tampered with</li>
            <li>Damaged due to improper handling or storage</li>
          </ul>

          {/* 7. Refund */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            7. Refund Policy
          </h2>

          <p>
            Due to the nature and value of our real-gold jewellery products,
            <strong>
              {' '}we generally do not provide refunds once payment has been
              made and the order has been confirmed.
            </strong>
          </p>

          <p>
            Where a refund is legally required or specifically approved by{' '}
            {site.brandFull}, the applicable refund amount and any legally
            permissible deductions will be communicated to the customer.
          </p>

          <p>
            Nothing in this policy is intended to restrict any mandatory
            consumer rights or remedies available under applicable law.
          </p>

          {/* 8. Cancellation */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            8. Cancellation Policy
          </h2>

          <p>
            Customers should contact {site.brandFull} as soon as possible if
            they wish to cancel an order.
          </p>

          <p>
            Once an order has entered production, customization, packing, or
            dispatch, cancellation may not be possible.
          </p>

          <p>
            For customized, personalized, resized, engraved, or specially
            manufactured jewellery, cancellation may not be available once
            production has started, subject to applicable law.
          </p>

          {/* 9. Customized Jewellery */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            9. Customized Jewellery
          </h2>

          <p>
            Customized or personalized jewellery is generally{' '}
            <strong>
              not eligible for return, exchange, refund, or cancellation
            </strong>{' '}
            once production has started, except where required by applicable
            law or where a verified manufacturing defect or incorrect product
            is involved.
          </p>

          {/* 10. Important Notice */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            10. Important Notice
          </h2>

          <p>
            This policy applies to purchases made through {site.brandFull}.
          </p>

          <p>
            Nothing in this policy is intended to exclude, restrict, or waive
            any consumer rights, guarantees, or remedies that cannot legally
            be excluded under applicable Indian law.
          </p>

          <p>
            If any provision of this policy conflicts with applicable
            mandatory law, the applicable law will prevail.
          </p>

          {/* 11. Contact */}
          <h2 className="font-heading text-2xl text-charcoal-900">
            11. Contact Us
          </h2>

          <p>
            <strong>{site.brandFull}</strong>
            <br />
  <strong>Email:</strong>{" "}
  <a
    href="mailto:nakshatraelitesurat@gmail.com"
    className="text-charcoal-700 hover:underline"
  >
    nakshatraelitesurat@gmail.com
  </a>            <br />
 <strong>Phone:</strong>{" "}
  <a
    href="tel:+917284948918"
    className="text-charcoal-700 hover:underline"
  >
    +91 72849 48918
  </a>            <br />
            <strong>Address:</strong>Surat, Gujarat 395004
          </p>

          <p>
            Please mention your <strong>order number</strong> in all exchange,
            refund, or cancellation-related communications.
          </p>

        </div>
      </article>
    </>
  );
}