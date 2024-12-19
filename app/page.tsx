import Header from "@/components/headers/Header";
import Hero from "@/components/homes/Hero";
import Cities from "@/components/cities/Cities";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Find Clinics and Medical Services || MediFinder",
	description:
		"MediFinder helps you locate clinics, hospitals, and pharmacies worldwide with user reviews and ratings for better healthcare choices.",
};

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Cities />
		</>
	);
}
