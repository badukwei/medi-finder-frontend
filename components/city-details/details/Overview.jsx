import React from "react";
import {
	MdOutlineHealthAndSafety,
	MdLanguage,
	MdOutlineWaterDrop,
	MdAir, 
	MdOutlineFoodBank,
} from "react-icons/md";

export default function Overview({
	languageSupport,
	healthRisk,
	waterSafety,
	foodSafety,
	airQuality,
}) {
	return (
		<>
			<h6 className="title fw-6">Overview</h6>
			<ul className="info-box d-flex flex-column flex-md-row">
				<li className="item w-auto">
					<div className="box-icon w-52">
						<MdOutlineWaterDrop
							size={20}
							className="icon icon-sliders-horizontal"
						/>
					</div>
					<div className="content">
						<span className="label">Water Safety:</span>
						<span>{waterSafety}</span>
					</div>
				</li>
				<li className="item w-auto">
					<div className="box-icon w-52">
						<MdOutlineFoodBank
							size={20}
							className="icon icon-sliders-horizontal"
						/>
					</div>
					<div className="content">
						<span className="label">Food Safety:</span>
						<span>{foodSafety}</span>
					</div>
				</li>
				<li className="item w-auto">
					<div className="box-icon w-52">
						<MdAir
							size={20}
							className="icon icon-sliders-horizontal"
						/>
					</div>
					<div className="content">
						<span className="label">Air Quality:</span>
						<span>{airQuality}</span>
					</div>
				</li>
				<li className="item w-auto">
					<div className="box-icon w-52">
						<MdOutlineHealthAndSafety
							size={20}
							className="icon icon-sliders-horizontal"
						/>
					</div>
					<div className="content">
						<span className="label">Health Risk:</span>
						<span>{healthRisk}</span>
					</div>
				</li>
				<li className="item w-auto">
					<div className="box-icon w-52">
						<MdLanguage
							size={20}
							className="icon icon-sliders-horizontal"
						/>
					</div>
					<div className="content">
						<span className="label">Language Support:</span>
						<span>{languageSupport}</span>
					</div>
				</li>
			</ul>
		</>
	);
}
