import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>I have bad news for you...</h1>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
