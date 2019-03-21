import axios from 'axios';
import sockjs from 'sockjs-client';
import stomp from 'stompjs';
import lodash from 'lodash';

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$_', { value: lodash });
    Object.defineProperty(Vue.prototype, '$Axios', { value: axios });
    Object.defineProperty(Vue.prototype, '$SockJS', { value: sockjs });
    Object.defineProperty(Vue.prototype, '$Stomp', { value: stomp });
  },
};
