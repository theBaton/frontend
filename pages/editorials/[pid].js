import React from 'react';
import Head from 'next/head';
import HeaderSection from '../../sections/editorial/HeaderSection';
import Post from '../../sections/editorial/Post';
import References from '../../sections/editorial/References';


export default function Editorials(props) {
    return (
        <>
            <Head>
                <title>{props.editorial.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={props.editorial.cta_title} />
            </Head>
            
            <HeaderSection data={props.editorial} />
            <div id="page-content">
            <Post data={props.editorial} />
            <hr />
            <References data={props.editorial} />
            </div>
            
        </>
    );
}


export async function getStaticProps({ params }) {
    const pid = params.pid
    const res = await fetch(`https://admin.thebaton.in/editorials/${pid}`).then(res => res.json());
    return {
        props: {
            editorial: res
        },
        revalidate: 60
      }
    };

export async function getStaticPaths() {
        const editorials = await fetch('https://admin.thebaton.in/editorials').then(res => res.json());
        return {
          paths: editorials.map(editorial => {
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
    