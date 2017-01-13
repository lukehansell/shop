import { Children } from 'react'
import css from 'next/css'

const listStyle = css({
  listStyle: 'none',
  paddingLeft: 0
})

const itemStyle = css({
  width: '100%',
  background: '#ececec',
  marginBottom: '1em',
  padding: '1em',
  boxSizing: 'border-box'
})

export default ({
  header,
  children
}) => (
  <div>
    {header && <span>{header}</span>}
    <ul className={listStyle}>
      {Children.map( children, (child) => <li className={itemStyle}>{child}</li> )}
    </ul>
  </div>
)
