function hideLoader() {
	const loader = document.getElementById('loader')
	const content = document.querySelector('.content')
	loader.style.display = 'none'
	content.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () => {
	const loaderPromise = new Promise(resolve => {
		setTimeout(() => {
			resolve('Animation Complete')
		}, 2000)
	})

	const loadPromise = new Promise(resolve => {
		window.addEventListener('load', () => {
			resolve('Page Loaded')
		})
	})

	Promise.race([loaderPromise, loadPromise]).then(() => {
		hideLoader()
	})
})
