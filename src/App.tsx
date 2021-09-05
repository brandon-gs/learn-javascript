import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./utils/pages";

function App() {
    return (
        <Router>
            <Switch>
                {pages.map((page) => (
                    <Route exact key={`page-${page.path}`} {...page} />
                ))}
            </Switch>
        </Router>
    );
}

export default App;
