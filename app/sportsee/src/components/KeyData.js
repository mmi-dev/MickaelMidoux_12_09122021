import React from 'react';

/**
 * @component
 * @description user key data component
 * @param {Object} props 
 * @param {string} props.title section title
 * @param {Object} props.data keydata datas
 * @param {string} props.data.icon keydata icon URL
 * @param {string} props.data.name keydata name
 * @param {string} props.data.unit keydata value
 * @param {number} props.data.value
 * @example
 * <KeyData 
   title={'Chiffres clés'} 
   data={
    icon:"/app/sportsee/src/assets/icons/calories-icon.png"
    name: "Calories",
    unit: "kCal",
    value:1930
   }
  />
 */
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
