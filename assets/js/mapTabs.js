document.addEventListener('DOMContentLoaded', function () {
	const plotMap = document.querySelector('.plot-map')
	fetch('./db.json')
		.then(response => response.json())
		.then(data => {
			data.forEach(function (item) {
				const area = document.querySelector(`path[data-id="${item['data-id']}"]`)
				const plotPriceElement = document.querySelector(`.plot-price.${item['data-id']}`)
				const plotDiv = document.querySelector(`.plot-tablet.${item['data-id']}`)

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

				if (plotPriceElement && item.status === 'free') {
					plotPriceElement.textContent = `${item.price} zł`
				}

				area.addEventListener('click', function () {
					const dataId = this.getAttribute('data-id')
					const existingImage = document.querySelector(`img.${dataId}`)

					if (!existingImage && (item.status === 'reserved' || item.status === 'sold')) {
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
					} else if (plotDiv && item.status === 'free') {
						plotDiv.classList.remove('hidden')
						plotDiv.querySelector('.plot-price').textContent = `${item.price} zł`

						setTimeout(function () {
							plotDiv.classList.add('hidden')
						}, 8000)
					}
				})
			})
		})
		.catch(error => console.error('Błąd wczytywania danych:', error))
})
