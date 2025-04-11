import { Image } from "./image.model";

export class Cover {
    constructor(
        public readonly id: number,
        public readonly image: Image
    ) {}
}