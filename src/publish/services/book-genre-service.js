import {HttpService} from "@/shared/services/base-service";
export class BookGenreService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'book-Genres';
    }
}
