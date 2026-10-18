import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <a className="skip" href="#page-content">Skip to main content</a>
      <Navbar />
      <main id="page-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}
