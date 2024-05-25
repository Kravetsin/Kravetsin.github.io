document.addEventListener('DOMContentLoaded', () => {
	const themeToggleButton = document.getElementById('theme-toggle')
	const themeStyle = document.getElementById('theme-style')
	const sunIcon = document.querySelector('.sun')
	const moonIcon = document.querySelector('.moon')

	const currentTheme = localStorage.getItem('theme') || 'light'
	themeStyle.setAttribute('href', `/styles/${currentTheme}.css`)
	sunIcon.style.opacity = currentTheme === 'dark' ? 0 : 1
	sunIcon.style.transform =
		currentTheme === 'dark' ? 'rotate(360deg)' : 'rotate(0deg)'
	moonIcon.style.opacity = currentTheme === 'dark' ? 1 : 0
	moonIcon.style.transform =
		currentTheme === 'dark' ? 'rotate(0deg)' : 'rotate(-360deg)'

	// Функция переключения темы
	function toggleTheme() {
		const theme =
			themeStyle.getAttribute('href') === '/styles/light.css' ? 'dark' : 'light'
		themeStyle.setAttribute('href', `/styles/${theme}.css`)
		localStorage.setItem('theme', theme)
		sunIcon.style.opacity = theme === 'dark' ? 0 : 1
		sunIcon.style.transform =
			theme === 'dark' ? 'rotate(360deg)' : 'rotate(0deg)'
		moonIcon.style.opacity = theme === 'dark' ? 1 : 0
		moonIcon.style.transform =
			theme === 'dark' ? 'rotate(0deg)' : 'rotate(-360deg)'
	}

	// Обработчик для нажатия кнопки
	themeToggleButton.addEventListener('click', () => {
		toggleTheme()
	})

	// Обработчик для события touchend
	themeToggleButton.addEventListener('touchend', event => {
		event.preventDefault() // Предотвращаем стандартное действие (например, прокрутку)
		toggleTheme()
	})
})
