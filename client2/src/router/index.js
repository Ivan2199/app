import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import MainPage from '../views/MainPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

import RoadSign from '../views/RoadSign.vue'
import ZnakoviOpasnosti from '../views/RoadSigns/ZnakoviOpasnosti.vue'
import ZnakoviIzricitihNaredbi from '../views/RoadSigns/ZnakoviIzricitihNaredbi.vue'
import ZnakoviObavijesti from '../views/RoadSigns/ZnakoviObavijesti.vue'
import ZnakoviZaVodenjePrometa from '../views/RoadSigns/ZnakoviZaVodenjePrometa.vue'

import Theory from '../views/TheoryPage.vue'
import PropisiuCestovnomPrometu from '../views/TheoryPageComponents/PropisiuCestovnomPrometu.vue'
import CestaiNjenaObiljezja from '../views/TheoryPageComponents/CestaiNjenaObiljezja.vue'
import PonasanjeSudionikauPrometu from '../views/TheoryPageComponents/PonasanjeSudionikauPrometu.vue'
import ZnakoviuPrometu from '../views/TheoryPageComponents/ZnakoviuPrometu.vue'
import OstaliSudioniciuCestovnomPrometu from '../views/TheoryPageComponents/OstaliSudioniciuCestovnomPrometu.vue'
import VoznjauPosebnimUvjetima from '../views/TheoryPageComponents/VoznjauPosebnimUvjetima.vue'
import PostupakuSlucajuPrometneNesrece from '../views/TheoryPageComponents/PostupakuSlucajuPrometneNesrece.vue'
import VoznjaIzvanNaselja from '../views/TheoryPageComponents/VoznjaIzvanNaselja.vue'
import VoznjauNaselju from '../views/TheoryPageComponents/VoznjauNaselju.vue'
import VozilouFunkcijiSigurnostiPrometa from '../views/TheoryPageComponents/VozilouFunkcijiSigurnostiPrometa.vue'
import PrometnaPravila from '../views/TheoryPageComponents/PrometnaPravila.vue'
import UocavanjePrometnihUvjetaiSituacija from '../views/TheoryPageComponents/UocavanjePrometnihUvjetaiSituacija.vue'
// prvapomoc
import PrvaPomoc from '../views/TheoryPageComponents/PrvaPomoć/PrvaPomoc.vue'

import QuestionPage from '../views/QuestionsPage.vue'
import PropisiuCestovnomPrometuPitanja from '../views/QuestionPageComponents/PropisiuCestovnomPrometuPitanja.vue'
import CestaiNjenaObiljezjaPitanja from '../views/QuestionPageComponents/CestaiNjenaObiljezjaPitanja.vue'
import PonasanjeSudionikauPrometuPitanja from '../views/QuestionPageComponents/PonasanjeSudionikauPrometuPitanja.vue'
import ZnakoviuPrometuPitanja from '../views/QuestionPageComponents/ZnakoviuPrometuPitanja.vue'
import OstaliSudioniciuCestovnomPrometuPitanja from '../views/QuestionPageComponents/OstaliSudioniciuCestovnomPrometuPitanja.vue'
import UocavanjePrometnihUvjetaiSituacijaPitanja from '../views/QuestionPageComponents/UocavanjePrometnihUvjetaiSituacijaPitanja.vue'
import PrometnaPravilaPitanja from '../views/QuestionPageComponents/PrometnaPravilaPitanja.vue'
import VozilouFunkcijiSigurnostiPrometaPitanja from '../views/QuestionPageComponents/VozilouFunkcijiSigurnostiPrometaPitanja.vue'
import VoznjauNaseljuPitanja from '../views/QuestionPageComponents/VoznjauNaseljuPitanja.vue'
import VoznjaIzvanNaseljaPitanja from '../views/QuestionPageComponents/VoznjaIzvanNaseljaPitanja.vue'
import PostupakuSlucajuPrometneNesrecePitanja from '../views/QuestionPageComponents/PostupakuSlucajuPrometneNesrecePitanja.vue'
import VoznjauPosebnimUvjetimaPitanja from '../views/QuestionPageComponents/VoznjauPosebnimUvjetimaPitanja.vue'
//prvapomoc
import PrvaPomocPitanja from '../views/QuestionPageComponents/PrvaPomoc/PrvaPomocPitanja.vue'

import QuizPage from '../views/QuizPage.vue'
import FirstQuiz from '../views/QuizPageComponents/FirstQuiz.vue'
import SecondQuiz from '../views/QuizPageComponents/SecondQuiz.vue'
import ThirdQuiz from '../views/QuizPageComponents/ThirdQuiz.vue'
import FourthQuiz from '../views/QuizPageComponents/FourthQuiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/theory',
    name: 'theory',
    component: Theory
  },
  {
    path: '/PropisiuCestovnomPrometu',
    name: 'PropisiuCestovnomPrometu',
    component: PropisiuCestovnomPrometu
  },
  {
    path: '/CestaiNjenaObiljezja',
    name: 'CestaiNjenaObiljezja',
    component: CestaiNjenaObiljezja
  },
  {
    path: '/PonasanjeSudionikauPrometu',
    name: 'PonasanjeSudionikauPrometu',
    component: PonasanjeSudionikauPrometu
  },
  {
    path: '/OstaliSudioniciuCestovnomPrometu',
    name: 'OstaliSudioniciuCestovnomPrometu',
    component: OstaliSudioniciuCestovnomPrometu
  },
  {
    path: '/ZnakoviuPrometu',
    name: 'ZnakoviuPrometu',
    component: ZnakoviuPrometu
  },
  {
    path: '/VoznjauPosebnimUvjetima',
    name: 'VoznjauPosebnimUvjetima',
    component: VoznjauPosebnimUvjetima
  },
  {
    path: '/PostupakuSlucajuPrometneNesrece',
    name: 'PostupakuSlucajuPrometneNesrece',
    component: PostupakuSlucajuPrometneNesrece
  },
  {
    path: '/VoznjaIzvanNaselja',
    name: 'VoznjaIzvanNaselja',
    component: VoznjaIzvanNaselja
  },
  {
    path: '/VoznjauNaselju',
    name: 'VoznjauNaselju',
    component: VoznjauNaselju
  },
  {
    path: '/VozilouFunkcijiSigurnostiPrometa',
    name: 'VozilouFunkcijiSigurnostiPrometa',
    component: VozilouFunkcijiSigurnostiPrometa
  },
  {
    path: '/PrometnaPravila',
    name: 'PrometnaPravila',
    component: PrometnaPravila
  },
  {
    path: '/UocavanjePrometnihUvjetaiSituacija',
    name: 'UocavanjePrometnihUvjetaiSituacija',
    component: UocavanjePrometnihUvjetaiSituacija
  },
  {
    path: '/PrvaPomoc',
    name: 'PrvaPomoc',
    component: PrvaPomoc
  },

  {
    path: '/QuestionPage',
    name: 'QuestionPage',
    component: QuestionPage
  },
  {
    path: '/PropisiuCestovnomPrometuPitanja',
    name: 'PropisiuCestovnomPrometuPitanja',
    component: PropisiuCestovnomPrometuPitanja
  },
  {
    path: '/CestaiNjenaObiljezjaPitanja',
    name: 'CestaiNjenaObiljezjaPitanja',
    component: CestaiNjenaObiljezjaPitanja
  },
  {
    path: '/PonasanjeSudionikauPrometuPitanja',
    name: 'PonasanjeSudionikauPrometuPitanja',
    component: PonasanjeSudionikauPrometuPitanja
  },
  {
    path: '/ZnakoviuPrometuPitanja',
    name: 'ZnakoviuPrometuPitanja',
    component: ZnakoviuPrometuPitanja
  },
  {
    path: '/OstaliSudioniciuCestovnomPrometuPitanja',
    name: 'OstaliSudioniciuCestovnomPrometuPitanja',
    component: OstaliSudioniciuCestovnomPrometuPitanja
  },
  {
    path: '/UocavanjePrometnihUvjetaiSituacijaPitanja',
    name: 'UocavanjePrometnihUvjetaiSituacijaPitanja',
    component: UocavanjePrometnihUvjetaiSituacijaPitanja
  },
  {
    path: '/PrometnaPravilaPitanja',
    name: 'PrometnaPravilaPitanja',
    component: PrometnaPravilaPitanja
  },
  {
    path: '/VozilouFunkcijiSigurnostiPrometaPitanja',
    name: 'VozilouFunkcijiSigurnostiPrometaPitanja',
    component: VozilouFunkcijiSigurnostiPrometaPitanja
  },
  {
    path: '/VoznjauNaseljuPitanja',
    name: 'VoznjauNaseljuPitanja',
    component: VoznjauNaseljuPitanja
  },
  {
    path: '/VoznjaIzvanNaseljaPitanja',
    name: 'VoznjaIzvanNaseljaPitanja',
    component: VoznjaIzvanNaseljaPitanja
  },
  {
    path: '/PostupakuSlucajuPrometneNesrecePitanja',
    name: 'PostupakuSlucajuPrometneNesrecePitanja',
    component: PostupakuSlucajuPrometneNesrecePitanja
  },
  {
    path: '/VoznjauPosebnimUvjetimaPitanja',
    name: 'VoznjauPosebnimUvjetimaPitanja',
    component: VoznjauPosebnimUvjetimaPitanja
  },
  {
    path: '/PrvaPomocPitanja',
    name: 'PrvaPomocPitanja',
    component: PrvaPomocPitanja
  },
  {
    path: '/QuizPage',
    name: 'QuizPage',
    component: QuizPage
  },
  {
    path: '/FirstQuiz',
    name: 'FirstQuiz',
    component: FirstQuiz
  },
  {
    path: '/SecondQuiz',
    name: 'SecondQuiz',
    component: SecondQuiz
  },
  {
    path: '/ThirdQuiz',
    name: 'ThirdQuiz',
    component: ThirdQuiz
  },
  {
    path: '/FourthQuiz',
    name: 'FourthQuiz',
    component: FourthQuiz
  },
  {
    path: '/RoadSign',
    name: 'RoadSign',
    component: RoadSign
  },
  {
    path: '/ZnakoviOpasnosti',
    name: 'ZnakoviOpasnosti',
    component: ZnakoviOpasnosti
  },
  {
    path: '/ZnakoviIzricitihNaredbi',
    name: 'ZnakoviIzricitihNaredbi',
    component: ZnakoviIzricitihNaredbi
  },
  {
    path: '/ZnakoviObavijesti',
    name: 'ZnakoviObavijesti',
    component: ZnakoviObavijesti
  },
  {
    path: '/ZnakoviZaVodenjePrometa',
    name: 'ZnakoviZaVodenjePrometa',
    component: ZnakoviZaVodenjePrometa
  },
  {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: ProfilePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
