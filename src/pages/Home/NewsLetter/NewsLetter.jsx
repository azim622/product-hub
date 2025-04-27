const NewsLetter = () => {
    return (
        <section className="newsLetter w-full py-12 bg-white text-gray-800 rounded-xl shadow-md">
            <div className="container mx-auto px-4 md:px-8 flex gap-y-6 md:gap-y-0 justify-between items-center flex-col md:flex-row">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-semibold mb-2">Join Our Newsletter</h1>
                    <p className="text-gray-500 text-sm">Stay updated with our latest news and offers.</p>
                </div>

                <div className="flex w-full md:w-auto items-center border border-gray-300 rounded-md overflow-hidden">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        autoComplete="off" 
                        placeholder="Enter your email" 
                        className="flex-grow px-4 py-2 text-gray-700 outline-none" 
                    />
                    <button 
                        type="button" 
                        className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition-all"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
