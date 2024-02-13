const areas = document.querySelectorAll('path[data-id]')
const plotMap = document.querySelector('.plot-map')

areas.forEach(function (area) {
	area.addEventListener('click', function () {
		const dataId = this.getAttribute('data-id')
		const existingImage = document.querySelector(`img.${dataId}`)

		if (!existingImage) {
			const img = document.createElement('img')
			img.src = `./assets/images/tablets/${dataId}.png`
			img.alt = `Działka nr ${dataId}`
			img.classList.add(dataId, 'plate', 'invisible')

			plotMap.appendChild(img)

			setTimeout(function () {
				img.classList.remove('invisible')
				img.classList.add('visible')
			}, 100)

			setTimeout(function () {
				img.remove()
			}, 8000)
		}
	})
})
