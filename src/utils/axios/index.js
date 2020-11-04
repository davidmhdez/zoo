import axios from 'axios';

const ax = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`
})

export default ax;