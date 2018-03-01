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

// =====================to do ==================

var todo = new Vue ({
  el:'#todo',
  data: {
    newTask:'',
    todoList:[],
    editedTask: '',
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
    },
    editTask: function(task) {
      var myTask = document.getElementById('mytask');
      myTask.innerHTML = '<input type="text" placeholder="edit your task" v-model="editedTask" v-on:keyup.enter="addTask">';
      // document.getElementById('myli').innerHTML = '';
      var editTask = this.editedTask;
      this.todoList.push(editTask);
    }
  }
});
//

// add animation and add editing thing !! and check box !!
// ====================to do =========================

// new Vue ({
//   el:'#app',
//   data: {
//      activeClass: 'active',
//      activeStyles: {
//        height: '250px',
//        border: '10px inset teal',
//        backgroundColor: 'blue'
//      },
//      isActive: true
//   }
// })
