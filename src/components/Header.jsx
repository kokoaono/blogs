import { Link } from "react-router-dom";

function Header({ text }) {
  return (
    <header className="header">
      <div>
        <h1>{text}</h1>
        <p>
          <Link to="/"> Home</Link>
        </p>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Welcome to My Page",
};

export default Header;
