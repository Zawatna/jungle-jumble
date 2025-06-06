import { AppState } from "../AppState.js"
import { Jumble } from "../models/jumble.js"

class JumbleService {
    getActiveJumble(jumbleId) {
        const selectedJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = selectedJumble
        console.log(selectedJumble)
    }


    compareJumbles(formData) {

        const correctJumble = AppState.activeJumble.body
        correctJumble == formData ? window.alert("You Win!") : window.alert("Try Again!")
        console.log(formData, correctJumble)
    }

    startGame(task) {
        const startTime = new Date();
        task();
        const endTime = new Date();
        let elapsedSeconds = endTime - startTime;

        console.log(elapsedSeconds);
    }

    endGame() {

    }
}


export const jumbleService = new JumbleService()