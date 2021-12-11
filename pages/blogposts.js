import React from 'react';
import { useRouter } from "next/router";
import HeaderSection from '../sections/blogposts/HeaderSection';
import BlogpostSection from '../sections/blogposts/BlogpostSection';
import Pagination from '../sections/blogposts/Pagination';
import Head from 'next/head';

export default function Blogposts(props) {
    const router = useRouter();
    const { page } = router.query;
    const { blogposts, totalPages } = props;
    const currentPage = page ? parseInt(page) : 1;
    const start = (currentPage - 1) * 8;
    const end = start + 8;
    const currentBlogposts = blogposts.slice(start, end);
    //return with title for SEO
  
    return (
      
      <>
        <Head>
          <title>Blogposts | TheBaton</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="TheBaton Blogposts are a collection of our thoughts, experiences, and ideas. We are a community of creative people who are passionate about what we do and love to share our knowledge and experience with the world." />
        </Head>
        <HeaderSection />
        <div id="page-content">
          <div className="tb-section no-padding-bottom">
            <div className="tb-section-inner">
              <BlogpostSection data={currentBlogposts} />
              <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://admin.thebaton.in/blogposts?_sort=published_at:desc`);
    const blogposts = await res.json();
    const res2 = await fetch(`https://admin.thebaton.in/blogposts/count`);
    const totalBlogposts = await res2.json();
    const totalPages = Math.ceil(totalBlogposts / 8);
    return {
        props: {
            blogposts,
            totalPages
        },
        revalidate: 60,
    };
}
