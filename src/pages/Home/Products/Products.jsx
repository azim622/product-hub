import { useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";

const Products = () => {
    const [sortByPrice, setSortByPrice] = useState(false);
    const [ products, isPending, isError, error ] = useProducts(sortByPrice);
    // console.log(products);

    // handleSortByPrice
    const handleSortByPrice = async() => {
        setSortByPrice((prev) => !prev);
    }

    return (
        <section className="products w-full">
            <div className="products-inner py-14">
                <SectionTitle title={"Everything You Need"} sub_title={"Dive into our full product lineup - quality and variety, guaranteed."} />

                <div className="mb-10 flex gap-5 items-center justify-end">
                    <button type="button" className="px-5 py-1.5 text-sm text-gray-700 hover:text-white active:text-slate-700 font-medium border border-gray-200 hover:border-gray-300 hover:bg-black active:bg-white outline-none rounded-md hover:shadow-md" onClick={handleSortByPrice}>Sort by price</button>
                    <Link to="/products"><button type="button" className="px-5 py-1.5 text-sm text-gray-700 hover:text-white active:text-slate-700 font-medium border border-gray-200 hover:border-gray-300 hover:bg-black active:bg-white outline-none rounded-md hover:shadow-md" onClick={handleSortByPrice}>All products</button></Link>
                </div>

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

export default Products;