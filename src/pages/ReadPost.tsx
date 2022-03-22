import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { IPost } from "../services/posts";
import PostsService from "../services/posts";
import { getStringDate } from "../utils/dates";
import { BiArrowBack } from "react-icons/bi";

function ReadPost() {
    const { id } = useParams<{ id: string }>();

    const [article, setArticle] = useState<IPost>();

    const getArticle = useCallback(async () => {
        const _article = await PostsService.getPost(id);
        if (_article) {
            setArticle(_article);
        }
    }, [id]);

    useEffect(() => {
        getArticle();
    }, [getArticle]);

    if (!article) {
        return (
            <div>
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
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="mb-5">
                    <h1 className="h1" style={{ fontWeight: "bold" }}>
                        {article.title}
                    </h1>
                    <p className="text-muted m-0">
                        Fecha de creación:{" "}
                        {getStringDate(article.created_at.seconds)}
                    </p>
                    <p className="text-muted m-0">
                        Publicado por: {article.user_email}
                    </p>
                </div>
                <div className="mt-5"></div>
                <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
                <div className="mb-5"></div>
                <hr />
                <div className="d-grid gap-2 mt-5 mb-5">
                    <Link to="/posts" className="btn btn-primary btn-lg" type="button">
                        <BiArrowBack /> Ver todos los artículos
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ReadPost;
