import { Image } from "./image.model";

export class Category {
    constructor(
        public readonly id: number,
        public readonly image: Image
    ) {}
}