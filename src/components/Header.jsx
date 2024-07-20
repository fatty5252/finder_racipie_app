import React from 'react'

export default function Header(props) {
  return (
    <div>
        <div className={props.bgClass}>
            <div className='text-content'>
      <h1 className='header-title'>{props.title}</h1>
      {props.children}
      </div>
      </div>
    </div>
  )
}
