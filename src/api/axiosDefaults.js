import axios from 'axios';

axios.defaults.baseURL = 'https://drf--api-87b91537f33e.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;