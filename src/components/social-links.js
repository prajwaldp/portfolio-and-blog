import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faLinkedin, faGithub)

const SocialLinks = ({ maxWidth }) => (
  <div className="flex flex-row text-2xl">
    <div className="mr-4">
      <a
        href="https://github.com/prajwaldp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/prajwal-d-prakash"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
)

export default SocialLinks
