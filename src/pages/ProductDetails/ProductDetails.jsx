import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const [products] = useProducts();
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const { unique_id, name, short_desc, image, stock, price, buying_price, discount_amount, discount_date, updated_at, category } = product;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await products.find(prd => prd?.unique_id === id);
                if (res) {
                    setProduct(res || {});
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchProduct();
    }, [products, id]);

    return (
        <section className="w-full py-14 bg-white">
            <div className="container mx-auto px-6 lg:px-40 flex flex-col md:flex-row gap-10">
                
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img 
                        src={`https://admin.refabry.com/storage/product/${image}`} 
                        alt={name} 
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-md" 
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    
                    {/* Category */}
                    {category?.name && (
                        <p className="text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded-full px-4 py-1 w-fit">
                            {category?.name}
                        </p>
                    )}

                    {/* Name and Price */}
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-800 mb-2">{name}</h1>
                        
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold text-orange-600">${price}</p>
                            {buying_price && (
                                <p className="text-sm line-through text-gray-400">${buying_price}</p>
                            )}
                            {discount_amount && (
                                <span className="text-sm bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                                    {discount_amount}% OFF
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Stock */}
                    <div>
                        <p className={`text-sm font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
                            {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
                        </p>
                    </div>

                    {/* Short Description */}
                    {short_desc && (
                        <p className="text-base text-gray-600 mt-2">
                            {short_desc}
                        </p>
                    )}

                    {/* Discount Validity */}
                    {discount_date && (
                        <p className="text-xs text-gray-400">
                            Discount valid until: <span className="font-medium">{discount_date}</span>
                        </p>
                    )}

                    {/* Last Updated */}
                    {updated_at && (
                        <p className="text-xs text-gray-400">
                            Last updated: <span className="font-medium">{updated_at}</span>
                        </p>
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
