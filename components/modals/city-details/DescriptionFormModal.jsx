"use client";
import React from "react";

const DescriptionFormModal = () => {
	return (
		<div className="modal modal-account fade" id="modalDescriptionForm">
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
								<h4>Description</h4>
								<span
									className="close-modal icon-close2 cursor-pointer"
									data-bs-dismiss="modal"
								/>
							</div>
							<p className="mb-40">
								Write a description for the city. This will be
								displayed on the city page. Should be about 100
								words.
							</p>
							<div className="box">
								<fieldset className="box-fieldset">
									<label htmlFor="description">Description</label>
									<textarea
										className="form-control text-area-description"
										placeholder="Write"
									/>
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
}

export default DescriptionFormModal;
