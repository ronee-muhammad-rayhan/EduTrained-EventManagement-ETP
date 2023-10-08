import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h3 className="text-3xl">(404) Page not found...Go to <Link className="text-blue-600">Home</Link></h3>
        </div>
    );
};

export default NotFound;