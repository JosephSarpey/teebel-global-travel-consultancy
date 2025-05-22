import Button from "./Button";

function FormInput() {
  return (
    <form className="w-full max-w-lg mx-auto bg-white rounded-xl shadow p-6 flex flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-brand mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-brand mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-brand mb-1"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        >
          <option value="">Select a service</option>
          <option value="visa">Visa & Ticket Assistance</option>
          <option value="work">Work Permit & Employment</option>
          <option value="documents">Legal & Travel Documents</option>
          <option value="guidance">Trusted Guidance</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-brand mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="How can we help you?"
        />
      </div>
      <div className="button">
        <Button
          variant="primary"
          size="responsive"
          className="w-full mt-2"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default FormInput;
