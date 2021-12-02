import { firebaseClient } from "../utils/firebaseConfig";

const db = firebaseClient.collection("/courses");

export interface Course {
    user_email: string;
    course: string;
    problem: string;
}

class CoursesService {
    async getByEmail(user_email: string) {
        const courses = (await db.where("user_email", "==", user_email).get())
            .docs;
        const currentProblems: Course[] = [];
        courses.forEach((problem) => {
            currentProblems.push(problem.data() as Course);
        });
        return currentProblems;
    }

    async getByEmailAndCourse(user_email: string, course: string) {
        const courses = (
            await db
                .where("user_email", "==", user_email)
                .where("course", "==", course)
                .get()
        ).docs;

        const currentProblems: Course[] = [];
        courses.forEach((problem) => {
            currentProblems.push(problem.data() as Course);
        });

        return currentProblems;
    }

    create(course: Course) {
        return db.add(course);
    }

    update(id: string, course: Course) {
        return db.doc(id).update(course);
    }

    delete(id: string) {
        return db.doc(id).delete();
    }
}

export default new CoursesService();
