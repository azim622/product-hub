import { useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
    const [sortByPrice, setSortByPrice] = useState(false);
    const [products, isPending, isError, error] = useProducts(sortByPrice);

    // handleSortByPrice
    const handleSortByPrice = () => {
        setSortByPrice((prev) => !prev);
    };

    return (
        <section className="w-full bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Section Title */}
                <SectionTitle 
                    title="Everything You Need" 
                    sub_title="Dive into our full product lineup - quality and variety, guaranteed." 
                />

                {/* Sort Button */}
                <div className="flex justify-end mt-8 mb-12">
                    <button
                        onClick={handleSortByPrice}
                        className="px-6 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-orange-600 hover:text-white transition duration-200 shadow-sm"
                    >
                        {sortByPrice ? "Clear Sort" : "Sort by Price"}
                    </button>
                </div>

                {/* Product Grid */}
                {isPending ? (
                    <Spinner />
                ) : isError ? (
                    <ErrorMessage errMsg={error?.message} />
                ) : (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {products?.map((product) => (
                            <ProductCard key={product?.unique_id} product={product} />
                        ))}
                    </div>
                )}

                {/* All Products Button */}
                <div className="flex justify-center mt-12">
                    <Link to="/products">
                        <button
                            type="button"
                            className="px-8 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-orange-600 hover:text-white transition duration-200 shadow-md"
                        >
                            See All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
