export const Articles = () => {
    return (
        <>
        <h2 className="text-center">Artículos</h2>

        <div className="card rounded mb-3" style={{width: "18rem"}}>
            <img src="https://via.placeholder.com/150" className="card-img-top img-fluid" alt="img"/>
            <div className="card-body">
                <h5 className="card-title">Artículo 1</h5>
                <h6 className="card-subtitle mb-2 text-muted">Alex Hdz.</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="###" className="btn btn-primary color_bg" style={{width: "100%"}}>Leer</a>
            </div>
        </div>

        <div className="card rounded mb-3" style={{width: "18rem"}}>
            <img src="https://via.placeholder.com/150" className="card-img-top img-fluid" alt="img"/>
            <div className="card-body">
                <h5 className="card-title">Artículo 1</h5>
                <h6 className="card-subtitle mb-2 text-muted">Alex Hdz.</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="###" className="btn btn-primary color_bg" style={{width: "100%"}}>Leer</a>
            </div>
        </div>
        </>
    );
}