import React from 'react';
import AsyncSelect from 'react-select/async';

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  id,
  menuPlacement = 'bottom',
  isClearable = true,
  isSearchable = true,
  isDisabled = false
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: 48,
      backgroundColor: isDisabled ? '#CCCED0' : '#F9FAFB',
      borderColor: state.isFocused ? '#3C50E0' : 'transparent',
      borderWidth: 1.5,
      borderRadius: 16,
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      '&:hover': {
        borderColor: state.isFocused ? '#3C50E0' : 'transparent'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? '#3C50E0' : provided.backgroundColor
    })
  };

  const handleLoadOptions = (inputValue, callback) => {
    const filteredOptions = options?.filter((option) => option?.label?.toLowerCase().includes(inputValue?.toLowerCase()));
    callback(filteredOptions);
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      value={value}
      onChange={onChange}
      loadOptions={handleLoadOptions}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name={name}
      id={id}
      menuPlacement={menuPlacement}
      styles={customStyles}
      placeholder={placeholder}
      className="w-full text-sm"
    />
  );
};

export default Dropdown;
