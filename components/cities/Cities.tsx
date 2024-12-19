"use client";
import React from "react";
import DropdownSelect from "../inputs/DropdownSelect";
import Pagination from "../common/list/Pagination";
import { cities } from "@/data/cities";
import CityCard from "./CityCard";
import AddCard from "./AddCard";

const Cities = () => {
	return (
		<section className="flat-section flat-recommended flat-sidebar">
			<div className="container">
                <div className="box-title-listing">
                    <div className="box-filter-tab">
                        <DropdownSelect
                            defaultOption="Show: 8"
                            onChange={() => {}}
                            addtionalParentClass="list-page"
                            options={['Show: 8', 'Show: 10', 'Show: 12']}
                        />

                        <DropdownSelect
                            defaultOption="Sort by (Default)"
                            onChange={() => {}}
                            addtionalParentClass="list-sort"
                            options={['Sort by (Default)', 'Price Ascending', 'Price Descending']}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="flat-animate-tab">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="gridLayout" role="tabpanel">
                                <div className="row">
                                    {cities.map((city, i) => (
                                        <CityCard key={i} {...city} link={`city-details/${city.id}`} imageUrl="/images/cities/image.png" />
                                    ))}
                                    <AddCard />
                                </div>
                                <ul className="wd-navigation mt-20">
                                    <Pagination currentPage={1} itemLength={cities.length} itemPerPage={8} setPage={() => {}} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cities;
