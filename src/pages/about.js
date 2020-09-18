import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
      <Layout>
        <Head title="About" />
        <h1>About me</h1>
        <h2>Hi, I am Vania full-stack developer living in Toronto.</h2>
        <p>Need a Developer? <Link to ="/contact"><a></a>Contact me.</Link></p>
       </Layout>
    )

}
export default AboutPage
