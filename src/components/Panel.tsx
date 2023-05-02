import React from 'react';
import {Link} from "react-router-dom";

const Panel = () => {
  return (
    <div className='NavPanel'>
      <Link className='NavLink' to='./Skills'>Skills</Link>
      <Link className='NavLink' target="_blank" to='https://github.com/michelai95'>Github</Link>
      <Link className='NavLink' target="_blank" to='https://www.linkedin.com/in/michelaiacobucci/'>LinkedIn</Link>
    </div>
  )
}

export default Panel;