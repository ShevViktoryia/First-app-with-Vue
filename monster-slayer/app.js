Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      winner: '',
      logs: []
    }
  },
  watch: {
    monsterHealth(value) {
      if(value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if(value <= 0) {
        this.winner = 'player';
      }
    },
    playerHealth(value) {
      if(value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if(value <= 0) {
        this.winner = 'monster';
      }
    }
  },
  computed: {
    monsterHealthBar() {
      return this.monsterHealth < 0 ? {width: '0%'} : {width: this.monsterHealth + '%' };
    },
    playerHealthBar() {
      return this.playerHealth < 0 ? {width: '0%'} : {width: this.playerHealth + '%' };
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
      this.showLog('Moster', 'attacks', value);
    },
    attackPlayer() {
      const value = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= value;
      this.showLog('Player', 'attacks', value);
    },
    specialAttack() {
      const value = Math.floor(Math.random() * (30 - 10)) + 10;
      this.monsterHealth -= value;
      this.round++;
      this.attackPlayer();
      this.showLog('Player', 'attacks', value);
    },
    healPlayer() {
      const value = Math.floor(Math.random() * (25 - 8)) + 8;
      this.playerHealth = this.playerHealth + value > 100 ? 100 : this.playerHealth + value;
      this.round++;
      this.attackPlayer();
      this.showLog('Player', 'heals himself for', value);
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = '';
      this.logs = [];
    },
    surrender() {
      this.winner = 'monster';
      this.playerHealth = 0;
    },
    showLog(who, action, value) {
      this.logs.unshift({who, action, value});
    }
  }
}).mount("#game");