import Image from "next/image";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";

export default function EmergencyHospitalInfo({ hospitals }) {
  return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h5 className="title fw-6">Emergency Hospitals</h5>
				<a href="#modalHospitalsInfoForm" data-bs-toggle="modal">
					<MdOutlineModeEdit className="text-variant-1 cursor-pointer title edit-icon" size={20} />
				</a>
			</div>
			<div className="wrap-review m-0 border-0 py-4">
				<ul className="box-review">
					{hospitals.map((hospital, index) => (
						<li key={index} className="list-review-item">
							<div className="avatar avt-60">
								<Image
									alt="avatar"
									src="/images/avatar/avt-2.jpg"
									width={60}
									height={60}
								/>
							</div>
							<div className="content w-100">
								<div className="box-head">
									<div className="d-flex align-items-center flex-wrap justify-content-between gap-8">
										<h6>{hospital.name}</h6>
										<p className="fw-5 m-0">
											{hospital.open24Hours
												? "Open 24 Hours"
												: "Check the website"}
										</p>
									</div>
									<p className="mt-4 caption-2 text-variant-2">
										{hospital.address}
									</p>
								</div>
								<p>{hospital.contact}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
  );
}
