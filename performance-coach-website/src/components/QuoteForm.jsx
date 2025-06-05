import { ChevronDownIcon } from "@heroicons/react/16/solid";

function QuoteForm() {
  return (
    <section className="bg-black text-yellow-400 py-16 px-6 sm:px-10 lg:px-20 border-t border-yellow-500/20">
      <h2 className="text-4xl font-bold mb-10 text-center emph">Get A Quote</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* First Name */}
        <div>
          <label htmlFor="first-name" className="block text-lg font-semibold mb-2 emph">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            placeholder="John"
            className="w-full rounded-md bg-gray-900   px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="last-name" className="block text-lg font-semibold mb-2 emph">
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            className="w-full rounded-md bg-gray-900 text-yellow-300 placeholder-yellow-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-lg font-semibold mb-2 emph">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-md bg-gray-900 text-yellow-300 placeholder-yellow-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* String Type Dropdown */}
        <div className="relative">
          <label htmlFor="stringType" className="block text-lg font-semibold mb-2 emph">
            String Type
          </label>
          <select
            id="stringType"
            name="stringType"
            className="w-full appearance-none rounded-md bg-gray-900 text-yellow-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 emph"
          >
            <option>Head Links</option>
            <option>RPM Blast</option>
          </select>
          <ChevronDownIcon
            className="absolute top-12 right-3 h-5 w-5 text-yellow-300 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        {/* Tension Dropdown */}
        <div className="relative">
          <label htmlFor="tension" className="block text-lg font-semibold mb-2 emph">
            String Tension
          </label>
          <select
            id="tension"
            name="tension"
            className="w-full appearance-none rounded-md bg-gray-900 text-yellow-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 emph"
          >
            <option>70</option>
            <option>60</option>
            <option>50</option>
            <option>40</option>
          </select>
          <ChevronDownIcon
            className="absolute top-12 right-3 h-5 w-5 text-yellow-300 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="sm:col-span-2">
        <label htmlFor="description" className="block text-lg font-semibold mb-2 emph">
            Description
        </label>
        <textarea
            id="description"
            name="description"
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-md bg-gray-900  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
        ></textarea>
        </div>
      </form>
    </section>
  )
}

export default QuoteForm;
