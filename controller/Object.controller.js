/*global location*/
sap.ui.define([
    "app/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "app/model/formatter",
    "app/model/constants",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
  ], function (
    BaseController,
    JSONModel,
    History,
    formatter,
    constants,
    Dialog,
    Button,
    Text,
    MessageToast,
    MessageBox
  ) {
    "use strict";

    return BaseController.extend("app.controller.Object", {

      formatter: formatter,

      /* =========================================================== */
      /* lifecycle methods                                           */
      /* =========================================================== */

      /**
       * Called when the worklist controller is instantiated.
       * @public
       */
      onInit : function () {
        
        
      },

      /* =========================================================== */
      /* event handlers                                              */
      /* =========================================================== */


      /**
       * Event handler  for navigating back.
       * It there is a history entry we go one step back in the browser history
       * If not, it will replace the current entry of the browser history with the worklist route.
       * @public
       */
      onNavBack : function() {
          history.go(-1);
      },

      onSaveHandler: function() {
        
      },

      /* =========================================================== */
      /* internal methods                                            */
      /* =========================================================== */

      /**
       * Binds the view to the object path.
       * @function
       * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
       * @private
       */
      _onObjectMatched : function (oEvent) {
        
      },

      /**
       * Binds the view to the object path.
       * @function
       * @param {string} sObjectPath path to the object to be bound
       * @private
       */
      _bindView : function (sObjectPath) {
        
      },

      _onBindingChange : function () {
        var oView = this.getView(),
          oViewModel = this.getModel("objectView"),
          oElementBinding = oView.getElementBinding();

        // No data for the binding
        if (!oElementBinding.getBoundContext()) {
          this.getRouter().getTargets().display("objectNotFound");
          return;
        }
        
        var oObject = oView.getBindingContext().getObject();
        // No data for the binding
        if (!oObject.Matnr) {
          this.getRouter().getTargets().display("objectNotFound");
          return;
        }

      }
        
    });

  }
);