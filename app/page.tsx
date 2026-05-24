import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ValueProp from '@/components/sections/ValueProp'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Achievements from '@/components/sections/Achievements'
import BlogTeasers from '@/components/sections/BlogTeasers'
import BookSession from '@/components/sections/BookSession'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)' } }} />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <BlogTeasers />
        <BookSession />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
