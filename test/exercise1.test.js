const expect = require("chai").expect;
const program = require("../src/exercise1");

describe(`${program.title}`, function() {
  it("Function sortProduct should filter product before year 2000", function() {
    const input = [
      {
        name: "tomato",
        dateAdded: 1486671098000, // 2017-02-09
        quantity: 3
      },
      {
        name: "banana",
        dateAdded: 341871098000, // 1980-10-31
        quantity: 2
      }
    ];
    const output = {
      tomato: [{ name: "tomato", year: 2017, monthOfYear: 2, quantity: 3 }]
    };
    expect(program.run(input)).to.be.eql(output);
  });

  it("Function sortProduct should sort by date", function() {
    const input = [
      {
        name: "banana",
        dateAdded: 1519408251000, // 2018-02-23
        quantity: 4
      },
      {
        name: "banana",
        dateAdded: 1490541828000, // 2018-03-26
        quantity: 1
      }
    ];
    const output = {
      banana: [
        { name: "banana", year: 2017, monthOfYear: 3, quantity: 1 },
        { name: "banana", year: 2018, monthOfYear: 2, quantity: 4 }
      ]
    };
    expect(program.run(input)).to.be.eql(output);
  });

  it("Function sortProduct should group by product", function() {
    const input = [
      {
        name: "tomato",
        dateAdded: 1486671098000, // 2017-02-09
        quantity: 3
      },
      {
        name: "cucumber",
        dateAdded: 1509452435000, // 2017-10-31
        quantity: 2
      },
      {
        name: "tomato",
        dateAdded: 1490887428000, // 2017-03-30
        quantity: 1
      },
      {
        name: "tomato",
        dateAdded: 1484648083000, // 2017-01-17
        quantity: 8
      }
    ];
    const output = {
      tomato: [
        { name: "tomato", year: 2017, monthOfYear: 1, quantity: 8 },
        { name: "tomato", year: 2017, monthOfYear: 2, quantity: 3 },
        { name: "tomato", year: 2017, monthOfYear: 3, quantity: 1 }
      ],
      cucumber: [{ name: "cucumber", year: 2017, monthOfYear: 10, quantity: 2 }]
    };
    expect(program.run(input)).to.be.eql(output);
  });

  it("Function sortProduct should filter product before year 2000, sort by date and group by product", function() {
    const input = [
      {
        name: "tomato",
        dateAdded: 1486671098000, // 2017-02-09
        quantity: 3
      },
      {
        name: "cucumber",
        dateAdded: 1509452435000, // 2017-10-31
        quantity: 2
      },
      {
        name: "banana",
        dateAdded: 1519408251000, // 2018-02-23
        quantity: 4
      },
      {
        name: "tomato",
        dateAdded: 1490887428000, // 2017-03-30
        quantity: 1
      },
      {
        name: "banana",
        dateAdded: 341871098000, // 1980-10-31
        quantity: 2
      },
      {
        name: "banana",
        dateAdded: 1490541828000, // 2018-03-26
        quantity: 1
      },
      {
        name: "tomato",
        dateAdded: 1484648083000, // 2017-01-17
        quantity: 8
      }
    ];
    const output = {
      banana: [
        { name: "banana", year: 2017, monthOfYear: 3, quantity: 1 },
        { name: "banana", year: 2018, monthOfYear: 2, quantity: 4 }
      ],
      tomato: [
        { name: "tomato", year: 2017, monthOfYear: 1, quantity: 8 },
        { name: "tomato", year: 2017, monthOfYear: 2, quantity: 3 },
        { name: "tomato", year: 2017, monthOfYear: 3, quantity: 1 }
      ],
      cucumber: [{ name: "cucumber", year: 2017, monthOfYear: 10, quantity: 2 }]
    };
    expect(program.run(input)).to.be.eql(output);
  });
});
