var _ = require('underscore');

var Observer = function(obj) {
   var self = this;
   this.object = obj;

   this.watch = function(key){
      var self = this;
      return{
         then : function(callback){
            if(typeof self.object[key] != 'object'){
               Object.defineProperty(self.object, key, {
                  get: function(val) {
                     return this["_"+key];
                  },

                  set: function(val) {
                     callback(val);
                     this["_"+key] = val;
                  }
               })
            }
            else{
               console.warn("You cannot observe an object property which is an object! : '"+key+"'");
            }

         }
      }
   }

}

/**
   Example Usage :
   var userObserver = new Observer(userObject)
   userObserver.watch('username')
   .then(function(newValue){
      // Do something with new value here
   })
*/

module.exports = 666;
