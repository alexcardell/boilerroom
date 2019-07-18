open TestFramework;
open App.Lib;

describe("Sandbox", ({test}) => {
  test("first test", ({expect}) => {
    expect.bool(x()).toBe(true);
  });
});
