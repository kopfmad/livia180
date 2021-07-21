import React from 'react'

export default function MyInput(props) {
  function getValue(e) {
    props.funcaodopai(e.target.value)
  }

  return (
    <input
      className="MyInput"
      type="number"
      placeholder={props.placeholder}
      onChange={getValue}
    />
  )
}
