open TestFramework;
open App.Lib;

describe("Playground", ({test}) => {
  test("first test", ({expect}) => {
    expect.bool(x()).toBe(true);
  });
});
