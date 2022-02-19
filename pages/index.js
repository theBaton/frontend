import HeroSection from '../sections/index/HeroSection';
import EditorialSection from '../sections/index/EditorialSection';
import BlogpostSection from '../sections/index/BlogpostSection';
import RunningText from '../sections/index/RunningText';
import ContactForm from '../sections/ContactForm';
import Head from 'next/head';
import Link from 'next/link';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>TheBaton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="The Baton is a socio-political blog that focuses on the issues of the current state of the world." />
      </Head>
      <footer id="tb-footer" className='tb-footer-fixed'>
                        <div className="tb-footer-inner">
                        <div className="footer-col tb-align-center-right">
                            <div className="footer-col-inner">
                            <div className="footer-social">
                                <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt" /></div>
                                <div className="social-buttons">
                                <ul>
                                    <li><Link href="https://www.facebook.com/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-facebook-f" /></a></Link></li>
                                    <li><Link href="https://www.linkedin.com/company/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a> <i className="fab fa-linkedin" /></a></Link></li>
                                    <li><Link href="https://www.instagram.com/thebatonofficial/" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-instagram" /></a></Link></li>
                                    <li><Link href="https://twitter.com/thebatonindia/" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-twitter" /></a></Link></li>
                                </ul>
                                </div> 
                            </div> 
                            </div> 
                        </div>
                        </div>
                    </footer>
    <HeroSection />
    
    <div id="page-content">
      <EditorialSection data={props.editorials} />
      <BlogpostSection data={props.blogposts} />
      <RunningText />
      <ContactForm />
    </div>
    </>
  );
}

export const getStaticProps = async () => {
  const [blogResponse, editorialResponse] = await Promise.all([
    fetch("https://admin.thebaton.in/blogposts?_sort=id:DESC&_limit=6"),
    fetch("https://admin.thebaton.in/editorials?_sort=id:DESC&_limit=6"),
  ]);

  const [blogposts, editorials] = await Promise.all([
    blogResponse.json(),
    editorialResponse.json(),
  ]);
  return {
    props: {
      blogposts,
      editorials,
    },
    revalidate: 60,
  };
};
