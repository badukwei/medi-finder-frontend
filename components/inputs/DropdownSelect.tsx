"use client";
import { useEffect, useRef, useState } from "react";

const optionsDefault = ["Newest", "Oldest", "3 days"];

interface DropdownSelectProps {
	onChange: (value: string) => void;
	options: string[];
	defaultOption?: string;
	addtionalParentClass?: string;
}

const DropdownSelect = ({
	onChange = () => {},
	options = optionsDefault,
	defaultOption,
	addtionalParentClass = "",
}: DropdownSelectProps) => {
	const selectRef = useRef<HTMLDivElement | null>(null); // Correctly typed ref
	const [selected, setSelected] = useState("");

	const toggleDropdown = () => {
		if (selectRef.current) {
			selectRef.current.classList.toggle("open");
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				selectRef.current.classList.remove("open");
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className={`nice-select ${addtionalParentClass}`} ref={selectRef}>
			<span onClick={() => toggleDropdown()} className="current">
				{selected || defaultOption || options[0]}
			</span>
			<ul className="list">
				{options.map((elm, i) => (
					<li
						key={i}
						onClick={() => {
							setSelected(elm);
							onChange(elm);
							toggleDropdown();
						}}
						className={`option ${
							selected === elm ? "selected" : ""
						} text text-1`}
					>
						{elm}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropdownSelect;
