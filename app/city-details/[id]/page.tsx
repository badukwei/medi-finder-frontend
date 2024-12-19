import React from "react";
import Header from "@/components/headers/Header";
import CityDetails from "@/components/city-details/CityDetails";
import Hero from "@/components/homes/Hero";

export const metadata = {
	title: "Find Clinics and Medical Services || MediFinder",
	description:
		"MediFinder helps you locate clinics, hospitals, and pharmacies worldwide with user reviews and ratings for better healthcare choices.",
};

const Page = () => {
	return (
		<>
			<Header />
			<Hero />
			<CityDetails />
		</>
	);
};

export default Page;
