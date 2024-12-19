"use client";
import React from "react";

interface PaginationProps {
	itemLength: number;
	itemPerPage: number;
	setPage: (num: number) => void;
	currentPage: number;
}

const Pagination = ({
	itemLength = 200,
	itemPerPage = 10,
	setPage = () => {},
	currentPage,
}: PaginationProps) => {
	const totalPages = Math.ceil(itemLength / itemPerPage); // Adjust as needed

	const handlePageClick = (page: number) => {
		if (page != 0 && page <= totalPages) {
			setPage(page);
		}
		// Add navigation logic here, e.g., using a router or window.location
	};

	return (
		<>
			{totalPages > 1 ? (
				<React.Fragment>
					{" "}
					<li onClick={() => handlePageClick(currentPage - 1)}>
						<a className={`nav-item`}>
							<i className="icon icon-arr-l" />
						</a>
					</li>
					{[...Array(totalPages)].slice(0, 4).map((_, index) => {
						const page = index + 1;
						return (
							<li key={page}>
								<a
									className={`nav-item ${
										currentPage === page ? "active" : ""
									}`}
									onClick={() => handlePageClick(page)}
								>
									{page}
								</a>
							</li>
						);
					})}
					{currentPage >= 5 && (
						<li>
							<a className={`nav-item active`}>{currentPage}</a>
						</li>
					)}
					{totalPages >= 5 && currentPage != totalPages && (
						<li className={`nav-item`}>
							<a className="">...</a>
						</li>
					)}
					<li onClick={() => handlePageClick(currentPage + 1)}>
						<a className={`nav-item`}>
							<i className="icon icon-arr-r" />
						</a>
					</li>{" "}
				</React.Fragment>
			) : (
				""
			)}
		</>
	);
};

export default Pagination;
