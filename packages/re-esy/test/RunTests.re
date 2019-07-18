include Tests;

let x =
  TestFramework.run(
    {
      open Rely.RunConfig;
      initialize() |> withReporters([Default]);
    },
  );
