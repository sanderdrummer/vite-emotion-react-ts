// emotion jsx => https://github.com/emotion-js/emotion/blob/main/packages/react/src/jsx.js

// will be compiled to styleDefinitions not classNames
export const Static = () => {
  return (
    <div
      css={{
        position: "static",
        color: "red",
      }}
    >
      some static styles
    </div>
  );
};

/*
      will be compiled to 

      A = { name: "18hsszp", styles: "position:static;color:red" };
      M = () => e("div", { css: A, children: "some static styles" }),

*/
