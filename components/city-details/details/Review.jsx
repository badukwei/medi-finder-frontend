"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import {
	MdAir,
	MdOutlineHealthAndSafety,
	MdOutlineWaterDrop,
	MdOutlineFoodBank,
	MdLanguage,
} from "react-icons/md";

export default function Review() {
	return (
		<>
			<div className="header-property-detail">
				<div className="content-top">
					<h5 className="text-black-2">Leave Your Ratings</h5>
					<p className="text-variant-1 mt-8">
						Your ratings will help other users to understand the
						quality of services in this city
					</p>
				</div>
			</div>
			<div className="single-property-desc">
				<div className="d-flex align-items-center justify-content-between mb-16">
					<h6 className="title fw-6 m-0">General Rating</h6>
					<Rating />
				</div>
				<p className="text-variant-1 mt-8">
					General rating reflects the overall healthcare and hygiene
					quality of a city. When rating, consider factors such as the
					cleanliness of medical facilities, availability of essential
					services, waiting times, cost of healthcare, language
					support, service attitude of medical staff, and
					accessibility of locations. Your rating should represent
					your overall impression and experience of the city’s
					healthcare environment
				</p>
			</div>
			<div className="single-property-overview mb-16">
				<h6 className="title fw-6">Overview</h6>
				<ul className="info-box d-flex flex-column flex-md-row">
					<li className="item w-auto">
						<div className="box-icon w-52">
							<MdOutlineWaterDrop
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between">
							<span>Water Safety:</span>
							<Rating />
						</div>
					</li>
					<li className="item w-auto">
						<div className="box-icon w-52">
							<MdOutlineFoodBank
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between">
							<span>Food Safety:</span>
							<Rating />
						</div>
					</li>
					<li className="item w-auto">
						<div className="box-icon w-52">
							<MdAir
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between">
							<span>Air Quality:</span>
							<Rating />
						</div>
					</li>
					<li className="item w-auto">
						<div className="box-icon w-52">
							<MdOutlineHealthAndSafety
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between">
							<span>Health Risk:</span>
							<Rating />
						</div>
					</li>
					<li className="item w-auto">
						<div className="box-icon w-52">
							<MdLanguage
								size={20}
								className="icon icon-sliders-horizontal"
							/>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between">
							<span>Language Support:</span>
							<Rating />
						</div>
					</li>
				</ul>
			</div>
			<button
				className="mt-30 tf-btn primary w-100"
				name="submit"
				type="submit"
			>
				<span>Add Ratings</span>
			</button>
		</>
	);
}
