import { generateId } from "../utils/GenerateId.js";

export class Jumble {
    constructor(data) {
        this.id = generateId();
        this.name = data.name;
        this.body = data.body;
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null;
        this.startTime = null;
        this.endTime = null;
    }

    get ListTemplate() {
        return `<li role="button" onclick="app.JumbleController.setActiveJumble('${this.id}')">${this.name}</li>`;
    }

    get ActiveTemplate() {
        return `
        

        <div class="active-jumble-box">
                <p>${this.name}</p>
                <span>${this.body}</span>

              </div>
            <form id="user-form" class="form-control">
                <textarea name="body"></textarea>
                <button onclick="app.JumbleController.submitJumble()">Submit</button>
            </form>
        `
    }
}