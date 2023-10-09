import PropTypes from "prop-types"
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({
    redirectPath = '/login',
    children,
  }) => {
    const {user}=useAuth();
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

  
  PrivateRoutes.propTypes = {
      children: PropTypes.node,
      redirectPath: PropTypes.string
    }
    export default PrivateRoutes;








// import PropTypes from "prop-types"
// import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const PrivateRoutes = ({ children }) => {
//     const { user } = useAuth();

//     return user ? children : <Link to='/login'></Link>;
// };

// PrivateRoutes.propTypes = {
//     children: PropTypes.node,
// }

// export default PrivateRoutes;


// const ProtectedRoute = ({
//     user,
//     redirectPath = '/landing',
//     children,
//   }) => {
//     if (!user) {
//       return <Navigate to={redirectPath} replace />;
//     }
  
//     return children;
//   };