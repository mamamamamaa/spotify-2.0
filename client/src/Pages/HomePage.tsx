import { FC } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  return <Link to="/songs">Go to songs</Link>;
};
