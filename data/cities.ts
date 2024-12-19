import { CityHealthInfo } from "@/types/city";

export const cities: CityHealthInfo[] = [
	{
		id: "1",
		cityName: "New York",
		country: "USA",
		generalRating: 4.5,
		overview:
			"New York is a vibrant city known for its iconic landmarks, bustling streets, and world-class healthcare facilities.",
		description:
			"New York is a vibrant city known for its iconic landmarks, bustling streets, and world-class healthcare facilities. It is a city that never sleeps, and its healthcare facilities are no exception. New York has a wide range of healthcare facilities, from world-class hospitals to local clinics. The city is also home to some of the best medical schools in the country, which means that the city has a wealth of medical professionals to choose from. New York is a city that is always on the move, and its healthcare facilities are no exception. The city is always on the move, and its healthcare facilities are no exception.",
		emergencyInfo: {
			emergencyPhone: "911",
			hospitals: [
				{
					name: "NewYork-Presbyterian Hospital",
					address: "525 E 68th St, New York, NY 10065",
					contact: "+1 212-746-5454",
					open24Hours: true,
				},
				{
					name: "NewYork-Presbyterian Hospital",
					address: "525 E 68th St, New York, NY 10065",
					contact: "+1 212-746-5454",
					open24Hours: true,
				},
				{
					name: "NewYork-Presbyterian Hospital",
					address: "525 E 68th St, New York, NY 10065",
					contact: "+1 212-746-5454",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				lowestFees: 100,
				highestFees: 300,
				responseTime: "5-10 minutes",
			},
		},
		commonIllnesses: ["Cold", "Flu", "Allergies"],
		vaccinesRecommended: [
			{
				vaccine: "Hepatitis A",
				importance: 4.5,
			},
			{
				vaccine: "Hepatitis A",
				importance: 4.5,
			},
			{
				vaccine: "Hepatitis A",
				importance: 4.5,
			},
		],
		insuranceInfo: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		languageSupport: 4.5,
		waterSafety: 4.5,
		foodSafety: 4.5,
		healthRisk: 4.5,
		airQuality: 4.5,
	},
];
