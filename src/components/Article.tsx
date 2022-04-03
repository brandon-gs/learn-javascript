import { Link } from "react-router-dom";
import { IPost } from "../services/posts";
import { getStringDate } from "../utils/dates";

interface ArticleProps {
    article: IPost;
    width?: string;
}

function Article({
    article: { id, cover, title, user_email, created_at },
    width = "16rem",
}: ArticleProps) {
    return (
        <div className="card rounded mb-3 m-3 p-1 ms-0" style={{ width }}>
            <div
                style={{
                    minHeight: 238,
                    backgroundImage: `url(${cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                }}
            ></div>
            <div
                className="card-body p-2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h5 className="card-title mb-2" style={{ fontWeight: "bold" }}>
                        {title}
                    </h5>
                    <h6 className="card-subtitle text-muted">
                        {user_email}
                    </h6>
                    <p className="card-subtitle text-muted mb-2">
                        {getStringDate(created_at.seconds)}
                    </p>
                </div>
                <Link
                    to={id ? "/post/" + id : "/posts"}
                    className="btn btn-primary color_bg"
                    style={{ width: "100%" }}
                >
                    Leer
                </Link>
            </div>
        </div>
    );
}

export default Article;
