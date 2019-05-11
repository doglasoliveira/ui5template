sap.ui.define([
               "app/model/constants",
  ] , function (constants) {
    "use strict";

    return {

      /**
       * Formats Date
       * @public
       * @param {string} sValue TimeStamp
       * @returns {string} sValue a Date Formated
       */
      formatDate : function(sValue) {
        if(!!sValue){
          jQuery.sap.require("sap.ui.core.format.DateFormat");
          var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd-MM-YYYY"});
          return oDateFormat.format(new Date(sValue));
        }
      },

      /**
       * Formats Date/Hour
       * @public
       * @param {string} sDate 
       * @param {string} sHour 
       * @returns {string} sValue a Date/Hour Formated
       */
      formatDateHour : function(sDate) {
        if(!!sDate){
          jQuery.sap.require("sap.ui.core.format.DateFormat");
          var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd-MM-YYYY HH:mm"});
          return oDateFormat.format(new Date(sDate));
        }
      },

      /**
       * Formats Hour
       * @public
       * @param {string} sDate 
       * @param {string} sHour 
       * @returns {string} sValue a Hour Formated
       */
      formatHour : function(sDate) {
        if(!!sDate){
          jQuery.sap.require("sap.ui.core.format.DateFormat");
          var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "HH:mm"});
          return oDateFormat.format(new Date(sDate));
        }
      }

    };

  }
);