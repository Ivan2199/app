import Api from '@/services/Api'

export default {
  getQuestions() {
    return Api().get('user/questions')
  }
}
