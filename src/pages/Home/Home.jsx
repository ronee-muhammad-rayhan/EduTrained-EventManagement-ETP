import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
    console.log("home");
    return (
        <div>
            <div className="text-3xl">This is Homepage</div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;