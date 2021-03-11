import React from 'react';

const Country = (props) => {
    const {name} =props.Country;
    return (
        <div>
            <h5>Country: {name} </h5>
        </div>
    );
};

export default Country;