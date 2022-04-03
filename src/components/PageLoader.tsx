import React from "react";
import Loader from "react-loader-spinner";

function PageLoader() {
    return (
        <div style={loaderStyles}>
            <Loader type="Audio" color="#2764a7" height={160} width={160} />
        </div>
    );
}

const loaderStyles: React.CSSProperties = {
    height: "100vh",
    display: "grid",
    placeItems: "center",
};

export default PageLoader;
