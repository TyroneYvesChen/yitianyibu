import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import Blog from 'pages/blog/blog'
import About from 'pages/about/about'
import Contact from 'pages/contact/contact'
import Portfolio from 'pages/portfolio/portfolio'
import Post from 'pages/post/post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/index', redirect: '/' },
    {path: '/blog', component: Blog},
    {path: '/blog/:id', component: Post},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/portfolio', component: Portfolio}
  ]
})
