import React from "react";
import Link from 'next/link';


const Pagination = ({ totalPages, currentPage }) => {
    return (
        <div className="tb-pagination tb-pagin-center anim-fadeinup">
        <div className="tb-pagin-prev">
          <Link href={`/blogposts?page=${currentPage - 1}`} className="tb-pagin-item magnetic-item"><a><i className="fas fa-chevron-left" /></a></Link>
        </div>
        <div className="tb-pagin-numbers">

            {[...Array(totalPages)].map((_, i) => (
                <Link href={`/blogposts?page=${i + 1}`} className={`tb-pagin-item magnetic-item ${i === currentPage - 1 ? 'active' : ''}`} key={i}><a>{i + 1}</a></Link>
            ))}


        </div>
        <div className="tb-pagin-next">
          <Link href={`/blogposts?page=${currentPage + 1}`} className="tb-pagin-item tb-pagin-next magnetic-item"><a><i className="fas fa-chevron-right" /></a></Link>
        </div>
      </div>
    );
};

export default Pagination;