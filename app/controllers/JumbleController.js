import { AppState } from "../AppState.js";
import { jumbleService } from "../services/JumbleService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JumbleController {
    constructor() {
        this.drawJumbles()
        console.log('running');

        AppState.on('activeJumble', this.drawActiveJumbles)
    }

    drawJumbles() {
        const jumblesListElem = document.getElementById('jumbles-list')
        let jumblesList = ''
        const jumbles = AppState.jumbles
        jumbles.forEach(jumble => jumblesList += jumble.ListTemplate)
        jumblesListElem.innerHTML = jumblesList
        console.log(jumblesListElem)
    }

    setActiveJumble(jumbleId) {
        jumbleService.getActiveJumble(jumbleId)

        console.log(jumbleId)
    }

    drawActiveJumbles() {
        const activeJumbleElem = document.getElementById('active-jumble')
        const activeJumble = AppState.activeJumble
        activeJumbleElem.innerHTML = activeJumble.ActiveTemplate
    }

    submitJumble() {
        event.preventDefault()
        const form = document.getElementById('user-form')
        const formData = getFormData(form)
        jumbleService.compareJumbles(formData.body)
        console.log(formData)
    }






}