import { Image } from "./image.model";

export class Product {
    constructor(
        public readonly id: number,
        public readonly categoryId: number,
        public readonly image: Image
    ) {}
}