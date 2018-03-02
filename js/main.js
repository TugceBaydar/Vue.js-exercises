new Vue({
  el:"#app",
  data:{
    isRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    start: function() {
      this.isRunning = !this.isRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    calcDamage: function(max, min) {
      return   Math.floor(Math.random() * max) + min;
    },
    // giveUp: function() {
    //   this.isRunning = false;
    //   this.playerHealth = 100;
    //   this.monsterHealth = 100;
    // },
    attack: function(max, min) {
      this.monsterAttack();
      this.monsterHealth -= this.calcDamage(max, min);
    },
    monsterAttack: function() {
      this.playerHealth -= this.calcDamage(18, 6);
    },
    // special: function() {
    //   this.playerHealth -= this.calcDamage(18, 6);
    //   this.monsterHealth -= this.calcDamage(13, 5);
    // },
    heal: function() {
      this.playerHealth += this.calcDamage(16, 10);
      this.monsterAttack();
    }
  }
})
