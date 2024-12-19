import Description from "./details/Description";
import EmergencyInfo from "./details/EmergencyInfo";
import EmergencyHospitalInfo from "./details/EmergencyHospitalInfo";
import Overview from "./details/Overview";
import Review from "./details/Review";
import Rating from "@mui/material/Rating";
import CommonIllnessInfo from "./details/CommonIllnessInfo";
import InsuranceInfo from "./details/InsuranceInfo";
import VaccinesInfo from "./details/VaccinesInfo";
import { cities } from "@/data/cities";

export default function CityDetails() {
	const {
		cityName,
		country,
		generalRating,
		description,
		emergencyInfo,
		airQuality,
		languageSupport,
		commonIllnesses,
		insuranceInfo,
		vaccinesRecommended,
		healthRisk,
		waterSafety,
		foodSafety,
	} = cities[0];
	const title = `${cityName}, ${country}`;
	return (
		<>
			<section className="flat-section-v3 flat-property-detail-v2">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="single-property-element me-0">
								<div className="header-property-detail">
									<div className="content-top d-flex justify-content-between align-items-center">
										<h3 className="title link fw-8 m-0">
											{title}
										</h3>
										<div className="box-price d-flex align-items-end gap-8">
											<p className="fw-5 fs-5 text-variant-1">
												{generalRating}
											</p>
											<Rating
												name="half-rating"
												defaultValue={generalRating}
												precision={0.5}
												readOnly
											/>
										</div>
									</div>
								</div>
								<div className="single-property-desc">
									<Description description={description} />
								</div>
								<div className="single-property-desc">
									<EmergencyInfo
										emergencyPhone={
											emergencyInfo.emergencyPhone
										}
										ambulanceService={
											emergencyInfo.ambulanceService
										}
									/>
								</div>
								<div className="single-property-desc">
									<InsuranceInfo
										insuranceInfo={insuranceInfo}
									/>
								</div>
								<div className="single-property-desc">
									<CommonIllnessInfo
										commonIllnesses={commonIllnesses}
									/>
								</div>
								<div className="single-property-desc">
									<VaccinesInfo
										vaccinesRecommended={
											vaccinesRecommended
										}
									/>
								</div>
								<div className="single-property-overview">
									<Overview
										languageSupport={languageSupport}
										healthRisk={healthRisk}
										waterSafety={waterSafety}
										foodSafety={foodSafety}
										airQuality={airQuality}
									/>
								</div>
							</div>
							<div className="single-property-element single-wrapper-review me-0">
								<EmergencyHospitalInfo
									hospitals={emergencyInfo.hospitals}
								/>
							</div>
							<div className="single-property-element single-wrapper-review me-0">
								<Review />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
