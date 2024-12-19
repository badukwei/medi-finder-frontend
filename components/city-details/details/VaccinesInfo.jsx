import React from "react";
import { MdOutlineVaccines, MdOutlineModeEdit } from "react-icons/md";

export default function VaccinesInfo({ vaccinesRecommended }) {
	return (
		<div className="single-property-overview">
			<div className="d-flex justify-content-between align-items-center">
				<h6 className="fw-6 title">Vaccines Recommended</h6>
				<a href="#modalVaccinesInfoForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<ul className="info-box d-flex flex-column flex-md-row">
				{vaccinesRecommended.map((vaccine, index) => (
					<li className="item w-auto" key={index}>
						<div className="box-icon w-52">
							<MdOutlineVaccines
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-start gap-4 text-center flex-wrap">
							<div className="d-flex align-items-center gap-4 text-center flex-wrap">
								<p className="label">Vaccine: </p>
								<span>{vaccine.vaccine}</span>
							</div>
							<div className="d-flex align-items-center gap-4 text-center flex-wrap">
								<p className="label">Importance:</p>
								<span>{vaccine.importance}</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
