import Loader from "react-loader-spinner";

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h_100">
            <Loader
                type="Bars"
                color="#FFFFFF"
                height={100}
                width={100}
                timeout={5000}
            />
        </div>
    );
};
