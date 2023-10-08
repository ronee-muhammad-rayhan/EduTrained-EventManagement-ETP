import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <h3 className="text-3xl">Something went wrong...Go to <Link className="text-blue-600">Home</Link></h3>
        </div>
    );
};

export default ErrorElement;