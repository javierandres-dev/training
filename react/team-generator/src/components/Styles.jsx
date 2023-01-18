import '../styles/stylesheet.css'
import React from 'react'

const internalRules = {
  color: "yellow", 
  fontSize: "20px"
}

export const Styles = () => {
  return (
        <div>
          <p style={internalRules}>Styles from internal rules</p>
          <p className="external-rules">Styles from external rules</p>
        </div>
  )
}
