import {HttpService} from "@/shared/services/base-service";
export class BookService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'books';
    }
}
