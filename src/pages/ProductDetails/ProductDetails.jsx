import { useParams } from "react-router-dom";

const ProductDetails = ({ product }) => {
    console.log("Product details:", product);

    const { id } = useParams();
    console.log('Product id:', id);

    return (
        <section className="product-deatails">
            <div className="product-details-inner container mx-auto px-6 lg:px-40 py-14">
                <h1>Product details</h1>
            </div>
        </section>
    );
};

export default ProductDetails;