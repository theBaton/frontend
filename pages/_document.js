import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Image from 'next/image'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="/assets/vendor/normalize/normalize.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/fontawesome-all.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/lightgallery/css/lightgallery.min.css" /> 
        </Head>
        <body id="body" className="tb-transition tb-boxed tb-smooth-scroll tb-magic-cursor">
            <main id="body-inner">
                
            <div id="page-transition">
                <div className="ptr-overlay" />
                <div className="ptr-preloader">
                <div className="ptr-prel-content">
                    {/* Hint: You may need to change the img height and opacity to match your logo type. You can do this from the "thebaton.css" file (find: ".ptr-prel-image"). */}
                    <img src="/assets/img/logo-dark.png" className="ptr-prel-image tb-logo-dark" alt="TheBaton Logo" />
                </div> {/* /.ptr-prel-content */}
                </div> {/* /.ptr-preloader */}
            </div>
                
                <div id="magic-cursor">
                    <div id="ball" />
                </div>

                <div className="bg-noise"></div>

                <div id="scroll-container">

                    <header id="tb-header" className="tb-header-fixed">
                        <div className="tb-header-inner"> {/* add/remove class "tb-wrap" to enable/disable element boxed layout (class "tb-boxed" is required in <body> tag!). Note: additionally you can use prepared helper class "max-width-*" to add custom width to "tb-wrap". Example: "max-width-1500" (class "tb-wrap" is still required!). More info about helper classes can be found in the file "helper.css". */}
                        <div className="tb-header-col">
                            {/* Begin logo 
                                            ================ */}
                            <div className="tb-logo"> 
                            <Link href="/">
                                {/* Hint: You may need to change the img height to match your logo type. You can do this from the "thebaton.css" file (find: ".tb-logo img"). */}
                                <a>
                                    <img src="/assets/img/logo-dark.png" className="tb-logo-dark magnetic-item" alt="Logo" /> {/* logo dark */}
                                    <img src="/assets/img/logo-light.png" className="tb-logo-light magnetic-item" alt="Logo" /> {/* logo light */}
                                </a>
                            </Link>
                            </div>
                            {/* End logo */}
                        </div> {/* /.tb-header-col */}
                        <div className="tb-header-col">
                            {/* Begin overlay menu toggle button */}
                            <div id="tb-ol-menu-toggle-btn-wrap">
                            <div className="tb-ol-menu-toggle-btn-text">
                                <span className="text-menu" data-hover="Open">Menu</span>
                                <span className="text-close">Close</span>
                            </div>
                            <div className="tb-ol-menu-toggle-btn-holder">
                                <Link href="#" className="tb-ol-menu-toggle-btn magnetic-item"><a><span /></a></Link>
                            </div>
                            </div>
                            {/* End overlay menu toggle button */}
                            {/* Begin overlay menu 
                                            ======================== 
                                            * Use class "tb-ol-menu-center" to align menu to center.
                                            * Use class "tb-ol-menu-count" to enable menu counter.
                                            */}
                            <nav className="tb-overlay-menu tb-ol-menu-center tb-ol-menu-count">
                            <div className="tb-ol-menu-holder">
                                <div className="tb-ol-menu-inner tb-wrap">
                                <div className="tb-ol-menu-content">
                                    {/* Begin menu list */}
                                    <ul className="tb-ol-menu-list">
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/team"><a>Our Team</a></Link></li>
                                    <li><Link href="/blogposts"><a>Blogposts</a></Link></li>
                                    <li><Link href="/editorials"><a>Editorials</a></Link></li>
                                    <li><Link href="/podcasts"><a>Podcasts</a></Link></li>
                                    <li><Link href="/contact"><a>Contact</a></Link></li>
                                    </ul>
                                    {/* End menu list */}
                                </div> {/* /.tb-ol-menu-content */}
                                </div> {/* /.tb-ol-menu-inner */}
                            </div> {/* /.tb-ol-menu-holder */}
                            {/* Begin noise background */}
                            <div className="bg-noise" />
                            {/* End noise background */}
                            </nav> 
                            {/* End overlay menu */}
                        </div> {/* /.header-col */}
                        </div> {/* /.header-inner */}
                    </header> 
                    
                    <div id="content-wrap">
                    <Main />
                    
                    <footer id="tb-footer">
                        <div className="tb-footer-inner">
                        {/* Begin footer column 
                                            ========================= */}
                        <div className="footer-col tb-align-center-left">
                            <div className="footer-col-inner">
                            {/* You can use whatever button or link here */}
                            <div className="tb-btn tb-btn-link">
                                <Link href="#" className="scroll-to-top" data-hover="Back to top"><a>Back to top</a></Link>
                            </div>
                            </div> {/* /.footer-col-inner */}
                        </div>
                        {/* Begin footer column */}
                        {/* Begin footer column 
                                            ========================= */}
                        <div className="footer-col tb-align-center order-m-last">
                            <div className="footer-col-inner">
                            <div className="tb-copyright">
                                © Copyright - <Link href="https://thebaton.in" target="_blank" rel="noopener" className="tb-link"><a>TheBaton.in</a></Link>
                            </div>
                            </div> {/* /.footer-col-inner */}
                        </div>
                        {/* Begin footer column */}
                        {/* Begin footer column 
                                            ========================= */}
                        <div className="footer-col tb-align-center-right">
                            <div className="footer-col-inner">
                            <div className="footer-social">
                                <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt" /></div>
                                <div className="social-buttons">
                                <ul>
                                    <li><Link href="https://www.facebook.com/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-facebook-f" /></a></Link></li>
                                    <li><Link href="https://www.linkedin.com/company/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a> <i className="fab fa-linkedin" /></a></Link></li>
                                    <li><Link href="https://www.instagram.com/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-instagram" /></a></Link></li>
                                </ul>
                                </div> {/* /.social-buttons */}
                            </div> {/* /.footer-social */}
                            </div> {/* /.footer-col-inner */}
                        </div>
                        {/* Begin footer column */}
                        </div> {/* /.tb-section-inner */}
                    </footer>
                    </div>

                </div>
            </main>
            <NextScript />

            
        </body>
      </Html>
    )
  }
}

export default MyDocument