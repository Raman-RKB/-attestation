import React, { useEffect, useState } from 'react';
import Button from './button';

// eslint-disable-next-line react/prop-types
const PaginationItem = ({ pageSet, clickedPage }) => {
  const [pageToRender, setPageToRender] = useState();

  const handlePaginationTenPages = () => {
    let arr = [];
    for (let i = 1; i <= pageSet; i++) {
      arr.push(i);
    }
    setPageToRender(arr.slice(-10));
  }

  const handlePaginationLessThanTenPages = () => {
    if (pageSet === 1) {
      setPageToRender(1);
    } else {
      const pageToRenderArr = Array.from({ length: pageSet % 10 }, (_, i) => pageSet - i).reverse();
      setPageToRender(pageToRenderArr);
    }
  }

  useEffect(() => {
    if (pageSet % 10 === 0) {
      handlePaginationTenPages();
    } else if (pageSet % 10 !== 0) {
      handlePaginationLessThanTenPages();
    } else if (pageSet < 10) {
      handlePaginationLessThanTenPages();
    }
  }, [pageSet, clickedPage]);

  return (
    <>
      {pageToRender && Array.isArray(pageToRender) && pageToRender?.map((num) => (
        // eslint-disable-next-line react/jsx-key
        <Button
          key={num}
          page={num}
          active={clickedPage === num}
        />
      ))}
    </>
  );
};

export default PaginationItem;

Button