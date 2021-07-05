import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID yxqyKuW0wjY3-HBeVxm98xXVSOCbTCGctZRUbk7cKb0'
  },
});

