export interface MenuLink {
	href: string;
	label: string;
	isCurrent?: boolean; // Optional because not all links have `isCurrent`
}

export interface MenuItem {
	title: string;
	links: MenuLink[];
	isCurrent?: boolean; // Optional because not all items have `isCurrent`
}
