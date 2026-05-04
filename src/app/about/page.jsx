import React from 'react';

const page = async () => {

    const res = await fetch("http://localhost:8000/about")
    const data = await res.json()
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold'>About: {data.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map(v => (
                        <div key={v.id} className='border p-3 rounded-2xl'>
                            <h2 className='text-green-400 text-2xl font-bold'>{v.name}</h2>
                            <h2 className='text-yello-400 text-2xl font-bold'>{v.email}</h2>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default page;