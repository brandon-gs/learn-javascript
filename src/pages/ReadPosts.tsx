import { Navbar } from "../components/Navbar";
import ReadAllArticles from "../components/ReadAllArticles";

function ReadPosts() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>Artículos</h1>
                <ReadAllArticles />
            </div>
        </>
    );
}

export default ReadPosts;
