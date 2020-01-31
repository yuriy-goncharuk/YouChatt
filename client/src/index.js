import { View } from "./scripts/view";
import { Model } from "./scripts/model";
import { Controller } from "./scripts/controller";

window.addEventListener("DOMContentLoaded", function () {
    {
        const view = new View();
        const model = new Model();
        const controller = new Controller();

        view.addObserver(controller);
        view.addObserver(model)
        model.addObserver(controller);
        model.addObserver(view);
        controller.addObserver(model);
        controller.addObserver(view);
    }
})