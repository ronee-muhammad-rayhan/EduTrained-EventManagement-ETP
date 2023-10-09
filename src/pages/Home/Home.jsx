import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    console.log("home");
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-3xl">This is Homepage</div>
        </div>
    );
};

export default Home;