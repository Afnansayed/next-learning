import React from 'react';

const featuresPage = ({params}) => {
    console.log(params.features[1])

    if(params.features.length ==  2)
    return <div>{params.features[1]}</div>
    if(params.features.length == 3)
       return <div>{params.features[2]}</div>    
    return (
        <div>
            Features Page
        </div>
    );
};

export default featuresPage;