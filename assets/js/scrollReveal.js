const sr = ScrollReveal({
	distance: '40px',
	duration: 2500,
	delay: 100,
})

sr.reveal(`.img-container, .main-page-header, .buttons, .plot-boxes, .gallery-container, .footer-container`, {
	origin: 'left',
})
sr.reveal(`.wolf-pass-text-container, .swiper, .form`, { origin: 'right' })
sr.reveal(`.header`, { origin: 'top', distance: '10px' })
sr.reveal(`.title`, { origin: 'bottom', distance: '20px' })
sr.reveal(`.wolf-pass-localization, .map, .plot-map`, { origin: 'bottom' })
