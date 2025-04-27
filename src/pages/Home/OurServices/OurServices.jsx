import delivery from "../../../assets/icons/delivery.png"
import cure from "../../../assets/icons/cube.png"
import payment from "../../../assets/icons/payment.png"

const OurServices = () => {
    return (
        <section className="section w-full bg-gray-50">
            <div className="container mx-auto px-6 lg:px-32 py-16 grid gap-8 grid-cols-1 md:grid-cols-3">
                
                {/* Free Shipping */}
                <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                    <img src={delivery} alt="Free Shipping Icon" className="w-12 h-12 p-2 bg-pink-100 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Free Shipping</h2>
                        <p className="text-sm text-gray-600 mt-1">On all orders over $50, fast & secure delivery.</p>
                    </div>
                </div>

                {/* Premium Quality */}
                <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                    <img src={cure} alt="Premium Quality Icon" className="w-12 h-12 p-2 bg-pink-100 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Premium Quality</h2>
                        <p className="text-sm text-gray-600 mt-1">Handpicked fabrics crafted for comfort and style.</p>
                    </div>
                </div>

                {/* 24/7 Support */}
                <div className="card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                    <img src={payment} alt="24/7 Support Icon" className="w-12 h-12 p-2 bg-pink-100 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">24/7 Support</h2>
                        <p className="text-sm text-gray-600 mt-1">Our team is here to assist you anytime.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurServices;
