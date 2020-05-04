import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {

  const [navbarStatus, setNavbarStatus] = useState(0)

  window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > 10) {
      setNavbarStatus(true)
    } else {
      setNavbarStatus(false)
    }
  })

  let displayClass = navbarStatus ? 'opacity-100 visible' : 'opacity-0 invisible'

  return (
    <header
      className={`shadow mb-2 px-10 py-3 transition-opacity bg-white w-full fixed ${displayClass}`}
      style={{
        transition: `opacity .3s`
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="text-3xl font-bold"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
