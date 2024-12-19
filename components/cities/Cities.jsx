"use client";
import React from "react";
import DropdownSelect from "../inputs/DropdownSelect";
import Pagination from "../common/list/Pagination";
import { cities } from "@/data/cities";
import CityCard from "./CityCard";
import AddCard from "./AddCard";

export default function Cities() {
	return (
        <section className="flat-section flat-recommended flat-sidebar">
            <div className="container">
                <div className="box-title-listing">
                    {/* Add Search Bar and List Changer */}
                    <div className="box-filter-tab">
                        <DropdownSelect
                            onChange={(value) => {
                                const match = value.match(/\d+/); // Match the digits in the value
                                if (match) {
                                    dispatch({
                                        type: 'SET_ITEM_PER_PAGE',
                                        payload: parseInt(match[0], 10),
                                    });

                                    dispatch({
                                        type: 'SET_CURRENT_PAGE',
                                        payload: 1,
                                    });
                                }
                            }}
                            addtionalParentClass="list-page"
                            options={['Show: 8', 'Show: 10', 'Show: 12']}
                        />

                        <DropdownSelect
                            onChange={(value) =>
                                dispatch({
                                    type: 'SET_SORTING_OPTION',
                                    payload: value,
                                })
                            }
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
                                    <Pagination />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
