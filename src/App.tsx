import { getAuth } from "firebase/auth";
import { Switch, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "reactfire";
import pages from "./utils/pages";

function App() {
    const auth = getAuth();

    return (
        <AuthProvider sdk={auth}>
            <HashRouter>
                <Switch>
                    {pages.map((page, index) => (
                        <Route
                            exact={index === 0}
                            key={`page-${page.path}`}
                            {...page}
                        />
                    ))}
                </Switch>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
