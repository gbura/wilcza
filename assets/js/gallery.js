document.addEventListener('DOMContentLoaded', function () {
	const overlay = document.createElement('div')
	overlay.classList.add('overlay')
	let images = []
	let currentImageIndex = 0

	fetch('./photos.json')
		.then(response => response.json())
		.then(data => {
			images = data.images
			setupGallery()
		})
		.catch(error => console.error('Error fetching images:', error))

	function setupGallery() {
		const galleryItems = document.querySelectorAll('.gallery-item')

		galleryItems.forEach(function (item, index) {
			item.addEventListener('click', function () {
				currentImageIndex = index
				const imgSrc = images[currentImageIndex]
				createOverlay(imgSrc)
			})
		})
	}

	function createOverlay(imgSrc) {
		overlay.innerHTML = `
            <div class="overlay-content">
                <span class="close-btn">&times;</span>
                <img src="${imgSrc}" class="overlay-img">
                <span class="prev-btn">&lt;</span>
                <span class="next-btn">&gt;</span>
            </div>
        `
		document.body.appendChild(overlay)

		const closeBtn = overlay.querySelector('.close-btn')
		closeBtn.addEventListener('click', function () {
			document.body.removeChild(overlay)
		})

		const prevBtn = overlay.querySelector('.prev-btn')
		prevBtn.addEventListener('click', function () {
			navigateImage(-1)
		})

		const nextBtn = overlay.querySelector('.next-btn')
		nextBtn.addEventListener('click', function () {
			navigateImage(1)
		})
	}

	function navigateImage(direction) {
		currentImageIndex = (currentImageIndex + direction + images.length) % images.length
		const currentImg = overlay.querySelector('.overlay-img')
		currentImg.src = images[currentImageIndex]
	}
})
