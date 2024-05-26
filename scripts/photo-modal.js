document.addEventListener('DOMContentLoaded', () => {
	const photoToggleButton = document.getElementById('photo-toggle')
	const modal = document.getElementById('photo-modal')
	const closeButton = document.querySelector('.close')

	photoToggleButton.addEventListener('click', () => {
		modal.style.display = 'block'
	})

	closeButton.addEventListener('click', () => {
		modal.style.display = 'none'
	})

	window.addEventListener('click', event => {
		if (event.target === modal) {
			modal.style.display = 'none'
		}
	})
})
