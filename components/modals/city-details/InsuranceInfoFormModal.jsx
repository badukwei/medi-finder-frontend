"use client";
import React from "react";

const InsuranceInfoFormModal = () => {
	return (
		<div className="modal modal-account fade" id="modalInsuranceInfoForm">
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
								Write insurance information for the city. This
								will be displayed on the city page.
							</p>
							<div className="box">
								<fieldset className="box-fieldset">
									<legend className="mb-10 fw-6">
										International Accepted
									</legend>
									<div className="form-check">
										<input
											type="radio"
											id="international-accepted"
											name="internationalAccepted"
											className="form-check-input"
											value="true"
										/>
										<label
											htmlFor="international-accepted"
											className="form-check-label fw-5 m-0"
										>
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											type="radio"
											id="international-not-accepted"
											name="internationalAccepted"
											className="form-check-input"
											value="false"
										/>
										<label
											htmlFor="international-not-accepted"
											className="form-check-label fw-5 m-0"
										>
											No
										</label>
									</div>
								</fieldset>
								<fieldset className="box-fieldset">
									<legend className="mb-10 fw-6">
										Travel Insurance Recommended
									</legend>
									<div className="form-check">
										<input
											type="radio"
											id="travel-insurance-recommended"
											name="travelInsuranceRecommended"
											className="form-check-input"
											value="true"
										/>
										<label
											htmlFor="travel-insurance-recommended"
											className="form-check-label fw-5 m-0"
										>
											Yes
										</label>
									</div>
									<div className="form-check">
										<input
											type="radio"
											id="travel-insurance-not-recommended"
											name="travelInsuranceRecommended"
											className="form-check-input"
											value="false"
										/>
										<label
											htmlFor="travel-insurance-not-recommended"
											className="form-check-label fw-5 m-0"
										>
											No
										</label>
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

export default InsuranceInfoFormModal;
