const expect = require("chai").expect;
const program = require("../src/exercise4");

describe(`${program.title}`, function() {
  it("Function countSequence should return 0 if the sequence is empty", function() {
    const sequence = "";
    const input = "abc11x11x11";
    const output = 0;
    expect(program.run(sequence, input)).to.be.eql(output);
  });

  it("Function countSequence should return 0 if the input characters is empty", function() {
    const sequence = "11";
    const input = "";
    const output = 0;
    expect(program.run(sequence, input)).to.be.eql(output);
  });

  it("Function countSequence should return 2 if the input characters contains 2 sequence", function() {
    const sequence = "11";
    const input = "11abc11";
    const output = 2;
    expect(program.run(sequence, input)).to.be.eql(output);
  });

  it("Function countSequence should return 3 if the input characters contains 3 sequence", function() {
    const sequence = "11";
    const input = "abc11x11x11";
    const output = 3;
    expect(program.run(sequence, input)).to.be.eql(output);
  });

  it("Function countSequence should ignore overlap of sequence", function() {
    const sequence = "11";
    const input = "111";
    const output = 1;
    expect(program.run(sequence, input)).to.be.eql(output);
  });

  it("Function countSequence should be curry friendly", function() {
    const sequence = "11";
    const input = "abc11x11x11";
    const output = 3;
    expect(program.run(sequence)(input)).to.be.eql(output);
  });
});
