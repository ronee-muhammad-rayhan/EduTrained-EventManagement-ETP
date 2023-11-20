import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({children}) => {
  
    const {user, loading}=useAuth();
    const location = useLocation();

    if(loading){
      return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if (!user) {
      return <Navigate to= '/login' state={location?.pathname} replace />;
    }
  
    return children;
  };

  
  PrivateRoutes.propTypes = {
      children: PropTypes.node,
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