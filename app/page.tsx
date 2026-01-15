import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Catalog from "@/components/Catalog/Catalog"
import Advantages from "@/components/Advantages/Advantages"
import Process from "@/components/Process/Process"
import Testimonials from "@/components/Testimonials/Testimonials"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Advantages />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
