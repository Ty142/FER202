import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = () => {
  return <button className="btn btn-primary">Click me!</button>;
};

export default memo(Button);
