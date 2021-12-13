import React from 'react';
import { useRouter } from "next/router";
import HeaderSection from '../sections/editorials/HeaderSection';
import EditorialSection from '../sections/editorials/EditorialSection';
import Pagination from '../sections/editorials/Pagination';
import Head from 'next/head';

export default function Editorials(props) {
    const router = useRouter();
    const { page } = router.query;
    const { editorials, totalPages } = props;
    const currentPage = page ? parseInt(page) : 1;
    const start = (currentPage - 1) * 8;
    const end = start + 8;
    const currentEditorials = editorials.slice(start, end);
    return (
      <>
        <Head>
          <title>Editorials | The Baton</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content="TheBaton Editorials are some of the best articles and reviews we have written. They are well researched and are always up to date. Read our editorials and get the latest scoop on the latest trends in the socio-political arena."/>
        </Head>

        <HeaderSection />
        <div id="page-content">
          <div className="tb-section no-padding-bottom">
            <div className="tb-section-inner">
              <EditorialSection data={currentEditorials} />
              <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://admin.thebaton.in/editorials?_sort=published_at:desc`);
    const editorials = await res.json();
    const res2 = await fetch(`https://admin.thebaton.in/editorials/count`);
    const totalEditorials = await res2.json();
    const totalPages = Math.ceil(totalEditorials / 8);
    return {
        props: {
            editorials,
            totalPages
        },
        revalidate: 60,
    };
}
