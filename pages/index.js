import HeroSection from '../sections/index/HeroSection';
import EditorialSection from '../sections/index/EditorialSection';
import BlogpostSection from '../sections/index/BlogpostSection';
import RunningText from '../sections/index/RunningText';
import ContactForm from '../sections/ContactForm';
import Head from 'next/head';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>TheBaton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="The Baton is a socio-political blog that focuses on the issues of the current state of the world." />
      </Head>
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
