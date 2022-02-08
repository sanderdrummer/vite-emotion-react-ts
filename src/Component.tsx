import { Theme, useTheme } from "@emotion/react";
import { useState } from "react";

const styleFunction = (theme: Theme) => ({
  background: theme.colors.primary,
});

const style1 = {
  padding: "2rem",
};

const style2 = {
  color: "red",
};

export const SomeComponent = () => {
  const [toggle, setToggle] = useState(false);
  const theme = useTheme();
  return (
    <div
      css={(theme) => ({
        color: theme.colors.primary,
      })}
    >
      <button onClick={() => setToggle(!toggle)}>hu</button>
      <div
        css={{
          color: "blue",
        }}
      >
        such emotion
      </div>
      much wow
      <ComponentWithClass
        css={{
          padding: "2rem",
        }}
      />
      <ComponentWithClass css={style1} />
      <ComponentWithClass css={style1} />
      <ComponentWithClass css={styleFunction} />
      <ComponentWithClass css={{ ...style1, ...style2 }} />
      <ComponentWithClass
        css={{ ...style1, ...style2, ...styleFunction(theme) }}
      />
      <ComponentWithClass css={toggle ? style1 : style2} />
      <ComponentWithoutClassName />
    </div>
  );
};

const ComponentWithClass = ({ className = "" }) => {
  return <div className={className}>this is a component with a ClassName</div>;
};

const ComponentWithoutClassName = () => {
  return <div>hello no className</div>;
};
