document.addEventListener('DOMContentLoaded', () => {
	const navToggle = document.getElementById('nav-toggle')
	const navMenu = document.getElementById('nav-menu')

	navToggle.addEventListener('click', () => {
		if (navMenu.style.display === 'none' || navMenu.style.display === '') {
			navMenu.style.display = 'flex'
		} else {
			navMenu.style.display = 'none'
		}
	})
})
