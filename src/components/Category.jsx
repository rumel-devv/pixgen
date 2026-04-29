import { CategoryData } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
 
const photos = await CategoryData()


    return (
        <div className='mb-3 space-x-2'>
      {photos.map(category => <Link key={category.id } href={`?category=${category.name.toLowerCase()}`} ><button className='bg-purple-700 py-1 px-4 text-white rounded-md' > {category.name} </button></Link> )}
        </div>
    );
};

export default Category;