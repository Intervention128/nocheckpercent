const buttonClassBecauseItDoesntHaveAnId = "._button_cmw0a_1"

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function disableButton() {
  let button = document.querySelector(buttonClassBecauseItDoesntHaveAnId)
  do {
    await sleep(20)
    button = document.querySelector(buttonClassBecauseItDoesntHaveAnId)
  } while (!button)
  console.log(button)
  button.style.pointerEvents  = "none"
  button.style.display = "none"
}

void function run() {
  disableButton()
  console.log("NoCheckPercent enabled.")
}()
