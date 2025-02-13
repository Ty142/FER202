import { memo } from "react";

const SimpleReact = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default memo(SimpleReact);
