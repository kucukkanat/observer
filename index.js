
var Observer = function(obj) {
    let watchingFn = null
    const observe = (data)=>{
        const dependencies = {}
        return new Proxy(data,{
            get(obj, key) {
                if (watchingFn) {
                    if (!dependencies[key]) {
                        dependencies[key] = []
                    }
                    dependencies[key].push(watchingFn)
                }
                return obj[key]
            },
            set(obj, key, value) {
                obj[key] = value
                if (dependencies[key]) {
                    dependencies[key].forEach(cb=>cb(key))
                }

            }
        })
    }

    const watcher = (target)=>{
        watchingFn = target
        target()
        watchingFn = null
    }
    this.observe = observe
    this.watcher = watcher

}

/**
   Example Usage :
   Observer.observe(userObject)
   Observer.watcher(function(newValue){
      // Do something with new value here
   })
*/

module.exports = Observer;
