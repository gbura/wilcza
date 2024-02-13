const formSendBtn = document.querySelector('.form-send-btn')
const emailInput = document.getElementById('email')

function validateEmail(email) {
	if (!email || email.trim() === '') {
		return false
	}
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	return regex.test(email)
}
const validateInput = (input, errorMessage) => {
	if (!input.value.trim()) {
		Swal.fire({
			icon: 'error',
			text: errorMessage,
		})
		return false
	}
	return true
}

const validatePhone = phoneInput => {
	const phoneValue = phoneInput.value.trim()
	if (phoneValue.length < 9) {
		Swal.fire({
			icon: 'error',
			text: 'Numer telefonu musi mieć co najmniej 9 cyfr!',
		})
		return false
	} else if (phoneValue.length > 9) {
		Swal.fire({
			icon: 'error',
			text: 'Numer telefonu posiada za dużo cyfr!',
		})
		return false
	}
	return true
}

formSendBtn.addEventListener('click', e => {
	e.preventDefault()

	const isValidEmail = validateEmail(emailInput.value)
	const isValidPhone = validatePhone(phone)
	const isValidPlotNumber = validateInput(plotId, 'Uzupełnij numer działki!')
	const isValidDesc = validateInput(description, 'Uzupełnij opis!')

	if (!isValidEmail || !validateInput(emailInput)) {
		Swal.fire({
			icon: 'error',
			text: 'Uzupełnij poprawny adres e-mail!',
		})
		return
	}

	if (isValidPhone && isValidPlotNumber && isValidDesc) {
		Swal.fire({
			icon: 'success',
			text: 'Wysłano wiadomość',
		}).then(() => {
			document.getElementById('phone').value = ''
			document.getElementById('email').value = ''
			document.getElementById('plotId').value = ''
			document.getElementById('description').value = ''
		})
	}
})
