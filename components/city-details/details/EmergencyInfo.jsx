import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

export default function EmergencyInfo({ emergencyPhone, ambulanceService }) {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h6 className="fw-6 title">Emergency Information</h6>
				<a href="#modalEmergencyInfoForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<div className="d-flex align-items-center gap-12 text-center flex-wrap">
				<p className="fw-5">Emergency Phone: </p>
				<p className="text-variant-1">{emergencyPhone}</p>
				<div className="vr"></div>
				<p className="fw-5">Ambulance Service: </p>
				<p className="text-variant-1">
					{ambulanceService.available ? "Available" : "Not Available"}
				</p>
				<div className="vr"></div>
				<p className="fw-5">Ambulance Service Response Time: </p>
				<p className="text-variant-1">
					{ambulanceService.responseTime}
				</p>
				<div className="vr"></div>
				<p className="fw-5">Ambulance Service Fees: </p>
				<p className="text-variant-1">
					${ambulanceService.lowestFees} - ${ambulanceService.highestFees}
				</p>
			</div>
		</>
	);
}
