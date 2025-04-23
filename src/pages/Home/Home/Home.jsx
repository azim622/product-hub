import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

const Home = () => {
    return (
        <section className="home w-full">
            <div className="home-inner container mx-auto px-6 lg:px-40 py-14">
                <Banner />
                <Categories />
                <Products />
            </div>
        </section>
    );
};

export default Home;