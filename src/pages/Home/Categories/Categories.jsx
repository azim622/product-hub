import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = () => {
    return (
        <section className="categories w-full">
            <div className="categories-inner py-14">
                <SectionTitle title={"Discover Our Categories"} sub_title={"Find the perfect products by browsing through our curated categories."} />

                <div className="flex gap-4 flex-wrap justify-center">
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Men's Wear</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Women's Wear</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Kid's Fashion</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Unisex Essentials</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">New Arrivals</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Best Sellers</p>
                    <p className="px-4 py-1.5 text-sm text-slate-600 hover:text-white active:text-slate-700 border border-gray-200 hover:border-gray-300 rounded-md hover:shadow-md cursor-default bg-slate-50 hover:bg-slate-900 active:bg-transparent">Seasonal Picks</p>
                </div>
            </div>
        </section>
    );
};

export default Categories;