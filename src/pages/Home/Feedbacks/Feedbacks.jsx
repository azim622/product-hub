import React, { useEffect, useRef } from "react"
import Glide from "@glidejs/glide"
import useFeedbacks from "../../../hooks/useFeedbacks";
import Feedback from "../../../components/Feedback/Feedback";

const Feedbacks = () => {
    const [ feedbacks, isPending, isError, error ] = useFeedbacks();

    const sliderRef = useRef(null);

    useEffect(() => {
        if (!isPending && feedbacks?.length > 0 && sliderRef.current) {
            setTimeout(() => { // Ensure the DOM is ready before mounting Glide
                const slider = new Glide(sliderRef.current, {
                    type: "carousel",
                    focusAt: "center",
                    perView: 3,
                    autoplay: 2500,
                    animationDuration: 700,
                    gap: 24,
                    classNames: {
                        nav: {
                            active: "[&>*]:bg-wuiSlate-700",
                        },
                    },
                    breakpoints: {
                        1024: { perView: 2 },
                        640: { perView: 1 },
                    },
                });

                slider.mount();

                return () => {
                    slider.destroy();
                };
            }, 100);
        }
    }, [feedbacks, isPending]);

    return (
        <section className="feedbacks w-full h-auto">
            <div className="feedbacks_inner py-14">
                <div ref={sliderRef} className="glide-04 relative w-full">
                    {/*    <!-- Controls --> */}
                    <div className="grid grid-cols-6 mb-10">
                        <h1 className="col-span-4 text-[1.6rem] md:text-[2rem] text-slate-700">What Our Happy Users Are Saying About Us</h1>

                        {/* left & right buttons */}
                        <div className="col-span-2 flex w-full items-center justify-center gap-2 p-4" data-glide-el="controls">
                            {/* left button */}
                            <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir="<" aria-label="prev slide">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                    <title>prev slide</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </button>

                            {/* right button */}
                            <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir=">" aria-label="next slide">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                                    <title>next slide</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/*    <!-- Slides --> */}
                    <div className="overflow-hidden" data-glide-el="track">
                        {
                            isPending ? (
                                <div className="flex items-center justify-center">
                                    <h1 className="text-2xl font-medium text-slate-600">Loading...</h1>
                                </div>
                            ) : isError ? (
                                <div className="flex items-center justify-center">
                                    <h1 className="text-2xl font-medium text-red-600">{error?.message}</h1>
                                </div>
                            ) : (
                                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                                    {
                                        feedbacks?.map(feedback => <Feedback key={feedback?._id} feedback={feedback} />)
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;