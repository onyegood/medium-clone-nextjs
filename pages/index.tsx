import type { NextPage } from 'next'
import BannerComponent from '../components/banner'
import HeadComponent from '../components/head'
import HeaderComponent from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <BannerComponent />
    </div>
  )
}

export default Home
