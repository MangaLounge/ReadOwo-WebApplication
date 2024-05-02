import {HttpService} from "@/shared/services/base-service";
export class ChapterService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'chapters';
    }
}