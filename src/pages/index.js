import React from "react"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Faq from "../components/Faq/Faq"
import Carousel from "../components/Carousel/carousel"
import Carousel2 from "../components/Carousel2/carousel2"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Carousel2 />
      <Features />
      <Carousel />
      <Faq />
    </Layout>
  )
}

export default Index
