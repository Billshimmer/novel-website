import request from '../request.js';
import Loading from '@/components/Loading/index.js';

export let Get = async function() {
    return  request('/api/cates', {}, 'GET');
};
