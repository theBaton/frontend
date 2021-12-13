import React from 'react';
import Head from 'next/head';
import HeaderSection from '../../sections/blogpost/HeaderSection';
import Post from '../../sections/blogpost/Post';
import References from '../../sections/blogpost/References';


export default function Editorials(props) {
    return (
        <>
            <Head>
                <title>{props.blogpost.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={props.blogpost.cta_title} />
            </Head>
            <HeaderSection data={props.blogpost} />
            <div id="page-content">
            <Post data={props.blogpost} />
            <hr />
            <References data={props.blogpost} />
            </div>
            
        </>
    );
}


export async function getStaticProps({ params }) {
    const pid = params.pid
    const res = await fetch(`https://admin.thebaton.in/blogposts/${pid}`).then(res => res.json());
    return {
        props: {
            blogpost: res
        }
        }
    };

export async function getStaticPaths() {
        const blogposts = await fetch('https://admin.thebaton.in/blogposts').then(res => res.json());
        return {
          paths: blogposts.map(editorial => {
            const pid = editorial.public_id;
            return {
              params: {
                pid
              }
            }
          }),
          fallback: false
        }
      }
    