import React from 'react'
import { Consumer } from '../../context'

const Tracks = () => {
  return (
    <Consumer>
        {value => {
            console.log(value);
            return <h1>Tracks</h1>
        }}
    </Consumer>
  )
}

export default Tracks
