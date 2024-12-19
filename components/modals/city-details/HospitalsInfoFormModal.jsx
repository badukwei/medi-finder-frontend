// **舊程式碼: 使用 react-beautiful-dnd，問題出現在 Draggable 的 children 未使用 render prop**
// 問題:
// 1. Draggable 的 children 應該是 render prop，但卻直接傳遞了 JSX，導致 `children is not a function` 錯誤。
// 2. Draggable 的 `draggableId` 應該是字串，但程式中使用了數字。
// 3. 錯誤的 ref 使用和 draggableProps 導致拖拽行為無法正確綁定。

'use client';
import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import HospitalInfoForm from './HospitalInfoForm';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const HospitalsInfoFormModal = () => {
    const [hospitals, setHospitals] = useState([
        {
            id: "1",
            name: 'NewYork-Presbyterian Hospital',
            address: '525 E 68th St, New York, NY 10065',
            contact: '+1 212-746-5454',
            open24Hours: true,
            isEditing: false,
        },
        {
            id: "2",
            name: 'Mount Sinai Hospital',
            address: '1468 Madison Ave, New York, NY 10029',
            contact: '+1 212-241-6500',
            open24Hours: false,
            isEditing: false,
        },
    ]);

    const handleDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const reorderedHospitals = Array.from(hospitals);
        const [movedHospital] = reorderedHospitals.splice(source.index, 1);
        reorderedHospitals.splice(destination.index, 0, movedHospital);

        setHospitals(reorderedHospitals);
    };

    return (
        <div className="modal modal-account fade" id="modalHospitalsInfoForm">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="flat-account">
                        <form onSubmit={(e) => e.preventDefault()} className="form-account">
                            <div className="title-box m-0 mb-2">
                                <h4>Hospitals</h4>
                                <span className="close-modal icon-close2 cursor-pointer" data-bs-dismiss="modal" />
                            </div>
                            <p className="mb-20">Write hospitals in the city. This will be displayed on the city page.</p>
                            <div className="box">
                                <div className="wrap-review m-0 border-0 py-4">
                                    <DragDropContext onDragEnd={handleDragEnd}>
                                        <Droppable droppableId="hospitals-list">
                                            {(provided) => (
                                                <ul className="box-review" {...provided.droppableProps} ref={provided.innerRef}>
                                                    {hospitals.map((hospital, index) => (
                                                        <Draggable key={hospital.id} draggableId={hospital.id} index={index}>
                                                            {(provided) => (
                                                                <li className="list-review-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    {hospital.isEditing ? (
                                                                        <HospitalInfoForm
                                                                            hospital={hospital}
                                                                            onChange={(id, field, value) => setHospitals((prev) => prev.map((h) => (h.id === id ? { ...h, [field]: value } : h)))}
                                                                            onSave={(id) => setHospitals((prev) => prev.map((h) => (h.id === id ? { ...h, isEditing: false } : h)))}
                                                                        />
                                                                    ) : (
                                                                        <div className="form-content w-100 position-relative">
                                                                            <div className="box-head">
                                                                                <div className="d-flex align-items-center flex-wrap justify-content-between gap-8">
                                                                                    <h6>{hospital.name}</h6>
                                                                                    <p className="fw-5 m-0">{hospital.open24Hours ? 'Open 24 Hours' : 'Check the website'}</p>
                                                                                </div>
                                                                                <p className="mt-4 caption-2 text-variant-2">{hospital.address}</p>
                                                                            </div>
                                                                            <p>{hospital.contact}</p>
                                                                            <div className="position-absolute bottom-0 end-0 p-2 d-flex gap-2 pe-0">
                                                                                <button
                                                                                    className="btn btn-primary btn-sm"
                                                                                    onClick={() => setHospitals((prev) => prev.map((h) => (h.id === hospital.id ? { ...h, isEditing: true } : h)))}
                                                                                >
                                                                                    Edit
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-danger btn-sm"
                                                                                    onClick={() => setHospitals((prev) => prev.filter((h) => h.id !== hospital.id))}
                                                                                >
                                                                                    Delete
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
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

export default HospitalsInfoFormModal;
