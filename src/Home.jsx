import { AboutUs } from "./About/AboutUs"
import { Adopt } from "./Common/Adopt"
import { Footer } from "./Common/Footer"
import { Header } from "./Common/Header"
import { Banner } from "./Main/Banner"

export const Home = () => {
  return (
    <>

    <Header />
    <Banner />
    <Adopt />
    <AboutUs />
    <Footer />

    </>
  )
}
