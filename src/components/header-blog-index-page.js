import { Link } from "gatsby"
import React from "react"
import SocialLinks from "./social-links"

const Header = () => {
  return (
    <header className="shadow mb-2 px-10 py-3 transition-opacity bg-gray-800 w-full fixed flex flex-row justify-between items-center">
      <div>
        <h1 className="text-gray-300">
          <Link to="/" className="text-3xl font-bold">
            Prajwal D Prakash
          </Link>
        </h1>
      </div>
      <div className="text-gray-300">
        <SocialLinks maxWidth="2rem" />
      </div>
    </header>
  )
}

export default Header
