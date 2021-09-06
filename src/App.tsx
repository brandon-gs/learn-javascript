import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "reactfire";
import pages from "./utils/pages";

function App() {
    const auth = getAuth();

    return (
        <AuthProvider sdk={auth}>
            <Router>
                <Switch>
                    {pages.map((page) => (
                        <Route exact key={`page-${page.path}`} {...page} />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
