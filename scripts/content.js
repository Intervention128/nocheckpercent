function disableButton() {
  const buttonClassBecauseItDoesntHaveAnId = "._button_cmw0a_1"
  const button = document.querySelector(buttonClassBecauseItDoesntHaveAnId)
  button.style.pointerEvents  = "none"
  button.style.display = "none"
}

void function run() {
  disableButton()
}()
