open Jest;
open Expect;

describe("Last item in list", () => {
  test("returns empty string for empty list", () =>
    P01.last([]) |> expect |> toEqual(None)
  );

  test("returns last item", () =>
    P01.last(["a", "b", "c", "d"]) |> expect |> toEqual(Some("d"))
  );
});
