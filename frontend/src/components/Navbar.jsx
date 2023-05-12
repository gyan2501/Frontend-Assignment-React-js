
import "./Navbar.css";

const Navbar = ({handleSearch}) => {
 
  return (
    <div id="navbar">
      <input type="text" placeholder="Search user by name..." onChange={handleSearch}/>
    </div>
  );
};

export default Navbar;
