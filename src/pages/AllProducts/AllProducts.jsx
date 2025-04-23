import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useProducts from "../../hooks/useProducts";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../components/ProductCard/ProductCard";

const AllProducts = () => {
    const [sortByPrice, setSortByPrice] = useState(false);
    const [products, isPending, isError, error] = useProducts(sortByPrice);
    // console.log(products);

    // handleSortByPrice
    const handleSortByPrice = async () => {
        setSortByPrice((prev) => !prev);
    }

    return (
        <section className="all-products w-full">
            <div className="all-products-inner container mx-auto px-6 lg:px-40 py-14">
                <SectionTitle title={"Everything You Need"} sub_title={"Dive into our full product lineup - quality and variety, guaranteed."} />

                {/* search products div starts */}
                <div className="container mx-auto md:px-20 lg:px-40 mb-10">
                    <input type="search" name="search" id="search" placeholder="Search product by name" autoComplete="off" className="px-3 md:px-5 py-1.5 outline-none border border-gray-300 focus:border-gray-400 rounded-md w-full" />
                </div>
                
                {/* sort by price button container div starts */}
                <div className="mb-10 flex gap-5 items-center justify-end">
                    <button type="button" className="px-5 py-1.5 text-sm text-gray-700 hover:text-white active:text-slate-700 font-medium border border-gray-300 hover:border-gray-400 bg-slate-50 hover:bg-black active:bg-white outline-none rounded-md hover:shadow-md" onClick={handleSortByPrice}>Sort by price</button>
                </div>

                {/* all products container div starts */}
                {
                    isPending ? (
                        <Spinner />
                    ) : isError ? (
                        <ErrorMessage errMsg={error?.message} />
                    ) :
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                            {
                                products?.map(product => <ProductCard key={product?.unique_id} product={product} />)
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default AllProducts;