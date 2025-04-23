import delivery from "../../../assets/icons/delivery.png"
import cure from "../../../assets/icons/cube.png"
import payment from "../../../assets/icons/payment.png"

const OurServices = () => {
    return (
        <section className="section w-full">
            <div className="section-inner container mx-auto px-6 lg:px-40 pt-20 pb-14 grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="card py-3 px-3 border border-gray-200 rounded-md flex gap-2 justify-start">
                    <img src={delivery} alt="Fast delivery image" className="w-10 h-10 p-2 rounded-md bg-sky-50" />

                    <div>
                        <h1 className="text-sm text-slate-800 font-medium">Fast delivery</h1>
                        <p className="text-xs text-gray-600 mt-1">Quick and timely shipping</p>
                    </div>
                </div>

                <div className="card py-2 px-2 border border-gray-200 rounded-md flex gap-2 justify-start">
                    <img src={payment} alt="Secure payment image" className="w-10 h-10 p-2 rounded-md bg-sky-50" />

                    <div>
                        <h1 className="text-sm text-slate-800 font-medium">Secure payment</h1>
                        <p className="text-xs text-gray-600 mt-1">Safe and encrypted checkout</p>
                    </div>
                </div>

                <div className="card py-2 px-2 border border-gray-200 rounded-md flex gap-2 justify-start">
                    <img src={cure} alt="Fast delivery image" className="w-10 h-10 p-2 rounded-md bg-sky-50" />

                    <div>
                        <h1 className="text-sm text-slate-800 font-medium">30 day return</h1>
                        <p className="text-xs text-gray-600 mt-1">Easy returns within 30 day</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;