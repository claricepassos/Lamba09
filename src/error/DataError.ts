import { BaseError } from "./BaseError";

export class DataError extends BaseError {
    constructor(message: string, public code: number) {
        super(message, code);
    }
}