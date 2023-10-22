Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0
    }
  },
  computed: {
    monsterHealthBar() {
      return {width: this.monsterHealth + '%' };
    },
    playerHealthBar() {
      return {width: this.playerHealth + '%' };
    },
    useSpecialAttack() {
      return this.round % 3;
    }
  },
  methods: {
    attackMonster() {
      const value = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= value;
      this.round++;
      this.attackPlayer();
    },
    attackPlayer() {
      const value = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= value;
    },
    specialAttack() {
      const value = Math.floor(Math.random() * (30 - 10)) + 10;
      this.monsterHealth -= value;
      this.round++;
      this.attackPlayer();
    }
  }
}).mount("#game");