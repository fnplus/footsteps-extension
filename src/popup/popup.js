const EXISTING_PATH_RADIO_ID = "existing-path-radio"
const NEW_PATH_RADIO_ID = "new-path-radio"
const EXISTING_PATH_SELECTOR_ID = "existing-path-selector"
const NEW_PATH_INPUT_ID = "new-path-input"
const PATH_SELECTOR_IDS = [EXISTING_PATH_SELECTOR_ID, NEW_PATH_INPUT_ID]

const radioHandler = (e) => {
    switch(e.target.id) {
        case EXISTING_PATH_RADIO_ID: showPathSelector(EXISTING_PATH_SELECTOR_ID); return
        case NEW_PATH_RADIO_ID: showPathSelector(NEW_PATH_INPUT_ID); return
        default: showPathSelector(NEW_PATH_INPUT_ID); return
    }
}

const showPathSelector = (selectorID) => {
    console.log(selectorID)
    PATH_SELECTOR_IDS.forEach(id => {
        if (selectorID == id) {
            document.getElementById(id).style.display = "block"
        } else {
            document.getElementById(id).style.display = "none"
        }
    })
}

document.getElementById(EXISTING_PATH_RADIO_ID).addEventListener("change", radioHandler)
document.getElementById(NEW_PATH_RADIO_ID).addEventListener("change", radioHandler)