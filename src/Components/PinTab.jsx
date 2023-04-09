import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { Pin } from "./Pin";


export const PinTab = ({ length, maxChar, setOtp }) => {

  const [inputBox] = useState(new Array(length).fill(0))
  const [inputBoxValue] = useState(new Array(length).fill(''))

  const inputRef = useRef([])


  const onChangeHandle = (e, index) => {
    if (index < length - 1 && e.target.value.length > 0) {
      inputRef.current[index + 1].focus()
    }
    inputBoxValue[index] = e.target.value
    setOtp(inputBoxValue.join(""))
  }

  const BackSpaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus()
    }
    inputBoxValue[index] = e.target.value
    setOtp(inputBoxValue.join(""))
  }

  const handlePaste = (e) => {
    const data = e.clipboardData.getData('text').split("").slice(0, 5)

    data.forEach((item, index) => {

      inputBoxValue[index] = item
      inputRef.current[index].value = item
      // console.log(inputRef.current[index].value = item)
      //Above line will make sure pasting is done right
      if (index < length - 1) {
        inputRef.current[index + 1].focus()
      }

      setOtp(inputBoxValue.join(""))
    })
  }

  return (
    <div onPaste={handlePaste}
      // concept which is used here is Bubbling & Capturing
      data-testid="pin-tab">
      {/* Add Pin component here  */}
      {inputBox.map((item, index) => {
        return <Pin
          key={index}
          maxChar={maxChar}
          length={length}
          onChangeFunction={(e) => onChangeHandle(e, index)}
          ref={(element) => {
            inputRef.current[index] = element
          }}
          onBackSpaceFn={(e) => BackSpaceHandler(e, index)}
        />
      })}
    </div>
  )
};

// Check length and maxChar props here

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
};