import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
<Layout>
        <Head title="Home"/>
        <h1>Vania Dimova</h1>
        <h2>Hi, I am Vania full-stack developer living in Toronto.</h2>
        <p>need a website? <Link to="/contact">Contact me!</Link></p>
      
</Layout>
    )

}
export default IndexPage
