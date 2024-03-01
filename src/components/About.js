import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile'
import ProfileClass from './ParentClass'

const About = () => {
  return (
    <>
    <div>About</div>
    <p>This is About page</p>
    <Profile/>
    <ProfileClass />
    </>
  )
}

export default About