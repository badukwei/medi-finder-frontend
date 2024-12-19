export const cities = [
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
	{
		id: "2",
		cityName: "London",
		country: "UK",
		generalRating: 4.5,
		overview:
			"London is a historic city offering excellent healthcare facilities, with many NHS and private clinics available.",
		emergencyInfo: {
			emergencyPhone: "999",
			hospitals: [
				{
					name: "St Thomas' Hospital",
					address: "Westminster Bridge Rd, London SE1 7EH",
					contact: "+44 20 7188 7188",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				responseTime: "5-15 minutes",
			},
		},
		dailyMedicalServices: {
			clinics: [
				{
					name: "London Doctors Clinic",
					address: "65 London Wall, London EC2M 5TU",
					contact: "+44 20 3805 1781",
				},
			],
			pharmacies: [
				{
					name: "Boots Pharmacy",
					address: "54 Oxford St, London W1D 1BL",
					contact: "+44 20 7437 1427",
				},
			],
			pricing: {
				generalConsultation: "£50-£200",
				specialistConsultation: "£150-£400",
			},
		},
		languageSupport: {
			languages: ["English", "Polish", "Arabic", "Hindi"],
			translationServices: "Available on request at hospitals",
		},
		commonIllnesses: ["Cold", "Influenza", "Hay Fever"],
		diseasesAndVaccines: {
			localDiseases: ["Seasonal Flu"],
			vaccinesRequired: [],
		},
		hygiene: {
			waterSafety: "Safe for drinking",
			foodSafety: "High standards",
		},
		insuranceAndLaws: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		healthRisksAndAdvice: {
			pollutionIndex: "Low",
			advice: "Carry an umbrella as weather changes frequently.",
		},
		airQuality: 4.5,
	},
	{
		id: "3",
		cityName: "Tokyo",
		country: "Japan",
		generalRating: 4.5,
		overview:
			"Tokyo is a technologically advanced city with clean environments and highly efficient healthcare systems.",
		emergencyInfo: {
			emergencyPhone: "119",
			hospitals: [
				{
					name: "Tokyo Medical University Hospital",
					address:
						"6-7-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023",
					contact: "+81 3-3342-6111",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				responseTime: "5-10 minutes",
			},
		},
		dailyMedicalServices: {
			clinics: [
				{
					name: "Roppongi Hills Clinic",
					address: "6-10-1 Roppongi, Minato City, Tokyo",
					contact: "+81 3-6406-6666",
				},
			],
			pharmacies: [
				{
					name: "Matsumoto Kiyoshi",
					address: "Shibuya Station East Exit, Tokyo",
					contact: "+81 3-1234-5678",
				},
			],
			pricing: {
				generalConsultation: "¥5,000-¥15,000",
				specialistConsultation: "¥10,000-¥30,000",
			},
		},
		languageSupport: {
			languages: ["Japanese", "English", "Chinese", "Korean"],
			translationServices: "Available at larger hospitals",
		},
		commonIllnesses: ["Hay Fever", "Cold", "Influenza"],
		diseasesAndVaccines: {
			localDiseases: ["Hay Fever"],
			vaccinesRequired: [],
		},
		hygiene: {
			waterSafety: "Safe for drinking",
			foodSafety: "Very high standards",
		},
		insuranceAndLaws: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		healthRisksAndAdvice: {
			pollutionIndex: "Low",
			advice: "Wear masks during high pollen seasons.",
		},
		airQuality: 4.5,
	},
	{
		id: "4",
		cityName: "Paris",
		country: "France",
		generalRating: 4.5,
		overview:
			"Paris is known for its romantic atmosphere, historic landmarks, and well-regarded healthcare system.",
		emergencyInfo: {
			emergencyPhone: "112",
			hospitals: [
				{
					name: "Hôpital Européen Georges Pompidou",
					address: "20 Rue Leblanc, 75015 Paris, France",
					contact: "+33 1 56 09 20 00",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				responseTime: "10-15 minutes",
			},
		},
		dailyMedicalServices: {
			clinics: [
				{
					name: "Centre Médical International de Paris",
					address: "65 Avenue d'Iéna, 75116 Paris, France",
					contact: "+33 1 53 23 25 25",
				},
			],
			pharmacies: [
				{
					name: "Pharmacie des Champs-Elysées",
					address: "84 Av. des Champs-Élysées, 75008 Paris, France",
					contact: "+33 1 45 62 02 02",
				},
			],
			pricing: {
				generalConsultation: "€50-€150",
				specialistConsultation: "€150-€300",
			},
		},
		languageSupport: {
			languages: ["French", "English", "Arabic", "Spanish"],
			translationServices: "Available at major hospitals",
		},
		commonIllnesses: ["Seasonal Flu", "Cold", "Allergies"],
		diseasesAndVaccines: {
			localDiseases: ["Seasonal Flu"],
			vaccinesRequired: [],
		},
		hygiene: {
			waterSafety: "Safe for drinking",
			foodSafety: "High standards",
		},
		insuranceAndLaws: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		healthRisksAndAdvice: {
			pollutionIndex: "Moderate",
			advice: "Be cautious of pickpockets in crowded areas.",
		},
		airQuality: 4.5,
	},
	{
		id: "5",
		cityName: "Singapore",
		country: "Singapore",
		generalRating: 4.5,
		overview:
			"Singapore is a modern city-state with world-class healthcare facilities and a highly efficient public health system.",
		emergencyInfo: {
			emergencyPhone: "995",
			hospitals: [
				{
					name: "Singapore General Hospital",
					address: "Outram Rd, Singapore 169608",
					contact: "+65 6222 3322",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				responseTime: "5-10 minutes",
			},
		},
		dailyMedicalServices: {
			clinics: [
				{
					name: "Raffles Medical Group",
					address:
						"585 North Bridge Rd, Raffles Hospital, Singapore 188770",
					contact: "+65 6311 1111",
				},
			],
			pharmacies: [
				{
					name: "Guardian Pharmacy",
					address: "ION Orchard, 2 Orchard Turn, Singapore 238801",
					contact: "+65 6509 4300",
				},
			],
			pricing: {
				generalConsultation: "$50-$150 SGD",
				specialistConsultation: "$150-$300 SGD",
			},
		},
		languageSupport: {
			languages: ["English", "Mandarin", "Malay", "Tamil"],
			translationServices: "Not commonly needed",
		},
		commonIllnesses: ["Dengue Fever", "Heat Exhaustion", "Common Cold"],
		diseasesAndVaccines: {
			localDiseases: ["Dengue Fever"],
			vaccinesRequired: [],
		},
		hygiene: {
			waterSafety: "Safe for drinking",
			foodSafety: "Very high standards",
		},
		insuranceAndLaws: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		healthRisksAndAdvice: {
			pollutionIndex: "Low",
			advice: "Use mosquito repellent to prevent bites.",
		},
		airQuality: 4.5,
	},
	{
		id: "6",
		cityName: "Bangkok",
		country: "Thailand",
		generalRating: 4.5,
		overview:
			"Bangkok is a vibrant city known for its bustling markets, rich culture, and accessible medical services.",
		emergencyInfo: {
			emergencyPhone: "1669",
			hospitals: [
				{
					name: "Bangkok Hospital",
					address:
						"2 Soi Soonvijai 7, New Petchburi Rd, Bangkok 10310, Thailand",
					contact: "+66 2310 3000",
					open24Hours: true,
				},
			],
			ambulanceService: {
				available: true,
				responseTime: "10-20 minutes",
			},
		},
		dailyMedicalServices: {
			clinics: [
				{
					name: "MedConsult Clinic",
					address:
						"Lake Rajada Office Complex, Bangkok 10110, Thailand",
					contact: "+66 2664 4330",
				},
			],
			pharmacies: [
				{
					name: "Boots Pharmacy",
					address: "Siam Paragon, Bangkok 10330, Thailand",
					contact: "+66 2610 9600",
				},
			],
			pricing: {
				generalConsultation: "฿1,000-฿3,000",
				specialistConsultation: "฿3,000-฿10,000",
			},
		},
		languageSupport: {
			languages: ["Thai", "English", "Chinese", "Japanese"],
			translationServices: "Available on request",
		},
		commonIllnesses: ["Dengue Fever", "Food Poisoning", "Heat Exhaustion"],
		diseasesAndVaccines: {
			localDiseases: ["Dengue Fever"],
			vaccinesRequired: ["Hepatitis A", "Typhoid"],
		},
		hygiene: {
			waterSafety: "Use bottled water",
			foodSafety: "Moderate standards",
		},
		insuranceAndLaws: {
			internationalAccepted: true,
			travelInsuranceRecommended: true,
		},
		healthRisksAndAdvice: {
			pollutionIndex: "Moderate",
			advice: "Avoid street food from unhygienic stalls.",
		},
		airQuality: 4.5,
	},
];
