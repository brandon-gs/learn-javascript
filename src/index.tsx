import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Firebase
import firebaseConfig from "./utils/firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
// Loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Suspense
                fallback={
                    <Loader
                        type="Puff"
                        color="#2764a7"
                        height={100}
                        width={100}
                    />
                }
            >
                <App />
            </Suspense>
        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
