import {HttpService} from "@/shared/services/base-service";
export class GenreService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'genre';
    }
}
