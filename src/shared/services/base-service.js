import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    header: {}
});

export class HttpService {
    baseGet = '';

    getAll() {
        return http.get(this.baseGet);
    }

    getById(id) {
        return http.get(`${this.baseGet}/${id}?bookId=${id}`);
    }

    create(data) {
        console.log('data:',data);
        return http.post(this.baseGet, data);
    }

    update(id, data) {
        return http.put(`${this.baseGet}/${id}`, data);
    }

    delete(id) {
        return http.delete(`${this.baseGet}/${id}`);
    }
    getByField(field, value) {
        return http.get(`${this.baseGet}?${field}=${value}`);
    }

    getAllSortByField(field, order) {
        return http.get(`${this.baseGet}?_sort=${field}&_order=${order}`);
    }
}
