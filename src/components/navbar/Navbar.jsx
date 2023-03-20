import './Navbar.css';
import SelectMenu from '../menu/SelectMenu';
export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <h1 className="nav-title">Component Picker</h1>
      <SelectMenu />
      <ul className="nav-menu"></ul>
    </div>
  );
}
