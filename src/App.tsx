import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { SomeComponent } from "./Component";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
    };
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div
        css={{
          color: "blue",
        }}
      >
        <header className="App-header">so cool</header>
        <SomeComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
