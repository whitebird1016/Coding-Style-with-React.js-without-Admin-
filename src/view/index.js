import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../layout";

const View = () => {
  return (
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  );
};

export default View;
