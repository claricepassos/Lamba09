import { BaseError } from "./BaseError";

export class BusinessError extends BaseError {
    constructor(message: string, public code: number) {
        super(message, code);
    }
}