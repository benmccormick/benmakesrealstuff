import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile_pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
          }}
        />
        <p>
          Written by <strong>Ben McCormick</strong>. Be warned that he has no idea what he's doing.{' '}
          If you're not scared away <a href="https://twitter.com/ben336">
            you can follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
