import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Public_Profix } from "../../config";
import Home from "./home";

const PublicPage = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to={Public_Profix} />
      </Route>
      <Route exact path={Public_Profix} component={Home} />
    </Router>
  );
};
export default PublicPage;
