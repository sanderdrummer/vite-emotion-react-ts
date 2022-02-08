export const Dynamic = ({ color = "red" }) => {
  return <div css={{ color }}>some dynamic styles</div>;
};

/*

	will be compiled to
	k = ({ color: s = "red" }) =>
   	e("div", { css: u({ color: s }, "", ""), children: "some dynamic styles" });

	u() will check the cache if a hash for the rule already exists if not it will be compiled to 

	{ name: "117wnve", styles: "color:red" },

	the next call with color red will hit the cache :)

	and inserted the css using CSSOM https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
*/
