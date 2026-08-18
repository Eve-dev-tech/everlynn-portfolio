import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import ValueProp from '@/components/sections/ValueProp'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import BookSession from '@/components/sections/BookSession'
import Contact from '@/components/sections/Contact'
import ExploreMore from '@/components/sections/ExploreMore'
import Experience from '@/components/sections/Experience'
import Clients from '@/components/sections/Clients'
import Testimonials from '@/components/sections/Testimonials'
import Achievements from '@/components/sections/Achievements'
import BlogTeasers from '@/components/sections/BlogTeasers'

export default function Home() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)' } }} />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <About />
        <ValueProp />
        <Projects />
        <Skills />
        <BookSession />
        <Contact />
        <ExploreMore />
        <Experience />
        <Clients />
        <Testimonials />
        <Achievements />
        <BlogTeasers />
      </main>
      <Footer />
    </>
  )
}
