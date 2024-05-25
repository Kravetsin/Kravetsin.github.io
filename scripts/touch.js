document.addEventListener('DOMContentLoaded', () => {
	// Функция для проверки тач-устройств
	function isTouchDevice() {
		return (
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		)
	}

	// Проверка, является ли устройство тач-устройством
	if (isTouchDevice()) {
		// Добавление класса 'touch-device' к <body>, если устройство является тач-устройством
		document.body.classList.add('touch-device')
	}
})
