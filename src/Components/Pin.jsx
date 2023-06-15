import { forwardRef } from "react";
import PropTypes from 'prop-types';


export const Pin = forwardRef(({ maxChar, onChangeFunction, onBackSpaceFn }, ref) => {

  const handleKeyPress = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceFn(e)
    } else {
      onChangeFunction(e)
    }
  }

  return (
    <input data-testid="pin-input"
      maxLength={maxChar}
      ref={ref}
      onKeyUp={handleKeyPress}
    />
  )
})

// Check maxChar prop here

Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
};