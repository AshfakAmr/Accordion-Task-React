import { useState } from "react";
import AccordionItems from "./Accordion-Items";
import Tabbed from "../Tab/Tabbed";
import PropTypes from "prop-types";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  const itemsPerSec = 6;
  const startIndex = activeTab * itemsPerSec;
  const endIndex = startIndex + itemsPerSec;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="container">
      {/* Tabbed Component */}
      <Tabbed activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Accordion Items */}
      <div className="accordion-container">
        <div className="accordion">
          {currentItems.length > 0 ? (
            currentItems.map((item, i) => (
              <AccordionItems
                number={startIndex + i + 1}
                title={item.title}
                key={i}
                curOpen={curOpen}
                onCurOpen={setCurOpen}
              >
                {item.text}
              </AccordionItems>
            ))
          ) : (
            <div className="diff-content">There is Nothing to Show</div>
          )}
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
