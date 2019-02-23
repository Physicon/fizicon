export class Product {
    courseId: number;
    title: string;
    grade: number[];
    genre: string;
    subject: string;
    shopUrl: string;
    price: number;
    priceBonus: number;

    constructor({ courseId, title, grade, genre, subject, shopUrl, price, priceBonus }) {
        this.courseId = courseId;
        this.title = title;
        this.genre = genre;
        this.subject = subject;
        this.grade = grade.split(';').filter(item => item);
        this.shopUrl = shopUrl;
        this.price = price;
        this.priceBonus = priceBonus;
    }


    getPictureUrl() {
        return `https://www.imumk.ru/svc/coursecover/${this.courseId}`
    }
}