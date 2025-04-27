const Questions = () => {
    return (
        <section className="questions py-14">
            {/* questions header */}
            <div className="questions_header grid items-center md:grid-cols-5">
                <h1 className="text-[1.6rem] md:text-[2rem] text-slate-700 font-semibold md:col-span-3">
                    Have a question? <br />We are here to help.
                </h1>
            </div>

            {/* accordions div starts */}
            <div className="w-full divide-y rounded divide-slate-200 pt-10">
                <details className="p-4 group" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">How do I place an order on Product Hub?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 pt-2 text-slate-500">
                        Simply browse our products, add your favorites to the cart, and proceed to checkout by following the on-screen instructions.
                    </p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">What payment methods do you accept?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 pt-2 text-slate-500">
                        We accept Visa, MasterCard, PayPal, and several other secure payment options to make your shopping smooth and hassle-free.
                    </p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">Can I track my order after purchase?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 pt-2 text-slate-500">
                        Yes, once your order is shipped, you will receive a tracking link via email to monitor the status of your delivery in real-time.
                    </p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">What should I do if I face any issue with my order?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 pt-2 text-slate-500">
                        Our support team is ready to assist you! Simply visit our "Contact Us" page and raise a support ticket. We’ll get back to you shortly.
                    </p>
                </details>
            </div>
        </section>
    );
};

export default Questions;
