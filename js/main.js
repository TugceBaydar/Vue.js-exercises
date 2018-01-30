// new Vue({
//   el: '#app',
//   data: {
//     message: 'hello tugce',
//     num: 100,
//     goodbyeStyles: {
//       'background-color': 'tomato',
//       color: 'white',
//       padding: '5px'
//     }
//   }
// })

new Vue ({
   el: '#app',
   data: {
     progress: 0,
   },
   methods: {
     start: function() {
        var vm = this;
        var width = 5;
        var increase = setInterval(function() {
          vm.progress += width;
          if(vm.progress >= 100) {
            clearInterval(increase);
          }
      }, 100);

     }
   }
})
