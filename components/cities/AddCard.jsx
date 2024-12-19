import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { MdAddTask } from 'react-icons/md';

const AddCard = () => {
    return (
        <div className="col-md-4">
            <div className="homelengo-box">
                <div className="archive-top">
                    <div className="images-group cursor-pointer">
                        <div className="images-style position-relative ">
                            <Image className="imageUrl opacity-15" alt="img" src="/images/cities/image.png" width={615} height={405} />

                            <MdAddTask size={48} className="add-icon position-absolute top-50 start-50 translate-middle text-variant-1" />
                        </div>
                    </div>
                </div>
                <div className="archive-bottom">
                    <div className="content-top">
                        <h6 className="text-capitalize">
                            <div className="link cursor-pointer">Add New City</div>
                        </h6>
                        <p className="mt-4">Click the add icon to add a new city. Thanks for your support!</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Rating name="half-rating" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;
