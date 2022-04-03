import { getTodayDate } from "../utils/dates";
import { firebaseClient } from "../utils/firebaseConfig";

const db = firebaseClient.collection("/posts");

export interface IPost {
    id?: string;
    user_email: string;
    title: string;
    content: string;
    cover: string;
    created_at: { seconds: number; nanoseconds: number };
}

class PostsService {
    async getByEmail(user_email: string) {
        const posts = (
            await db
                .orderBy("created_at", "desc")
                .where("user_email", "==", user_email)
                .get()
        ).docs;

        const currentPosts: IPost[] = [];
        posts.forEach((post) => {
            const currentPost = post.data();
            currentPost.id = post.id;
            currentPosts.push(currentPost as IPost);
        });
        return currentPosts;
    }

    async getAll() {
        const posts = (await db.orderBy("created_at", "desc").get()).docs;

        const currentPosts: IPost[] = [];

        posts.forEach((post) => {
            const currentPost = post.data();
            currentPost.id = post.id;
            currentPosts.push(currentPost as IPost);
        });

        return currentPosts;
    }

    async getPost(id: string) {
        const post = (await db.doc(id).get()).data();
        if (post) {
            const _post: IPost = {
                id,
                user_email: post.user_email,
                title: post.title,
                content: post.content,
                cover: post.cover,
                created_at: post.created_at,
            };
            return _post;
        }
        return post;
    }

    create(newPost: { content: string; title: string; cover: string }) {
        const { content, title, cover } = newPost;
        const user_email = localStorage.getItem("email");
        const created_at = getTodayDate();
        if (!user_email) return;

        const post: IPost = {
            user_email,
            created_at: created_at as any,
            title,
            cover,
            content,
        };

        return db.add(post);
    }

    update(id: string, post: IPost) {
        return db.doc(id).update(post);
    }

    delete(id: string) {
        return db.doc(id).delete();
    }
}

export default new PostsService();
