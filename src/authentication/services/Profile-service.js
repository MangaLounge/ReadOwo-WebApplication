import {HttpService} from "@/shared/services/base-service";
export class ProfileService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'userProfile';
    }
}
