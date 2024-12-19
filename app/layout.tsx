"use client";

import { useEffect } from "react";
import "../public/scss/styles.scss";
import "photoswipe/dist/photoswipe.css";
import "react-modal-video/scss/modal-video.scss";
import "rc-slider/assets/index.css";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import BackToTop from "@/components/common/BackToTop";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	useEffect(() => {
		typeof document !== undefined
			? require("bootstrap/dist/js/bootstrap")
			: null;
	}, []);

	return (
		<html lang="en">
			<body className="body">
				<div id="wrapper">
					<div id="pagee" className="clearfix">
						{children}
					</div>
				</div>
				<LoginModal />
				<RegisterModal />
				<BackToTop />
			</body>
		</html>
	);
}
