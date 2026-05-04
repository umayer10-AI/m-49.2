import React from 'react';

const page = async () => {

    const res = await fetch("http://localhost:8000/about")
    const data = await res.json()
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold'>About: </h2>
        </div>
    );
};

export default page;