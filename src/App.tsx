import { getAuth } from "firebase/auth";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "reactfire";
import pages from "./utils/pages";

function App() {
    const auth = getAuth();

    return (
        <AuthProvider sdk={auth}>
            <BrowserRouter basename="/">
                <Switch>
                    {pages.map((page, index) => (
                        <Route
                            exact={index === 0}
                            key={`page-${page.path}`}
                            {...page}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
