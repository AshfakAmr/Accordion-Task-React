import Tab from "./Tab";
import PropTypes from "prop-types";

function Tabbed({ activeTab, setActiveTab }) {
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
      </div>
    </div>
  );
}
Tabbed.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Tabbed;
