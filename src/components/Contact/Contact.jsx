import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-400 py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16">

                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://i.ibb.co.com/MkWNmwbR/470203565-2390972847913826-3804411578746235717-n.jpg"
                        alt="Md Fazle Azim"
                        className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Right Side - Contact Card */}
                <div className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-center space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>

                    <div className="space-y-3 text-gray-700 text-lg">
                        <p><span className="font-semibold">Name:</span> Md Fazle Azim</p>
                        <p><span className="font-semibold">Email:</span> fazleazim622@gmail.com</p>
                        <p><span className="font-semibold">Location:</span> Dhaka, Bangladesh</p>
                        <p><span className="font-semibold">Mobile:</span> 01618506709</p>
                    </div>

                    <div className="flex justify-center gap-6 pt-4">
                        {/* Github */}
                        <a href="https://github.com/fazleazim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-3xl hover:scale-125 transition-transform duration-300">
                            <i className="fab fa-github"></i>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/md-fazle-azim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-3xl hover:scale-125 transition-transform duration-300">
                            <i className="fab fa-linkedin"></i>
                        </a>

                        {/* Gmail */}
                        <a href="mailto:fazleazim622@gmail.com" className="text-gray-700 hover:text-red-500 text-3xl hover:scale-125 transition-transform duration-300">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
