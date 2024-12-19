import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

export default function InsuranceInfo({ insuranceInfo }) {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h6 className="fw-6 title">Insurance and Laws</h6>
				<a href="#modalInsuranceInfoForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<div className="d-flex align-items-center gap-12 text-center flex-wrap">
				<p className="fw-5">International Accepted: </p>
				<p className="text-variant-1">
					{insuranceInfo.internationalAccepted ? "Yes" : "No"}
				</p>
				<div className="vr"></div>
				<p className="fw-5">Travel Insurance Recommended: </p>
				<p className="text-variant-1">
					{insuranceInfo.travelInsuranceRecommended ? "Yes" : "No"}
				</p>
			</div>
		</>
	);
}
