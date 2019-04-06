<template>
  <div class="hello">
    <h1>{{ mongame }}</h1>
  </div>
</template>

<script>
class game {
  rolls = [];
  currentroll = 0;
  score2 = 0;
  frameindex = 0;

  roll(pins) {
    this.rolls[this.currentroll++] = Number(pins);
  }
  isspare(frameindex) {
    return this.rolls[frameindex] + this.rolls[frameindex + 1] === 10;
  }
  isstrike(frameindex) {
    return this.rolls[frameindex] === 10;
  }
  strikebonus(frameindex) {
    return this.rolls[frameindex + 1] + this.rolls[frameindex + 2];
  }
  sparebonus(frameindex) {
    return Number(this.rolls[frameindex + 2]);
  }
  sumOfBallsInFrame(frameindex) {
    return Number(this.rolls[frameindex]) + Number(this.rolls[frameindex + 1]);
  }

  score() {
    this.score2 = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isstrike(this.frameindex)) {
        this.score2 += 10 + this.strikebonus(this.frameindex);

        this.frameindex++;
      } else if (this.isspare(this.frameindex)) {
        this.score2 += 10 + this.sparebonus(this.frameindex);
        this.frameindex += 2;
      } else {
        this.score2 += this.sumOfBallsInFrame(this.frameindex);
        this.frameindex += 2;
      }
    }

    return this.score2;
  }
}

export default {
  name: "HelloWorld",

  data() {
    return {
      msg: "bonjour",
      mongame: new game()
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
