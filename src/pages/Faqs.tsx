const Faqs = () => {
  return (
    <div className="container mx-auto pt-24 p-6">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1. How do I book a trip?</h2>
          <p className="text-muted-foreground">
            You can book a trip directly through our website by browsing destinations and selecting a travel package that suits your needs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Can I cancel or change my booking?</h2>
          <p className="text-muted-foreground">
            Yes, but cancellation or change policies vary depending on the package. Please check the Terms & Conditions page for details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. What payment methods are accepted?</h2>
          <p className="text-muted-foreground">
            We accept credit cards, debit cards, UPI, and secure online payments via our platform.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Do I need travel insurance?</h2>
          <p className="text-muted-foreground">
            Yes, we recommend having travel insurance for all trips to cover emergencies and cancellations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Can I customize my package?</h2>
          <p className="text-muted-foreground">
            Absolutely! Contact our support team, and we’ll help tailor a package based on your preferences and budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
