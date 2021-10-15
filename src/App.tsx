import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "reactfire";
import pages from "./utils/pages";

function App() {
    const auth = getAuth();

    return (
        <AuthProvider sdk={auth}>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    {pages.map((page, index) => (
                        <Route
                            exact={index === 0}
                            key={`page-${page.path}`}
                            {...page}
                        />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
