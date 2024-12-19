"use client";
import React, { ReactNode } from "react";
import DescriptionFormModal from "@/components/modals/city-details/DescriptionFormModal";
import EmergencyInfoFormModal from "@/components/modals/city-details/EmergencyInfoFormModal";
import InsuranceInfoFormModal from "@/components/modals/city-details/InsuranceInfoFormModal";
import CommonIllnessInfoFormModal from "@/components/modals/city-details/CommonIllnessInfoFormModal";
import VaccinesInfoFormModal from "@/components/modals/city-details/VaccinesInfoFormModal";
import HospitalsInfoFormModal from "@/components/modals/city-details/HospitalsInfoFormModal";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			{children}
			<DescriptionFormModal />
			<EmergencyInfoFormModal />
			<InsuranceInfoFormModal />
			<CommonIllnessInfoFormModal />
			<VaccinesInfoFormModal />
			<HospitalsInfoFormModal />
		</>
	);
};

export default Layout;
