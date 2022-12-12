import React from 'react'

export default function Layout(props) {
  return (
    <div className='bg-slate-300'>
      {props.children}
    </div>
  )
}
