const NewsLetter = () => {
    return (
        <section className="newsLetter w-full py-10 bg-[#000] text-[#fff] rounded-xl">
            <div className="container mx-auto px-2 md:px-6 flex gap-y-5 md:gap-y-0 justify-between flex-col md:flex-row">
                <div>
                    <h1 className="text-2xl font-medium">Join Our NewsLetter</h1>
                    <p className="text-gray-400 text-sm">Get update from us weekly</p>
                </div>

                <div className="flex items-center">
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" className="px-3 py-1.5 outline-none border border-gray-200 focus:border-gray-300 rounded-md rounded-e-none" />
                    <button type="button" className="px-5 py-1.5 outline-none border border-gray-200 rounded-md rounded-s-none hover:text-[#000] hover:bg-[#fff] active:text-[#fff] active:bg-[#000]">Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;