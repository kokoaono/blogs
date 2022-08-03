import { Link } from "react-router-dom";

function Header({ text }) {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Link to="/"> Home</Link>
      <Link to="/aboutme">Who Am I?</Link>
    </header>
  );
}
Header.defaultProps = {
  text: "Welcome to My Page",
};

export default Header;
