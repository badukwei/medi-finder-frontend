import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";


export default function Description({ description }) {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h5 className="fw-6 title">Description</h5>
				<a href="#modalDescriptionForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<p className="text-variant-1">{description}</p>
		</>
	);
}
