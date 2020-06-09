import * as React from 'react'

interface Props {
  active: boolean,
  children: any,
  onClick: any,
}

export default class Link extends React.Component<Props, {}> {
  render() {
    if(this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
          this.props.onClick()
        }}
      >
        {this.props.children}
      </a>
    )
  }
}

/*
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
*/