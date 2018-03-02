const expect = require("chai").expect;
const program = require("../src/exercise3");

describe.only(`${program.title}`, function() {
  it("Function meeteek should not suggest people if sex partner is not approved in a bidirectionnal way", function() {
    const input = [
      {
        firstname: "roger",
        sex: 1,
        interests: ["soccer", "beer"],
        sexPartnerApproved: [2]
      },
      {
        firstname: "john",
        sex: 1,
        interests: ["soccer", "cinema"],
        sexPartnerApproved: [2, 1]
      }
    ];

    const output = {
      roger: [],
      john: []
    };

    expect(program.run(input)).to.be.eql(output);
  });

  it("Function meeteek should not suggest people if sex partner is approved but there is not one or more common interests", function() {
    const input = [
      {
        firstname: "roger",
        sex: 1,
        interests: ["soccer", "beer"],
        sexPartnerApproved: [2]
      },
      {
        firstname: "jane",
        sex: 2,
        interests: ["cooking", "cinema"],
        sexPartnerApproved: [1]
      }
    ];

    const output = {
      roger: [],
      jane: []
    };

    expect(program.run(input)).to.be.eql(output);
  });

  it("Function meeteek should suggest people if sex partner is approved and there is one or more common interests", function() {
    const input = [
      {
        firstname: "roger",
        sex: 1,
        interests: ["soccer", "beer", "cooking"],
        sexPartnerApproved: [2]
      },
      {
        firstname: "jane",
        sex: 2,
        interests: ["cooking", "cinema"],
        sexPartnerApproved: [1]
      }
    ];

    const output = {
      roger: [{ firstname: "jane", commonInterests: ["cooking"] }],
      jane: [{ firstname: "roger", commonInterests: ["cooking"] }]
    };

    expect(program.run(input)).to.be.eql(output);
  });

  it("Function meeteek should suggest people by affinity", function() {
    const input = [
      {
        firstname: "roger",
        sex: 1,
        interests: ["soccer", "beer", "cooking", "fishing", "tv show"],
        sexPartnerApproved: [2]
      },
      {
        firstname: "jane",
        sex: 2,
        interests: ["cooking", "cinema", "fishing", "swimming"],
        sexPartnerApproved: [1]
      },
      {
        firstname: "steevy",
        sex: 1,
        interests: ["soccer", "beer"],
        sexPartnerApproved: [1]
      },
      {
        firstname: "aldo",
        sex: 1,
        interests: ["swimming", "beach", "running", "video game"],
        sexPartnerApproved: [2, 1]
      },
      {
        firstname: "lucy",
        sex: 2,
        interests: [
          "soccer",
          "beer",
          "beach",
          "cinema",
          "video game",
          "tv show"
        ],
        sexPartnerApproved: [1, 2]
      }
    ];

    const output = {
      roger: [
        { firstname: "lucy", commonInterests: ["soccer", "beer", "tv show"] },
        { firstname: "jane", commonInterests: ["cooking", "fishing"] }
      ],
      jane: [
        { firstname: "roger", commonInterests: ["cooking", "fishing"] },
        { firstname: "aldo", commonInterests: ["swimming"] }
      ],
      steevy: [],
      aldo: [
        { firstname: "lucy", commonInterests: ["beach", "video game"] },
        { firstname: "jane", commonInterests: ["swimming"] }
      ],
      lucy: [
        { firstname: "roger", commonInterests: ["soccer", "beer", "tv show"] },
        { firstname: "aldo", commonInterests: ["beach", "video game"] }
      ]
    };

    expect(program.run(input)).to.be.eql(output);
  });
});
