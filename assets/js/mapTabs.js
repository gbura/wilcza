const areas = document.querySelectorAll('path[data-id]')
const plotMap = document.querySelector('.plot-map')

document.addEventListener('DOMContentLoaded', function () {
	fetch('./db.json')
		.then(response => response.json())
		.then(data => {
			data.forEach(function (item) {
				const area = document.querySelector(`path[data-id="${item['data-id']}"]`)

				switch (item.status) {
					case 'free':
						area.style.fill = '#85C831'
						break
					case 'reserved':
						area.style.fill = '#ffbf00'
						break
					case 'sold':
						area.style.fill = '#ff4c20'
						break
					default:
						break
				}
				area.addEventListener('click', function () {
					const dataId = this.getAttribute('data-id')
					const existingImage = document.querySelector(`img.${dataId}`)

					if (!existingImage) {
						const img = document.createElement('img')
						let imgSrc

						switch (item.status) {
							case 'reserved':
								imgSrc = './assets/images/tablets/reserved.png'
								break
							case 'sold':
								imgSrc = './assets/images/tablets/sold.png'
								break
							default:
								imgSrc = `./assets/images/tablets/${dataId}.png`
								break
						}

						img.src = imgSrc
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
		})
		.catch(error => console.error('Błąd wczytywania danych:', error))
})
