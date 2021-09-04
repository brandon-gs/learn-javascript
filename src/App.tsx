import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./utils/pages";

function App() {
    return (
        <Router>
            <Switch>
                {pages.map((page) => (
                    <Route key={`page-${page.path}`} path={page.path}>
                        {page.component}
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
