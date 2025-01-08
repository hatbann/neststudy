import { CreateCatDto } from './crate-cat.dto';
export declare class CatsController {
    create(createCatDto: CreateCatDto): string;
    findAll(): string;
    getBreeds(): string;
    findOne(params: any): string;
}
