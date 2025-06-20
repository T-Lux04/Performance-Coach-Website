import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stringType: "Green Head Lynx",
    tension: "70",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      service: `${formData.stringType} (${formData.tension} tension)`,
      message: formData.description,
    };

    const res = await fetch("https://performance-coach-website.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Your request has been sent!");
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section className="h-auto bg-black py-16 px-6 sm:px-10 lg:px-20 border-t border-yellow-500/20 text-left">
      <h2 className="text-4xl font-bold mb-10 text-center emph font-serif">Get A Quote</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <label htmlFor="firstName" className="block text-lg font-semibold mb-2 emph">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-lg font-semibold mb-2 emph">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-lg font-semibold mb-2 emph">Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
         <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-lg font-semibold mb-2 emph">Mobile Number</label>
          <input
            name="phone"
            type="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+447123456789"
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="stringType" className="block text-lg font-semibold mb-2 emph">String Type</label>
          <select
            name="stringType"
            value={formData.stringType}
            onChange={handleChange}
            className="w-full appearance-none rounded-md bg-gray-900 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>Green Head Lynx</option>
            <option>Black RPM Blast</option>
            <option>White Yonex Polytour Rev</option>
          </select>
          <ChevronDownIcon className="absolute top-12 right-3 h-5 w-5 pointer-events-none" />
        </div>
        <div className="relative">
          <label htmlFor="tension" className="block text-lg font-semibold mb-2 emph">String Tension</label>
          <select
            name="tension"
            value={formData.tension}
            onChange={handleChange}
            className="w-full appearance-none rounded-md bg-gray-900 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>70</option>
            <option>60</option>
            <option>50</option>
            <option>40</option>
          </select>
          <ChevronDownIcon className="absolute top-12 right-3 h-5 w-5 pointer-events-none" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-lg font-semibold mb-2 emph">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" className="mt-3 bg-gold-400 text-black text-xl font-bold rounded-full shadow-2xl hover:bg-gold-500 transition-transform transform hover:scale-110 relative z-10">
            Quote Me
          </Button>
        </div>
      </form>
    </section>
  );
}

export default QuoteForm;
