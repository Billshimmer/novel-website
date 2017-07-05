import request from '../request.js';

export var Get = function() {
    return request('/api/cates', {}, 'GET');
};
