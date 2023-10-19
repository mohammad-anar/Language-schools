import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FallingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <FallingLines
          color="#130f40"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
