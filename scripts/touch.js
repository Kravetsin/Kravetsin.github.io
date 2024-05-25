document.addEventListener('DOMContentLoaded', () => {
	// Функция для проверки тач-устройств
	function isTouchDevice() {
		return (
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		)
	}

	// Добавление класса 'touch-device' к <body>, если устройство является тач-устройством
	if (isTouchDevice()) {
		document.body.classList.add('touch-device')
	}

	// Проверка, является ли устройство тач-устройством
	if (document.body.classList.contains('touch-device')) {
		// Для тач-устройств, заменяем :hover на :active
		const hoverElements = document.querySelectorAll('.hover-effect')
		hoverElements.forEach(element => {
			element.addEventListener('touchstart', () => {
				element.classList.add('hover-active')
			})
			element.addEventListener('touchend', () => {
				element.classList.remove('hover-active')
			})
		})
	}
})
