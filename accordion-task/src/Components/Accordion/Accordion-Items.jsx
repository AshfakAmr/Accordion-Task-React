import PropTypes from "prop-types";

function AccordionItems({ title, children, number, curOpen, onCurOpen }) {
  const isOpen = number === curOpen;

  const handleSetOpen = () => {
    onCurOpen(isOpen ? null : number);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleSetOpen}>
      <p className="title">{title}</p>
      <p className={`icon ${isOpen ? "open" : ""}`}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
AccordionItems.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
  curOpen: PropTypes.number,
  onCurOpen: PropTypes.func.isRequired,
};

export default AccordionItems;
