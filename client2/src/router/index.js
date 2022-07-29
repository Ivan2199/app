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
import NagloNastupajucaStanja from '../views/TheoryPageComponents/PrvaPomoć.vue/NagloNastupajucaStanja.vue'
import OzljedeKostijuiZglobova from '../views/TheoryPageComponents/PrvaPomoć.vue/OzljedeKostijuiZglobova.vue'
import AkcidentalnaStanja from '../views/TheoryPageComponents/PrvaPomoć.vue/AkcidentalnaStanja.vue'
import OzljedeiRane from '../views/TheoryPageComponents/PrvaPomoć.vue/OzljedeiRane.vue'
import KrvarenjeStranica from '../views/TheoryPageComponents/PrvaPomoć.vue/KrvarenjeStranica.vue'
import GubitakSvijesti from '../views/TheoryPageComponents/PrvaPomoć.vue/GubitakSvijesti.vue'
import PostupaksUnesrecenomOsobom from '../views/TheoryPageComponents/PrvaPomoć.vue/PostupaksUnesrecenomOsobom.vue'
import UvoduPrvuPomoc from '../views/TheoryPageComponents/PrvaPomoć.vue/UvoduPrvuPomoc.vue'

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
import UvoduPrvuPomocPitanja from '../views/QuestionPageComponents/PrvaPomoc/UvoduPrvuPomocPitanja.vue'
import PostupaksUnesrecenomOsobomPitanja from '../views/QuestionPageComponents/PrvaPomoc/PostupaksUnesrecenomOsobomPitanja.vue'
import GubitakSvijestiPitanja from '../views/QuestionPageComponents/PrvaPomoc/GubitakSvijestiPitanja.vue'
import KrvarenjePitanja from '../views/QuestionPageComponents/PrvaPomoc/KrvarenjePitanja.vue'
import OzljedeiRanePitanja from '../views/QuestionPageComponents/PrvaPomoc/OzljedeiRanePitanja.vue'
import OzljedeKostijuiZglobovaPitanja from '../views/QuestionPageComponents/PrvaPomoc/OzljedeKostijuiZglobovaPitanja.vue'
import AkcidentalnaStanjaPitanja from '../views/QuestionPageComponents/PrvaPomoc/AkcidentalnaStanjaPitanja.vue'
import NagloNastupajucaStanjaPitanja from '../views/QuestionPageComponents/PrvaPomoc/NagloNastupajucaStanjaPitanja.vue'

import QuizPage from '../views/QuizPage.vue'
import FirstQuiz from '../views/QuizPageComponents/FirstQuiz.vue'
import SecondQuiz from '../views/QuizPageComponents/SecondQuiz.vue'
import ThirdQuiz from '../views/QuizPageComponents/ThirdQuiz.vue'
import FourthQuiz from '../views/QuizPageComponents/FourthQuiz.vue'
import FifthQuiz from '../views/QuizPageComponents/FifthQuiz.vue'
import SixthQuiz from '../views/QuizPageComponents/SixthQuiz.vue'
import SeventhQuiz from '../views/QuizPageComponents/SeventhQuiz.vue'

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
    path: '/NagloNastupajucaStanja',
    name: 'NagloNastupajucaStanja',
    component: NagloNastupajucaStanja
  },
  {
    path: '/OzljedeKostijuiZglobova',
    name: 'OzljedeKostijuiZglobova',
    component: OzljedeKostijuiZglobova
  },
  {
    path: '/AkcidentalnaStanja',
    name: 'AkcidentalnaStanja',
    component: AkcidentalnaStanja
  },
  {
    path: '/OzljedeiRane',
    name: 'OzljedeiRane',
    component: OzljedeiRane
  },
  {
    path: '/KrvarenjeStranica',
    name: 'KrvarenjeStranica',
    component: KrvarenjeStranica
  },
  {
    path: '/GubitakSvijesti',
    name: 'GubitakSvijesti',
    component: GubitakSvijesti
  },
  {
    path: '/PostupaksUnesrecenomOsobom',
    name: 'PostupaksUnesrecenomOsobom',
    component: PostupaksUnesrecenomOsobom
  },
  {
    path: '/UvoduPrvuPomoc',
    name: 'UvoduPrvuPomoc',
    component: UvoduPrvuPomoc
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
    path: '/QuestionPage',
    name: 'QuestionPage',
    component: QuestionPage
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
    path: '/UvoduPrvuPomocPitanja',
    name: 'UvoduPrvuPomocPitanja',
    component: UvoduPrvuPomocPitanja
  },
  {
    path: '/PostupaksUnesrecenomOsobomPitanja',
    name: 'PostupaksUnesrecenomOsobomPitanja',
    component: PostupaksUnesrecenomOsobomPitanja
  },
  {
    path: '/GubitakSvijestiPitanja',
    name: 'GubitakSvijestiPitanja',
    component: GubitakSvijestiPitanja
  },
  {
    path: '/KrvarenjePitanja',
    name: 'KrvarenjePitanja',
    component: KrvarenjePitanja
  },
  {
    path: '/OzljedeiRanePitanja',
    name: 'OzljedeiRanePitanja',
    component: OzljedeiRanePitanja
  },
  {
    path: '/OzljedeKostijuiZglobovaPitanja',
    name: 'OzljedeKostijuiZglobovaPitanja',
    component: OzljedeKostijuiZglobovaPitanja
  },
  {
    path: '/AkcidentalnaStanjaPitanja',
    name: 'AkcidentalnaStanjaPitanja',
    component: AkcidentalnaStanjaPitanja
  },
  {
    path: '/NagloNastupajucaStanjaPitanja',
    name: 'NagloNastupajucaStanjaPitanja',
    component: NagloNastupajucaStanjaPitanja
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
    path: '/FifthQuiz',
    name: 'FifthQuiz',
    component: FifthQuiz
  },
  {
    path: '/SixthQuiz',
    name: 'SixthQuiz',
    component: SixthQuiz
  },
  {
    path: '/SeventhQuiz',
    name: 'SeventhQuiz',
    component: SeventhQuiz
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
