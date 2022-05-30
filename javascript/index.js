const inputUserNewPassword = document.getElementById('inputUserNewPassword')
const inputUserNewPasswordConfirm = document.getElementById(
  'inputUserNewPasswordConfirm'
)
const inputTransferCardNumber = document.getElementById(
  'inputTransferCardNumber'
)
const inputTransferName = document.getElementById('inputTransferName')
const inputWithdrawAmount = document.getElementById('inputWithdrawAmount')
const inputWithdrawFee = document.getElementById('inputWithdrawFee')

const inputWithdrawTotalAmount = document.getElementById(
  'inputWithdrawTotalAmount'
)
const btnNextToTransferConfirm = document.getElementById(
  'btnNextToTransferConfirm'
)
const btnPreviousToTransfer = document.getElementById('btnPreviousToTransfer')
const btnNextToDepositConfirm = document.getElementById(
  'btnNextToDepositConfirm'
)
const btnPreviousToDeposit = document.getElementById('btnPreviousToDeposit')
const btnNextToWithdrawConfirm = document.getElementById(
  'btnNextToWithdrawConfirm'
)
const btnPreviousToWithdraw = document.getElementById('btnPreviousToWithdraw')
const btnNextToPhoneCardConfirm = document.getElementById(
  'btnNextToPhoneCardConfirm'
)
const btnPreviousToPhoneCard = document.getElementById('btnPreviousToPhoneCard')

const alertUserChangePassword = document.getElementById(
  'alertUserChangePassword'
)
const alertWithdrawAmount = document.getElementById('alertWithdrawAmount')

let modelTransfer = document.getElementById('modelTransfer')
let modelTransferConfirm = document.getElementById('modelTransferConfirm')
let modelDeposit = document.getElementById('modelDeposit')
let modelDepositConfirm = document.getElementById('modelDepositConfirm')
let modelWithdraw = document.getElementById('modelWithdraw')
let modelWithdrawConfirm = document.getElementById('modelWithdrawConfirm')
let modelPhoneCard = document.getElementById('modelPhoneCard')
let modelPhoneCardConfirm = document.getElementById('modelPhoneCardConfirm')

inputUserNewPasswordConfirm.addEventListener('keyup', function () {
  if (inputUserNewPassword.value != inputUserNewPasswordConfirm.value) {
    alertUserChangePassword.classList.remove('d-none')
  } else {
    alertUserChangePassword.classList.add('d-none')
  }
})

inputWithdrawAmount.addEventListener('keyup', function (event) {
  event.preventDefault()
  // inputWithdrawAmount divide by 50000
  const inputWithdrawAmountValue = parseInt(inputWithdrawAmount.value)
  if (inputWithdrawAmountValue % 50000 === 0) {
    alertWithdrawAmount.classList.add('d-none')
  } else {
    alertWithdrawAmount.classList.remove('d-none')
  }
  console.log(inputWithdrawAmountValue * 0.05)
  inputWithdrawFee.value = parseInt(inputWithdrawAmountValue) * 0.05
  inputWithdrawTotalAmount.value =
    parseInt(inputWithdrawFee.value) + parseInt(inputWithdrawAmountValue)
})

modelDeposit = new bootstrap.Modal(modelDeposit, {
  keyboard: false,
})

modelDepositConfirm = new bootstrap.Modal(modelDepositConfirm, {
  keyboard: false,
})

modelWithdraw = new bootstrap.Modal(modelWithdraw, {
  keyboard: false,
})

modelWithdrawConfirm = new bootstrap.Modal(modelWithdrawConfirm, {
  keyboard: false,
})

modelTransfer = new bootstrap.Modal(modelTransfer, {
  keyboard: false,
})

modelTransferConfirm = new bootstrap.Modal(modelTransferConfirm, {
  keyboard: false,
})

modelPhoneCard = new bootstrap.Modal(modelPhoneCard, {
  keyboard: false,
})

modelPhoneCardConfirm = new bootstrap.Modal(modelPhoneCardConfirm, {
  keyboard: false,
})

btnNextToTransferConfirm.addEventListener('click', function (event) {
  event.preventDefault()
  modelTransfer.hide()
  modelTransferConfirm.show()

  const inputTransferCardNumber = document.getElementById(
    'inputTransferCardNumber'
  )
  const inputTransferName = document.getElementById('inputTransferName')
  const inputTransferAmount = document.getElementById('inputTransferAmount')
  const inputTransferNote = document.getElementById('inputTransferNote')
  const inputTransferFee = document.getElementById('inputTransferFee')

  const inputTransferConfirmCardNumber = document.getElementById(
    'inputTransferConfirmCardNumber'
  )
  const inputTransferConfirmName = document.getElementById(
    'inputTransferConfirmName'
  )
  const inputTransferConfirmAmount = document.getElementById(
    'inputTransferConfirmAmount'
  )
  const inputTransferConfirmNote = document.getElementById(
    'inputTransferConfirmNote'
  )
  const inputTransferConfirmFee = document.getElementById(
    'inputTransferConfirmFee'
  )
  inputTransferConfirmCardNumber.value = inputTransferCardNumber.value
  inputTransferConfirmName.value = inputTransferName.value
  inputTransferConfirmAmount.value = inputTransferAmount.value
  inputTransferConfirmNote.value = inputTransferNote.value
  inputTransferConfirmFee.value = inputTransferFee.value
})

btnPreviousToTransfer.addEventListener('click', function (event) {
  event.preventDefault()
  modelTransfer.show()
  modelTransferConfirm.hide()
})

btnNextToDepositConfirm.addEventListener('click', function (event) {
  event.preventDefault()
  modelDeposit.hide()
  modelDepositConfirm.show()

  const inputDepositCardNumber = document.getElementById(
    'inputDepositCardNumber'
  )
  const inputDepositCardExpirationDate = document.getElementById(
    'inputDepositCardExpirationDate'
  )
  const inputDepositCardCodeCVV = document.getElementById(
    'inputDepositCardCodeCVV'
  )
  const inputDepositAmount = document.getElementById('inputDepositAmount')

  const inputDepositConfirmCardNumber = document.getElementById(
    'inputDepositConfirmCardNumber'
  )
  const inputDepositConfirmCardExpirationDate = document.getElementById(
    'inputDepositConfirmCardExpirationDate'
  )
  const inputDepositConfirmCardCodeCVV = document.getElementById(
    'inputDepositConfirmCardCodeCVV'
  )
  const inputDepositConfirmAmount = document.getElementById(
    'inputDepositConfirmAmount'
  )

  inputDepositConfirmCardNumber.value = inputDepositCardNumber.value
  inputDepositConfirmCardExpirationDate.value =
    inputDepositCardExpirationDate.value
  inputDepositConfirmCardCodeCVV.value = inputDepositCardCodeCVV.value
  inputDepositConfirmAmount.value = inputDepositAmount.value
})

btnPreviousToDeposit.addEventListener('click', function (event) {
  event.preventDefault()
  modelDeposit.show()
  modelDepositConfirm.hide()
})

btnNextToWithdrawConfirm.addEventListener('click', function (event) {
  event.preventDefault()
  modelWithdraw.hide()
  modelWithdrawConfirm.show()

  const inputWithdrawCardNumber = document.getElementById(
    'inputWithdrawCardNumber'
  )
  const inputWithdrawExpirationDate = document.getElementById(
    'inputWithdrawCardExpirationDate'
  )
  const inputWithdrawCodeCVV = document.getElementById(
    'inputWithdrawCardCodeCVV'
  )
  const inputWithdrawNote = document.getElementById('inputWithdrawNote')
  const inputWithdrawAmount = document.getElementById('inputWithdrawAmount')
  const inputWithdrawFee = document.getElementById('inputWithdrawFee')
  const inputWithdrawTotalAmount = document.getElementById(
    'inputWithdrawTotalAmount'
  )

  const inputWithdrawConfirmCardNumber = document.getElementById(
    'inputWithdrawConfirmCardNumber'
  )
  const inputWithdrawConfirmExpirationDate = document.getElementById(
    'inputWithdrawConfirmCardExpirationDate'
  )
  const inputWithdrawConfirmCodeCVV = document.getElementById(
    'inputWithdrawConfirmCardCodeCVV'
  )
  const inputWithdrawConfirmNote = document.getElementById(
    'inputWithdrawConfirmNote'
  )
  const inputWithdrawConfirmAmount = document.getElementById(
    'inputWithdrawConfirmAmount'
  )
  const inputWithdrawConfirmFee = document.getElementById(
    'inputWithdrawConfirmFee'
  )
  const inputWithdrawConfirmTotalAmount = document.getElementById(
    'inputWithdrawConfirmTotalAmount'
  )

  inputWithdrawConfirmCardNumber.value = inputWithdrawCardNumber.value
  inputWithdrawConfirmExpirationDate.value = inputWithdrawExpirationDate.value
  inputWithdrawConfirmCodeCVV.value = inputWithdrawCodeCVV.value
  inputWithdrawConfirmNote.value = inputWithdrawNote.value
  inputWithdrawConfirmAmount.value = inputWithdrawAmount.value
  inputWithdrawConfirmFee.value = inputWithdrawFee.value
  inputWithdrawConfirmTotalAmount.value = inputWithdrawTotalAmount.value
})

btnPreviousToWithdraw.addEventListener('click', function (event) {
  event.preventDefault()
  modelWithdraw.show()
  modelWithdrawConfirm.hide()
})

btnNextToPhoneCardConfirm.addEventListener('click', function (event) {
  event.preventDefault()
  modelPhoneCard.hide()
  modelPhoneCardConfirm.show()

  const inputPhoneCardNetwork = document.getElementById('inputPhoneCardNetwork')
  const inputPhoneCardPrice = document.getElementById('inputPhoneCardPrice')
  const inputPhoneCardQuantity = document.getElementById(
    'inputPhoneCardQuantity'
  )

  const inputPhoneCardConfirmNetwork = document.getElementById(
    'inputPhoneCardConfirmNetwork'
  )
  const inputPhoneCardConfirmPrice = document.getElementById(
    'inputPhoneCardConfirmPrice'
  )
  const inputPhoneCardConfirmQuantity = document.getElementById(
    'inputPhoneCardConfirmQuantity'
  )

  inputPhoneCardConfirmNetwork.value = inputPhoneCardNetwork.value
  inputPhoneCardConfirmPrice.value = inputPhoneCardPrice.value
  inputPhoneCardConfirmQuantity.value = inputPhoneCardQuantity.value
})

btnPreviousToPhoneCard.addEventListener('click', function (event) {
  event.preventDefault()
  modelPhoneCard.show()
  modelPhoneCardConfirm.hide()
})

// Event out focus input transfer card number
inputTransferCardNumber.addEventListener('blur', function (event) {
  event.preventDefault()
  // Fetch name from API
  const inputTransferCardNumberValue = inputTransferCardNumber.value
})
