import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>BrainBox</h1>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/chat">Chat</Link>
    </nav>
  );
};

export default Navbar;
