import axios from 'axios';

const url = "http://localhost:8000/api";
let token = "7AvoXxYp2FfgAzvvUnjks5xe7UNTqCWHr3txdjbj";

export const link = axios.create({
    baseURL: url,
    headers: {
        'api_token': token
    }
});