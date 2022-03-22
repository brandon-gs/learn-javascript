import { useCallback, useEffect, useState } from "react";
import { IPost } from "../services/posts";
import PostsService from "../services/posts";
import Article from "./Article";

function ReadAllArticles() {
    const [loading, setLoading] = useState<boolean>(true);
    const [articles, setArticles] = useState<IPost[]>([]);

    const getPosts = useCallback(async () => {
        setLoading(() => true);
        const _articles = await PostsService.getAll();
        setArticles([..._articles]);
        setLoading(() => false);
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (loading) {
        return (
            <div className="row text-center my-5 justify-content-center">
                <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{
                        width: 240,
                        height: 240,
                    }}
                ></div>
            </div>
        );
    }

    return (
        <div className="mt-3 d-flex flex-wrap">
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
}

export default ReadAllArticles;
