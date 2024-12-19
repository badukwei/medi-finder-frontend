"use client";
import React from "react";

const SearchInput = () => {
	return (
		<div className="group-ip ip-icon">
			<input
				type="text"
				className="form-control"
				placeholder="Search Location"
				name="s"
				title="Search for"
				required
			/>
			<a href="#" className="icon-right icon-location"></a>
		</div>
	);
};

export default SearchInput;
