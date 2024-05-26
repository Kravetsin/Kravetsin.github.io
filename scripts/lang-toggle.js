document.addEventListener('DOMContentLoaded', () => {
	const langToggleButton = document.getElementById('lang-toggle')

	// Функция для установки языка с анимацией
	function setLanguage(lang) {
		const elements = document.querySelectorAll('[data-en], [data-de]')

		elements.forEach(el => {
			// Добавить класс fade-out для плавного исчезновения
			el.classList.add('fade-out')
		})

		// После завершения анимации сменить текст и добавить класс fade-in для плавного появления
		setTimeout(() => {
			elements.forEach(el => {
				el.textContent = el.getAttribute(`data-${lang}`)
				el.classList.remove('fade-out')
				el.classList.add('fade-in')
			})

			// Удалить класс fade-in после завершения анимации появления
			setTimeout(() => {
				elements.forEach(el => {
					el.classList.remove('fade-in')
				})
			}, 500)

			localStorage.setItem('language', lang)
			langToggleButton.textContent = lang === 'en' ? 'DE' : 'EN'
		}, 500)
	}

	// Получение сохраненного языка из localStorage или установка по умолчанию
	const savedLanguage = localStorage.getItem('language') || 'en'
	setLanguage(savedLanguage)

	// Переключение языка при нажатии на кнопку
	langToggleButton.addEventListener('click', () => {
		const currentLanguage = localStorage.getItem('language')
		const newLanguage = currentLanguage === 'en' ? 'de' : 'en'
		setLanguage(newLanguage)
	})
})
