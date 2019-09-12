{{!--
  vim: syntax=reason
--}}
{{#if react}}
[@react.component]
let make = () =>
  <div className="o-root">
    <div className="o-main" />
  </div>;
{{else}}
/* last item in list */
let rec last = list =>
  switch (list) {
  | [] => None
  | [x] => Some(x)
  | [_, ...more] => last(more)
  };
{{/if}}
