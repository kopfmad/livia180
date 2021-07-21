import React, { useState } from 'react'

export default function Resultado() {
  let [finalresult, setFinalresult] = useState('20')

  return (
    <div className="Resultado">
      {' '}
      O resultado é <b>{finalresult}</b>
    </div>
  )
}
