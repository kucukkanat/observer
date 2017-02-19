var Observer = require("observer");

var userObject = {
   username : 'kucukkanat',
   email : 'htolgasahin@gmail.com',
   attrs : {
      a:5,
      b:666
   }
}

var userObserver = new Observer(userObject);

userObserver.watch('username')
.then(function(nv){
   console.log("User object changed to : ",nv)
})

userObserver.watch('attrs')
.then(function(nv){
   console.log("User object changed to : ",nv)
})

// Make changes after observing
userObject.username = 'nepjua';
userObject.username = 'naber';
userObject.attrs.a = 'tolga';
