import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('user/register', credentials)
  }
}
