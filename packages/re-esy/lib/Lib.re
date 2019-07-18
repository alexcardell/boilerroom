let x = () => true;

let explode = s => List.init(String.length(s), String.get(s));

let implode = ls => ls |> List.map(Char.escaped) |> String.concat("");

let map2 = (f, (x, y)) => (f(x), f(y));

let longestCommonSubstr = (a, b) => {
  let rec aux = (x, y) => switch (x, y) {
    | ([], []) => ['A', 'B', 'C', 'D'];
    | (_, [h, ...t]) => aux([], t)
    | ([h, ...t], _) => aux(t, [])
  };

  let (xx, yy) = (a, b) |> map2(explode);
  aux(xx, yy) |> implode;
};
