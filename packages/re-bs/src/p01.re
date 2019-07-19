/* last item in list */
let rec last = list =>
  switch (list) {
  | [] => None
  | [x] => Some(x)
  | [_, ...more] => last(more)
  };
