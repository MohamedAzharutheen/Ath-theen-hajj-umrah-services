import CategorySection from '@/component/category/category-section'
import BoxBanner from '@/component/contactus/box-banner'
import Gallery from '@/component/gallery/light-house'
import Navbar from '@/component/header-section/navbar'
import Banner from '@/component/home/banner'
import HajjGateway from '@/component/home/hajj-gateway'
import Journey from '@/component/home/journey'
import Layout from '@/component/layout'
import PackageCard from '@/component/packages/package-card'
import ServiceCards from '@/component/services/service-cards'
import PopularSection from '@/component/slider/cards'
import WeFeelHappy from '@/component/we-feel-happy'
import React from 'react'

export default function index() {
  return (
    <>
    <Layout>
      <Banner/>
      <WeFeelHappy/>
      <ServiceCards/>
      <CategorySection/>
      <HajjGateway/>
      <Journey/>
      <PopularSection/>
      <BoxBanner/>
      <PackageCard/>
      {/* <Gallery/> */}
      </Layout>
    </>
  )
}
