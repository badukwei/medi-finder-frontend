"use client";
import React from "react";

const EmergencyInfoFormModal = () => {
	return (
		<div className="modal modal-account fade" id="modalEmergencyInfoForm">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="flat-account">
						{/* <div className="banner-account">
							<Image
								alt="banner"
								src="/images/banner/banner-account2.jpg"
								width={570}
								height={1263}
							/>
						</div> */}
						<form
							onSubmit={(e) => e.preventDefault()}
							className="form-account"
						>
							<div className="title-box m-0 mb-2">
								<h4>Emergency Information</h4>
								<span
									className="close-modal icon-close2 cursor-pointer"
									data-bs-dismiss="modal"
								/>
							</div>
							<p className="mb-40">
								Write emergency information for the city. This
								will be displayed on the city page.
							</p>
							<div className="box">
								<fieldset className="box-fieldset">
									<label htmlFor="phone">
										Emergency Phone Number
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Phone Number"
									/>
								</fieldset>
								<fieldset className="box-fieldset">
									<legend className="mb-10 fw-6">
										Ambulance Service
									</legend>
									<div className="form-check">
										<input
											type="radio"
											id="ambulance-available"
											name="ambulanceService"
											className="form-check-input"
											value="available"
										/>
										<label
											htmlFor="ambulance-available"
											className="form-check-label fw-5 m-0"
										>
											Available
										</label>
									</div>
									<div className="form-check">
										<input
											type="radio"
											id="ambulance-not-available"
											name="ambulanceService"
											className="form-check-input"
											value="not-available"
										/>
										<label
											htmlFor="ambulance-not-available"
											className="form-check-label fw-5 m-0"
										>
											Not available
										</label>
									</div>
								</fieldset>
								<fieldset className="box-fieldset">
									<label htmlFor="response-time">
										Ambulance Service Response Time
									</label>
									<div className="d-flex gap-12 align-items-center">
										<input
											type="number"
											className="form-control"
											placeholder="Minutes"
										/>
										<div className="fs-3">-</div>
										<input
											type="number"
											className="form-control"
											placeholder="Minutes"
										/>
									</div>
								</fieldset>
								<fieldset className="box-fieldset">
									<label htmlFor="fees">
										Ambulance Service Fees
									</label>
									<div className="d-flex gap-12 align-items-center">
										<input
											type="number"
											className="form-control"
											placeholder="Lowest Fees"
										/>
										<div className="fs-3">-</div>
										<input
											type="number"
											className="form-control"
											placeholder="Highest Fees"
										/>
									</div>
								</fieldset>
							</div>
							<button
								type="submit"
								className="tf-btn primary w-100"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmergencyInfoFormModal;
