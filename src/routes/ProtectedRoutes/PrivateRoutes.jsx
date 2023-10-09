import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Link to='/login'></Link>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;