import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/bowlingGame.vue";
const wrapper = shallowMount(HelloWorld);
const g = wrapper.vm.mongame;
describe("bowlingGameTest", () => {
  it("is game is modelize", () => {
    expect(wrapper.vm.mongame).is.exist;
  });
  function rollMany(n, pins) {
    let i;
    for (i = 0; i < n; i++) g.roll(Number(pins));
  }
  it("is game return score 0", () => {
    rollMany(20, 0);

    expect(g.score()).equals(0);
  });
  it("is game return allones", () => {
    rollMany(20, 1);

    expect(g.score()).equals(20);
  });
  function rollspare() {
    g.roll(5);
    g.roll(5);
  }
  function rollstrike() {
    g.roll(10);
  }
  it("is game return onespare", () => {
    rollspare();
    g.roll(3);

    rollMany(17, 0);

    expect(g.score()).equals(16);
  });
  it("is game return onestrike", () => {
    rollstrike();
    g.roll(3);
    g.roll(4);

    rollMany(16, 0);

    expect(g.score()).equals(24);
  });
  it("is game is perfect game", () => {
    rollMany(12, 10);

    expect(g.score()).equals(300);
  });
});
