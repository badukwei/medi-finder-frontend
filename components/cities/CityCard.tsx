import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "@mui/material/Rating";

interface CityCardProps {
	link: string;
	imageUrl: string;
	cityName: string;
	country: string;
	generalRating: number;
	overview: string;
}

const CityCard = ({
	link,
	imageUrl,
	cityName,
	country,
	generalRating,
	overview,
}: CityCardProps) => {
	const title = `${cityName}, ${country}`;
	const maxLength = 90;
	const truncatedOverview =
		overview.length > maxLength
			? overview.slice(0, maxLength) + "..."
			: overview;
	return (
		<div className="col-md-4">
			<div className="homelengo-box">
				<div className="archive-top">
					<Link href={link} className="images-group">
						<div className="images-style">
							<Image
								className="imageUrl"
								alt="img"
								src={imageUrl}
								width={615}
								height={405}
							/>
						</div>
					</Link>
				</div>
				<div className="archive-bottom">
					<div className="content-top">
						<h6 className="text-capitalize">
							<Link href={link} className="link">
								{title}
							</Link>
						</h6>
						<p className="mt-4">{truncatedOverview}</p>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<Rating
							name="half-rating"
							defaultValue={generalRating}
							precision={0.5}
							readOnly
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CityCard;
