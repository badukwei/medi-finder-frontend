"use client";
import React from "react";
import TagInput from "@/components/inputs/TagInput";

const CommonIllnessInfoFormModal = () => {
	return (
		<div
			className="modal modal-account fade"
			id="modalCommonIllnessInfoForm"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="flat-account">
						<form
							onSubmit={(e) => e.preventDefault()}
							className="form-account"
						>
							<div className="title-box m-0 mb-2">
								<h4>Common Illnesses</h4>
								<span
									className="close-modal icon-close2 cursor-pointer"
									data-bs-dismiss="modal"
								/>
							</div>
							<p className="mb-40">
								Write common illnesses for the city. This will
								be displayed on the city page.
							</p>
							<div className="box">
								<TagInput />
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

export default CommonIllnessInfoFormModal;
