/**
 * ImageClassification
 * service for image classification
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OutputParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OutputParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.ImageClassification) {
      root.ImageClassification = {};
    }
    root.ImageClassification.WebServiceResult = factory(root.ImageClassification.ApiClient, root.ImageClassification.OutputParameters);
  }
}(this, function(ApiClient, OutputParameters) {
  'use strict';




  /**
   * The WebServiceResult model module.
   * @module model/WebServiceResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebServiceResult</code>.
   * @alias module:model/WebServiceResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>WebServiceResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebServiceResult} obj Optional instance to populate.
   * @return {module:model/WebServiceResult} The populated <code>WebServiceResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('consoleOutput')) {
        obj['consoleOutput'] = ApiClient.convertToType(data['consoleOutput'], 'String');
      }
      if (data.hasOwnProperty('changedFiles')) {
        obj['changedFiles'] = ApiClient.convertToType(data['changedFiles'], ['String']);
      }
      if (data.hasOwnProperty('outputParameters')) {
        obj['outputParameters'] = OutputParameters.constructFromObject(data['outputParameters']);
      }
    }
    return obj;
  }

  /**
   * Boolean flag indicating the success status of web service execution.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * Error messages if any occurred during the web service execution.
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * Console output from the web service execution.
   * @member {String} consoleOutput
   */
  exports.prototype['consoleOutput'] = undefined;
  /**
   * The filenames of the files modified during the web service execution.
   * @member {Array.<String>} changedFiles
   */
  exports.prototype['changedFiles'] = undefined;
  /**
   * @member {module:model/OutputParameters} outputParameters
   */
  exports.prototype['outputParameters'] = undefined;



  return exports;
}));


