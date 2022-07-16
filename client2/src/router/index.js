import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import MainPage from '../views/MainPage.vue'

import Theory from '../views/TheoryPage.vue'
import PropisiuCestovnomPrometu from '../views/TheoryPageComponents/PropisiuCestovnomPrometu.vue'
import CestaiNjenaObiljezja from '../views/TheoryPageComponents/CestaiNjenaObiljezja.vue'
import PonasanjeSudionikauPrometu from '../views/TheoryPageComponents/PonasanjeSudionikauPrometu.vue'
import ZnakoviuPrometu from '../views/TheoryPageComponents/ZnakoviuPrometu.vue'
import OstaliSudioniciuCestovnomPrometu from '../views/TheoryPageComponents/OstaliSudioniciuCestovnomPrometu.vue'

import QuestionPage from '../views/QuestionsPage.vue'
import PropisiuCestovnomPrometuPitanja from '../views/QuestionPageComponents/PropisiuCestovnomPrometuPitanja.vue'

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
    path: 'PonasanjeSudionikauPrometu',
    name: 'PonasanjeSudionikauPrometu',
    component: PonasanjeSudionikauPrometu
  },
  {
    path: 'ZnakoviuPrometu',
    name: 'ZnakoviuPrometu',
    component: ZnakoviuPrometu
  },
  {
    path: 'OstaliSudioniciuCestovnomPrometu',
    name: 'OstaliSudioniciuCestovnomPrometu',
    component: OstaliSudioniciuCestovnomPrometu
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
