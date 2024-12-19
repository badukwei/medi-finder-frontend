import React from "react";
import { MdOutlineSick, MdOutlineModeEdit } from "react-icons/md";

export default function CommonIllnessInfo({ commonIllnesses }) {
	return (
		<div className="single-property-overview">
			<div className="d-flex justify-content-between align-items-center">
				<h6 className="fw-6 title">Common Illnesses</h6>
				<a href="#modalCommonIllnessInfoForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<ul className="info-box d-flex flex-column flex-md-row">
				{commonIllnesses.map((illness, index) => (
					<li className="item w-auto" key={index}>
						<div className="box-icon w-52">
							<MdOutlineSick
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="content">
							<span className="label">Illness:</span>
							<span>{illness}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
