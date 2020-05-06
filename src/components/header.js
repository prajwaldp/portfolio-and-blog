import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import SocialLinks from './social-links'

const Header = ({ siteTitle }) => {

  const [navbarStatus, setNavbarStatus] = useState(0)

  /*
  window is undefined when `gatsby build` is run
  This is a common issue with server side rendering as window is not
  defined in Node.js
  */
  if (typeof window !== undefined) {
    window.addEventListener('scroll', (event) => {
      if (window.pageYOffset > 10) {
        setNavbarStatus(true)
      } else {
        setNavbarStatus(false)
      }
    })
  }

  let displayClass = navbarStatus ? 'opacity-100 visible' : 'opacity-0 invisible'

  return (
    <header
      className={`shadow mb-2 px-10 py-3 transition-opacity bg-white w-full fixed flex flex-row justify-between items-center ${displayClass}`}
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
      <div>
        <SocialLinks maxWidth="2rem" />
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
