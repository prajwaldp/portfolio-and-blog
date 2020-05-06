import React from 'react'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

const SocialLinks = ({ maxWidth }) => (
  <div className="flex flex-row">
    <div className="mr-5" style={{ maxWidth }}>
      <a href="https://github.com/prajwaldp" target="_blank">
        <img width="100" src={githubIcon} alt="github" />
      </a>
    </div>
    <div style={{ maxWidth }}>
      <a href="https://www.linkedin.com/in/prajwal-d-prakash" target="_blank">
        <img width="100" src={linkedinIcon} alt="linkedin" />
      </a>
    </div>
  </div>
)

export default SocialLinks
