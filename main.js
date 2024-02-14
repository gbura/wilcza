import './assets/css/main.css'
import './assets/js/swiper'
import './assets/js/validation'
import './assets/js/mapTabs'
import './assets/js/scrollReveal'
import './assets/js/gallery'

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu-item')
const hamburgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

const handleNav = () => {
	hamburgerBtn.classList.toggle('is-active')
	menu.classList.toggle('active')

	if (menu.classList.contains('active')) {
		body.style.overflow = 'hidden'
		nav.style.height = '85vh'
	} else {
		body.style.overflow = ''
		nav.style.height = ''
	}
}

menuItems.forEach(item =>
	item.addEventListener('click', () => {
		menu.classList.remove('active')
		hamburgerBtn.classList.remove('is-active')

		body.style.overflow = ''
		nav.style.height = ''
	})
)

hamburgerBtn.addEventListener('click', handleNav)
