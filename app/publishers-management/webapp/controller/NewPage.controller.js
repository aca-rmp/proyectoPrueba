sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (UIComponent, History, Controller, MessageBox) {
    "use strict";

    return Controller.extend("publishersmanagement.controller.NewPage", {
        onInit: function () {
            // Initialization code
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("PublishersObjectPage", {}, true);
            }
        },

        onCreatePublisher: function () {
            // Logic to create a new publisher
            MessageBox.information("Create Publisher functionality to be implemented.");
        },

        onEditPublisher: function (oEvent) {
            const oItem = oEvent.getSource().getSelectedItem();
            if (oItem) {
                const oContext = oItem.getBindingContext();
                const sPath = oContext.getPath();
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("PublishersObjectPage", {
                    key: oContext.getProperty("PublisherID")
                });
            } else {
                MessageBox.warning("Please select a publisher to edit.");
            }
        },

        onDeletePublisher: function (oEvent) {
            const oItem = oEvent.getSource().getSelectedItem();
            if (oItem) {
                const oContext = oItem.getBindingContext();
                const sPath = oContext.getPath();
                const oModel = this.getView().getModel();

                MessageBox.confirm("Are you sure you want to delete this publisher?", {
                    onClose: function (sAction) {
                        if (sAction === MessageBox.Action.OK) {
                            oModel.remove(sPath, {
                                success: function () {
                                    MessageBox.success("Publisher deleted successfully.");
                                },
                                error: function () {
                                    MessageBox.error("Failed to delete publisher.");
                                }
                            });
                        }
                    }
                });
            } else {
                MessageBox.warning("Please select a publisher to delete.");
            }
        }
    });
});