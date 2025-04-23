import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../../components/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
    const [ products, isPending, isError, error ] = useProducts();
    const all_products = products?.data;

    return (
        <section className="products w-full">
            <div className="products-inner py-14">
                <SectionTitle title={"Everything You Need"} sub_title={"Dive into our full product lineup - quality and variety, guaranteed."} />

                {
                    isPending ? (
                        <Spinner />
                    ) : isError ? (
                        <ErrorMessage errMsg={error?.message} />
                    ) : 
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        {
                            all_products?.map(product => <ProductCard key={product?.unique_id} product={product} />)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Products;