const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://geek-flix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};