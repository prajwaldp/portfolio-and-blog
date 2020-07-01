import React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900">
      <div className="pt-10 md:px-20 lg:px-40">
        <main>{children}</main>
      </div>
      <footer className="bg-gray-800 p-10 text-center mt-10 text-gray-400 text-sm">
        <p>Designed and built by Prajwal D Prakash</p>
        <p>
          Built with GatsbyJS. Source Code Licenced{" "}
          <a href="https://opensource.org/licenses/mit-license.php">MIT</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
