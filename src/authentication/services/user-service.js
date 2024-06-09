import {HttpService} from "@/shared/services/base-service";
export class UserService extends HttpService {
    constructor() {
        super();
        this.baseGet = 'users';
    }
}