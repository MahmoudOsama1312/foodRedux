import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './details.css';

export default function Details() {
    const [details, setDetails] = useState({});

    // params: it returns (id, mediaType) which I gave in the path and Link
    const params = useParams();

    useEffect(() => {
        getItemDetails();
    }, []);

    const getItemDetails = async () => {
        const { data } = await axios.get(
            `https://forkify-api.herokuapp.com/api/get?rId=${params.id}`
        );
        console.log(data.recipe);
        setDetails(data.recipe);
    };

    return (
        <>
            <div className="container py-5 details">
                <div className="row pt-5">
                    <div className="col-md-6 ">
                        <img src={details.image_url} className="img-fluid rounded-3" alt='img' />
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-center py-2'>{details.title}</h2>
                        {/* To fix this issue, you can add a check to see if details.ingredients exists before mapping over it.
                        You can use the logical
                        AND (&&) operator to conditionally render the ul element only if details.ingredients exists. */}

                        {details.ingredients && (
                            <ul>
                                {details.ingredients.map((ing,index) => (
                                    <li key={index} className='lead py-1'>{ing}</li>
                                ))}
                            </ul>
                        )}
                        {/* In this updated code, the details.ingredients array is only
                        mapped over if it exists, which prevents the error you encountered. */}
                    </div>
                </div>
            </div>
        </>
    );
}
