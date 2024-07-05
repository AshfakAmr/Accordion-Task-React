import PropTypes from "prop-types";

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Section {num + 1}
    </button>
  );
}

Tab.propTypes = {
  num: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
