import '../styles/globals.css'
import '../styles/helper.css'
import '../styles/thebaton.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
      <Script src="/assets/vendor/jquery/jquery.min.js"></Script> 
      <Script src="/assets/vendor/gsap/gsap.min.js"></Script> 
      <Script src="/assets/vendor/gsap/ScrollToPlugin.min.js"></Script> 
      <Script src="/assets/vendor/gsap/ScrollTrigger.min.js"></Script> 

      <Script src="/assets/vendor/smooth-scrollbar.js"></Script> 
      <Script src="/assets/vendor/swiper/js/swiper-bundle.min.js"></Script> 
      <Script src="/assets/vendor/isotope/imagesloaded.pkgd.min.js"></Script> 
      <Script src="/assets/vendor/isotope/isotope.pkgd.min.js"></Script> 
      <Script src="/assets/vendor/isotope/packery-mode.pkgd.min.js"></Script> 
      <Script src="/assets/vendor/lightgallery/js/lightgallery-all.min.js"></Script> 
      <Script src="/assets/vendor/jquery.mousewheel.min.js"></Script> 

      <Script src="/assets/js/thebaton.js"></Script>
      

    </>
  )
}

export default MyApp