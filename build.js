(function(modules) { // webpackBootstrap
	// The module cache
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

		// Check if module is in cache
		if(installedModules[moduleId])
			return installedModules[moduleId].exports;

		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
		module.loaded = true;

		// Return the exports of the module
		return module.exports;
	}


	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;

	// expose the module cache
	__webpack_require__.c = installedModules;

	// __webpack_public_path__
	__webpack_require__.p = "";

	// Load entry module and return exports
	return __webpack_require__(0);
})
/************************************************************************/
([
/* 0 */
/***/ function(module, exports) {

	// var _ = require('underscore');
	//
	// var Observer = function(obj) {
	//    var self = this;
	//    this.object = obj;
	//
	//    this.watch = function(key){
	//       var self = this;
	//       return{
	//          then : function(callback){
	//             if(typeof self.object[key] != 'object'){
	//                Object.defineProperty(self.object, key, {
	//                   get: function(val) {
	//                      return this["_"+key];
	//                   },
	//
	//                   set: function(val) {
	//                      callback(val);
	//                      this["_"+key] = val;
	//                   }
	//                })
	//             }
	//             else{
	//                console.warn("You cannot observe an object property which is an object! : '"+key+"'");
	//             }
	//
	//          }
	//       }
	//    }
	//
	// }
	//
	// /**
	//    Example Usage :
	//    var userObserver = new Observer(userObject)
	//    userObserver.watch('username')
	//    .then(function(newValue){
	//       // Do something with new value here
	//    })
	// */

	module.exports = 666;


/***/ }
]);
