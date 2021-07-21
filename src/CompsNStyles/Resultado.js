import React, { useState } from 'react'

export default function Resultado(props) {
  return (
    <div className="Resultado">
      {' '}
      O resultado da soma é <b>{props.resultado}</b>
    </div>
  )
}
