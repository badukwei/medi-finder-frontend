'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MdAddCircleOutline } from 'react-icons/md';

const TagInput = () => {
    const [tags, setTags] = useState(['Cold', 'Flu', 'Allergies']);
    const [input, setInput] = useState('');

    const addTag = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            if (input.trim() && !tags.includes(input.trim())) {
                setTags([...tags, input.trim()]);
            }
            setInput('');
        }
    };

    const handleAddTag = () => {
        if (input.trim() && !tags.includes(input.trim())) {
            setTags([...tags, input.trim()]);
        }
        setInput('');
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedTags = Array.from(tags);
        const [movedTag] = reorderedTags.splice(result.source.index, 1);
        reorderedTags.splice(result.destination.index, 0, movedTag);
        setTags(reorderedTags);
    };

    return (
        <>
            <div className="tag-container">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="tags" direction="horizontal">
                        {(provided) => (
                            <div className="tags" {...provided.droppableProps} ref={provided.innerRef}>
                                {tags.map((tag, index) => (
                                    <Draggable key={index} draggableId={`tag-${index}`} index={index}>
                                        {(provided) => (
                                            <div className="tag" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {tag}
                                                <button type="button" onClick={() => removeTag(index)} className="remove-tag">
                                                    &times;
                                                </button>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div className="tag-input-container">
                <input
                    type="text"
                    className="tag-input form-control px-1 py-0"
                    placeholder="Add an illness and press Enter"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={addTag}
                />
                <MdAddCircleOutline size={20} onClick={handleAddTag} className="add-icon" />
            </div>
        </>
    );
};

export default TagInput;
