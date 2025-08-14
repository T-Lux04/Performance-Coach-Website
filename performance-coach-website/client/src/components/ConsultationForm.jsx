import { useState } from "react";

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    experience: "beginner",
    Goals: "",
    additionalInfo: "",
    howDidYouHear: "friend/family",
    otherSource: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        dob: formData.dob,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        Goals: formData.Goals,
        additionalInfo: formData.additionalInfo,
        howDidYouHear: formData.howDidYouHear,        
        otherSource: formData.otherSource,
    };

    const res = await fetch("https://performance-coach-website.onrender.com/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Your message has been sent!");
        setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        experience: "beginner",
        Goals: "",
        additionalInfo: "",
        howDidYouHear: "friend/family",
        otherSource: "",
        });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section className="h-auto bg-black py-16 mb-16 px-6 sm:px-10 lg:px-20 border-t border-yellow-500/20 text-left">
      <h2 className="text-4xl font-bold mb-10 text-center emph font-serif">Enquire Now</h2>
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
          <label htmlFor="dob" className="block text-lg font-semibold mb-2 emph">Date Of Birth</label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className="w-full appearance-none rounded-md bg-gray-900 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="relative">  
          <label htmlFor="experience" className="block text-lg font-semibold mb-2 emph">Experience Level</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="relative">
            <label htmlFor="Goals" className="block text-lg font-semibold mb-2 emph">Goals</label>
            <textarea
              name="Goals"
              value={formData.Goals}
              onChange={handleChange}
              rows={4}
              placeholder="What do you want to achieve?"
              className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            ></textarea>
        </div>


        <div className="relative">  
          <label htmlFor="howDidYouHear" className="block text-lg font-semibold mb-2 emph">How Did You Hear About Us?</label>
          <select
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="friend/family">Friend/Family</option>
            <option value="social_media">Social Media</option>
            <option value="search_engine">Search Engine</option>
            <option value="other">Other</option>
          </select>
          <p className="mt-2 text-sm text-gray-500">Please specify if "Other":</p>
            <input
              name="otherSource"
              type="text"
              value={formData.otherSource}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="additionalInfo" className="block text-lg font-semibold mb-2 emph">Anything Else?</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" className="mt-3 bg-gold-400 text-black text-xl font-bold rounded-full shadow-2xl hover:bg-gold-500 transition-transform transform hover:scale-110 relative z-10">
            Submit Enquiry
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ConsultationForm;
