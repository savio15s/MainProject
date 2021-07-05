import { authHeader } from '../helpers/authHeader';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:4000/users`, requestOptions).then(handleResponse);
}