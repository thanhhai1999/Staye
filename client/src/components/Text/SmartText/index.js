import { React, useState } from 'react';

const SmartText = ({ text, length = 1000 }) => {
    const [showLess, setShowLess] = useState(true);
  
    if (text?.length < length) {
      return <p>{text}</p>;
    }
  
    return (
      <div>
        <p class="leading-relaxed text-lg inline mb-4">{ showLess ? `${text?.slice(0, length)}...` : text }</p>
        <a
          style={{ color: "blue", cursor: "pointer", 'font-size': "16px" }}
          onClick={() => setShowLess(!showLess)}
        >
          {showLess ? " Show more" : " Hide"}
        </a>
      </div>
    );
  };
  

export default SmartText;
