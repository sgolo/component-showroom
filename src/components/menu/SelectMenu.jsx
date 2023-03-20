import './Menu.css';
export default function SelectMenu() {
  return (
    <div className="menu-wrapper">
      <div className="component-select-wrapper">
        <p>Select Component</p>
        <button className="component-select-button">⇩</button>
      </div>
      <div className="view-select-wrapper">
        <button className="view-button">🖥️</button>
        <button className="view-button">📱</button>
      </div>
    </div>
  );
}
