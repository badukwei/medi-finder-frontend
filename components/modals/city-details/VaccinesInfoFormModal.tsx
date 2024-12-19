'use client';
import React, { useState } from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from "@hello-pangea/dnd";
import { MdLibraryAddCheck, MdAddCircleOutline } from 'react-icons/md';
import Rating from '@mui/material/Rating';

const VaccinesInfoFormModal = () => {
    const [vaccinesRecommended, setVaccinesRecommended] = useState([
        {
            id: '1', 
            vaccine: 'Hepatitis A',
            importance: 4.5,
            isEditing: false,
        },
        {
            id: '2',
            vaccine: 'Hepatitis B',
            importance: 4.0,
            isEditing: false,
        },
    ]);

    const handleEditClick = (index: number) => {
        setVaccinesRecommended((prev) => prev.map((vaccine, i) => (i === index ? { ...vaccine, isEditing: true } : { ...vaccine, isEditing: false })));
    };

    const handleNameChange = (index: number, newName: string) => {
        setVaccinesRecommended((prev) => prev.map((vaccine, i) => (i === index ? { ...vaccine, vaccine: newName } : vaccine)));
    };

    const handleBlur = (index: number) => {
        setVaccinesRecommended((prev) => prev.map((vaccine, i) => (i === index ? { ...vaccine, isEditing: false } : vaccine)));
    };

    const handleDelete = (index: number) => {
        setVaccinesRecommended((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		if (!destination) return;

		const items = Array.from(vaccinesRecommended);
		const [reorderedItem] = items.splice(source.index, 1);
		items.splice(destination.index, 0, reorderedItem);

		setVaccinesRecommended(items);
	};

    return (
        <div className="modal modal-account fade" id="modalVaccinesInfoForm">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="flat-account">
                        <form onSubmit={(e) => e.preventDefault()} className="form-account">
                            <div className="title-box m-0 mb-2">
                                <h4>Vaccines Recommended</h4>
                                <span className="close-modal icon-close2 cursor-pointer" data-bs-dismiss="modal" />
                            </div>
                            <p className="mb-20">Write vaccines recommended for the city. This will be displayed on the city page.</p>
                            <div className="box">
                                <div className="wrap-review m-0 border-0 py-4">
                                    <DragDropContext onDragEnd={handleDragEnd}>
                                        <Droppable droppableId="vaccines-list">
                                            {(provided) => (
                                                <ul className="box-review" {...provided.droppableProps} ref={provided.innerRef}>
                                                    {vaccinesRecommended.map((vaccine, index) => (
                                                        <Draggable key={vaccine.id} draggableId={vaccine.id} index={index}>
                                                            {(provided) => (
                                                                <li className="list-review-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <div className="form-content w-100">
                                                                        <div className="box-head">
                                                                            <div className="d-flex align-items-center flex-wrap justify-content-between gap-8">
                                                                                <div className="d-flex align-items-center gap-2">
                                                                                    {vaccine.isEditing ? (
                                                                                        <div className="tag-input-container">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="tag-input form-control px-1 py-0 m-0"
                                                                                                placeholder="Change the name of the vaccine"
                                                                                                value={vaccine.vaccine}
                                                                                                onChange={(e) => handleNameChange(index, e.target.value)}
                                                                                                onBlur={() => handleBlur(index)}
                                                                                                autoFocus
                                                                                            />
                                                                                            <MdLibraryAddCheck size={20} onClick={() => handleBlur(index)} className="add-icon" />
                                                                                        </div>
                                                                                    ) : (
                                                                                        <h6>{vaccine.vaccine}</h6>
                                                                                    )}
                                                                                    {!vaccine.isEditing && <Rating value={vaccine.importance} readOnly />}
                                                                                </div>
                                                                                {!vaccine.isEditing && (
                                                                                    <div className="d-flex gap-2 align-items-center">
                                                                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                                                                                            Delete
                                                                                        </button>
                                                                                        <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(index)}>
                                                                                            Edit
                                                                                        </button>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                    <li className="list-review-item">
                                                        <div className="form-content w-100 position-relative">
                                                            <button type="button" className="tf-btn w-100 form-add-button">
                                                                <MdAddCircleOutline size={32} className="add-icon" />
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </div>
                            </div>
                            <button type="submit" className="tf-btn primary w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VaccinesInfoFormModal;
