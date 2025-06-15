// import { useState } from 'react';
// import { ChevronDownIcon } from "@heroicons/react/16/solid";

// const Button = ({ children, ...props }) => (
//   <button {...props}>{children}</button>
// );

function QuoteForm() {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   stringType: '',
  //   tension: '',
  //   description: ''
  // });

  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  // e.preventDefault();

  // const res = await fetch('http://localhost:5000/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData),
  // });


  //   if (res.ok) {
  //     alert('Your request has been sent!');
  //   } else {
  //     alert('Failed to send request.');
  //   }
  // };

  return (
    // <section className="h-auto bg-black py-16 px-6 sm:px-10 lg:px-20 border-t border-yellow-500/20 text-left">
    //   <h2 className="text-4xl font-bold mb-10 text-center emph font-serif">Get A Quote</h2>
    //   <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">

    //     <div>
    //       <label htmlFor="firstName" className="block text-lg font-semibold mb-2 emph">First Name</label>
    //       <input
    //         name="firstName"
    //         type="text"
    //         placeholder="John"
    //         onChange={handleChange}
    //         className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    //         required
    //       />
    //     </div>

    //     <div>
    //       <label htmlFor="lastName" className="block text-lg font-semibold mb-2 emph">Last Name</label>
    //       <input
    //         name="lastName"
    //         type="text"
    //         placeholder="Doe"
    //         onChange={handleChange}
    //         className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    //         required
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <label htmlFor="email" className="block text-lg font-semibold mb-2 emph">Email Address</label>
    //       <input
    //         name="email"
    //         type="email"
    //         placeholder="you@example.com"
    //         onChange={handleChange}
    //         className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    //         required
    //       />
    //     </div>

    //     <div className="relative">
    //       <label htmlFor="stringType" className="block text-lg font-semibold mb-2 emph">String Type</label>
    //       <select
    //         name="stringType"
    //         onChange={handleChange}
    //         className="w-full appearance-none rounded-md bg-gray-900 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    //         required
    //       >
    //         <option value="">Select...</option>
    //         <option>Green Head Lynx</option>
    //         <option>Black RPM Blast</option>
    //         <option>White Yonex Polytour Rev</option>
    //       </select>
    //       <ChevronDownIcon className="absolute top-12 right-3 h-5 w-5 pointer-events-none" />
    //     </div>

    //     <div className="relative">
    //       <label htmlFor="tension" className="block text-lg font-semibold mb-2 emph">String Tension</label>
    //       <select
    //         name="tension"
    //         onChange={handleChange}
    //         className="w-full appearance-none rounded-md bg-gray-900 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    //         required
    //       >
    //         <option value="">Select...</option>
    //         <option>70</option>
    //         <option>60</option>
    //         <option>50</option>
    //         <option>40</option>
    //       </select>
    //       <ChevronDownIcon className="absolute top-12 right-3 h-5 w-5 pointer-events-none" />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <label htmlFor="description" className="block text-lg font-semibold mb-2 emph">Description</label>
    //       <textarea
    //         name="description"
    //         rows={6}
    //         placeholder="Write your message..."
    //         onChange={handleChange}
    //         className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
    //         required
    //       ></textarea>
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Button type="submit" className="mt-3 bg-gold-400 text-black text-xl font-bold rounded-full shadow-2xl hover:bg-gold-500 transition-transform transform hover:scale-110 relative z-10">
    //         Quote Me
    //       </Button>
    //     </div>
    //   </form>
    // </section>
    <div>
      <h1 className="emph mb-6 font-bold">Get Quote</h1>
      <p className='text-xl'>Email:</p> 
<a
  href="mailto:coach@phasetennis.co.uk?subject=Racquet%20Restringing%20Quote&body=Hi%20Coach,%0D%0A%0D%0AI'd%20like%20to%20request%20a%20quote%20for%20restringing."
  className="text-gold-400 underline hover:text-gold-500"
>
  coach@phasetennis.co.uk
</a>    </div>
  );
}

export default QuoteForm;
