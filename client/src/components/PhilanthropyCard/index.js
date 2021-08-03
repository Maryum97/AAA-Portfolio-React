import React from 'react';

// import Phil-card data here as a separate component
import { PhilCardData } from './PhilCardData';

function PhilanthropyCard() {
    return (
        <div className='phil-card-grid'>
            <div className='phil-card-container'>
                <div>
                    {PhilCardData.map((data, index) => {
                        return (
                            <div
                                className='phil-card'
                                key={index}
                            >
                                <div>
                                    <img
                                        scr={data.src}
                                    >
                                    </img>
                                </div>
                                <h1>
                                    {data.title}
                                </h1>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PhilanthropyCard;