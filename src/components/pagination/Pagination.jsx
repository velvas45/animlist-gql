import React from "react";

import { usePagination, DOTS } from "hooks/usePagination";

import {
  PaginationContainer,
  PaginationItem,
  DotsStyle,
} from "./pagination.styles";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    window.scrollTo(0, 0);
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    window.scrollTo(0, 0);
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <PaginationItem
        disabled={currentPage == 1}
        className={`${currentPage == 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <AiOutlineArrowLeft />
      </PaginationItem>
      {paginationRange.map((pageNumber, idx) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <DotsStyle key={idx}>&#8230;</DotsStyle>;
        }

        // Render our Page Pills
        return (
          <PaginationItem
            key={idx}
            className={`${pageNumber === currentPage ? "selected" : ""}`}
            onClick={() => {
              window.scrollTo(0, 0);
              onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <PaginationItem
        className={`${currentPage == lastPage ? "disabled" : ""}`}
        disabled={currentPage == lastPage}
        onClick={onNext}
      >
        <AiOutlineArrowRight />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
