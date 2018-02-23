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

// new Vue ({
//    el: '#app',
//    data: {
//      progress: 0,
//    },
//    methods: {
//      start: function() {
//         var vm = this;
//         var width = 5;
//         var increase = setInterval(function() {
//           vm.progress += width;
//           if(vm.progress >= 100) {
//             clearInterval(increase);
//           }
//       }, 100);
//
//      }
//    }
// })


var todo = new Vue ({
  el:'#todo',
  data: {
    newTask:'',
    todoList:[]
  },
  methods: {
    addTask: function() {
      var task = this.newTask;
      this.todoList.push(task);
      this.newTask = '';
    },
    removeTask: function(task) {
       var index = this.todoList.indexOf(task);
       this.todoList.splice(index, 1);
    }
  }
});


// add animation and add editing thing !!
