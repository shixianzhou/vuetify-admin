import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: 'settings',
				name: 'settings',
				component: Settings
			},
			{
				path: '/about',
				name: 'about',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
			},
		]
	},

	{
		path: '/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let a = 0
	if (a = 1) {
		next()
	} else {
		a = 1
		next('/login')
	}
})

export default router
