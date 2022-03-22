import { useEffect, useState } from "react";
import PostsService, { IPost } from "../services/posts";
import Article from "./Article";

export const Articles = () => {
    const [articles, setArticles] = useState<IPost[]>([]);

    const getPosts = async () => {
        const _articles = await PostsService.getAll();
        setArticles(_articles.splice(0, 3));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h2 className="text-center">Artículos</h2>

            {articles.map((article) => (
                <Article key={article.id} article={article} width="18rem" />
            ))}
        </>
    );
};
