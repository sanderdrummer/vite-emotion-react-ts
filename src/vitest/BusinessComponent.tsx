import { useState } from "react";

export const MockMeComponent = ({ handleClick = () => {} }) => {
  return <button onClick={handleClick}>click me</button>;
};

export const BusinessComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <MockMeComponent handleClick={() => setShow(!show)} />
      {show && <div>yeah vite</div>}
    </>
  );
};
