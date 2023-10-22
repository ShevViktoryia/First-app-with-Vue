Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  },
  computed: {
    monsterHealthBar() {
      return {width: this.monsterHealth + '%' };
    },
    playerHealthBar() {
      return {width: this.playerHealth + '%' };
    }
  },
  methods: {
    attackMonster() {
      const value = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= value;
      this.attackPlayer();
    },
    attackPlayer() {
      const value = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= value;
    }
  }
}).mount("#game");