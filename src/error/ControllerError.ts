import { BaseError } from "./BaseError";

export class ControllerError extends BaseError {
    constructor(message: string, public code: number) {
        super(message, code);
    }
}