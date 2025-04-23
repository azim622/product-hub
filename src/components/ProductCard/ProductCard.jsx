import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { unique_id, discount_amount, price, name, image } = product;
    // console.log(product);

    return (
        <Link to={`/products/product-details/${unique_id}`}>
            <div className="product group p-2 border border-gray-200 hover:border-gray-300 rounded-lg hover:shadow-lg">
                <img src={`https://admin.refabry.com/storage/product/${image}`} alt="Product Image" className="w-full h-[155px] rounded-md border border-gray-200" />

                <div className="mt-3">
                    <div className="flex gap-2 items-center text-orange-600">
                        <h1>
                            <span>$</span>
                            <span className="text-lg font-medium ps-[2px]">{price ? price : 0}</span>
                        </h1>

                        <h1 className="text-xs px-2 rounded-sm bg-orange-100 text-orange-700">
                            -<span className="ps-[2px]">$</span>
                            <span>{discount_amount ? discount_amount : 0}</span>
                        </h1>
                    </div>
                    <h1 className="text-slate-700 font-medium group-hover:text-orange-600">{name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;