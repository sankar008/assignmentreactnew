import React, { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="Freshman"
              checked={selectedOption === 'Freshman'}
              onChange={handleRadioChange}
            />
            Freshman
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="Pre Final"
              checked={selectedOption === 'Pre Final'}
              onChange={handleRadioChange}
            />
            Pre Final
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="Final Year"
              checked={selectedOption === 'Final Year'}
              onChange={handleRadioChange}
            />
            Final Year
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="Masters"
              checked={selectedOption === 'Masters'}
              onChange={handleRadioChange}
            />
            Masters
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="PHD"
              checked={selectedOption === 'PHD'}
              onChange={handleRadioChange}
            />
            PHD
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="all_button_group">
          <label>
            <input
              type="radio"
              name="academicYear"
              value="Another PHD"
              checked={selectedOption === 'Another PHD'}
              onChange={handleRadioChange}
            />
            Another PHD
          </label>
        </div>
      </div>

      {/* Display selected option */}
      <div>
        Selected Option: {selectedOption ? selectedOption : 'None'}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
