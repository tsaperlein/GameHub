import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bb9bf72140234dd9a7e7c3bd4428691e'
    }
})