import React from 'react';

function KeyData(props) {
  return (
    <>
      <h2 className="keydata-title">{props.title}</h2>
      {props.data.map((keydata, index) => {
        return (
          <div className="keydata-container" key={index}>
            <img
              className="keydata-icon"
              src={keydata.icon}
              alt="logo sportsee"
            />
            <div className="keydata-data">
              <div className="keydata-value">
                {keydata.value + keydata.unit}
              </div>
              <div className="keydata-name">{keydata.name}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default KeyData;
