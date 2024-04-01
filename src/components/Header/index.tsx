import { Div, H1, Leaf, SpanLogo } from "./style";
import LeafLogo from "../../assets/leaf.png";
import { redirect } from "react-router-dom";

const Header = () => {
  return (
    <Div className="header" onClick={() => redirect("/")}>
      <H1>Comunikime</H1>
      <SpanLogo>Challenge</SpanLogo>
    </Div>
  );
};

export default Header;
