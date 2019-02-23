export class Product {
    courseId: number;
    title: string;
    grade: number[];
    genre: string;
    subject: string;

    constructor({ courseId, title, grade, genre, subject }) {
        this.courseId = courseId;
        this.title = title;
        this.genre = genre;
        this.subject = subject;
        this.grade = grade.split(';').filter(item => item !== '');
    }


    getPictureUrl() {
        return `https://www.imumk.ru/svc/coursecover/${this.courseId}`
    }
}