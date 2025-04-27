import OurServices from "../OurServices/OurServices";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import NewsLetter from "../NewsLetter/NewsLetter";
import Questions from "../Questions/Questions";
import Feedbacks from "../Feedbacks/Feedbacks";

const Home = () => {
    return (
        <section className="home w-full">
            <div className="home-inner container mx-auto px-6 lg:px-40 py-14">
                <Banner />
                <OurServices />
                {/* <Categories /> */}
                <Products />
                <Feedbacks />
                <Questions />
                <NewsLetter />
            </div>
        </section>
    );
};

export default Home;