# OTP Generic Component

## Installation
```
// install node_modules
npm install --engine-strict
```

## Boilerplate

- src
  - Components
    - Pin.jsx
    - PinTab.jsx
  - App.js

## Description

#### OTP Component

Create a generic OTP component. The number of input boxes and lenght of text per input box can be controlled.

- Pin.jsx

  - It will accept `maxChar` as a prop which will be a `number` and should be `required`
  - It will return an input box with `data-testid` as `pin-input`
  - The input box will allow text with maximum length equal to `maxChar`

- PinTab.jsx

  - It will accept `length` and `maxChar` as props, and its value should be `number`
  - It should throw warning/error for any value for `length` and `maxChar` other than `number`
  - The `length` should be a `required` prop.
  - It will have `Pin` components as children, whose count will be equal to `length` value.
  - User should be able to type in the first input box and it should move the user to the next input box
  - Same should happen with deletion (pressing `backspace`), should move the user to the previous input box
  - User can paste, but not more than the length of input boxes and number must be equally divided into all input fields.

  ```
  Example:-

  - If user pastes "123456" and there are only 5 input boxes
  - Only 1,2,3,4,5 will be pasted to the boxes
  ```

![](https://user-images.githubusercontent.com/10437171/70847884-f9d35f00-1e69-11ea-8152-1c70eda12137.gif)
