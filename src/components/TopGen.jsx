import React from 'react';
import PhotoCrad from './PhotoCrad';
import { phtosData } from '@/lib/data';

const TopGen = async () => {
     const data = await phtosData()
    const photos = data.slice(0,9)
    return (
        <div className='w-9/12 mx-auto my-5'>
            <h1 className='text-2xl font-bold my-4'>Top Generation</h1>
            <div className='grid grid-cols-3 gap-2'>
                {photos.map(photo =>  <PhotoCrad  photo={photo} key={photo.id}></PhotoCrad>)}
            </div>
        </div>
    );
};

export default TopGen;