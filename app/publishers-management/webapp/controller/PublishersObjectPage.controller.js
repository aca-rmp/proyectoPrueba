sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/Controller"
], function (UIComponent, Controller) {
    "use strict";

    return Controller.extend("publishersmanagement.controller.PublishersObjectPage", {
        onNavToNewPage: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("NewPage");
        }
    });
});