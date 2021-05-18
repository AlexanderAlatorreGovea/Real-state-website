import React from 'react';

const Pagination = ({ listingPerPage, totalListings, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalListings / listingPerPage); i++) {
        pageNumbers.push(i);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
      
    return (
        <section className="pagination">
            <ul className="pages">
                {pageNumbers.map((number) => (
                    <li className={currentPage !== number ? '' : 'active'} key={number} 
                        onClick={() => { 
                            paginate(number); 
                            scrollToTop();
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </section>
    );
}; 

export default Pagination;
