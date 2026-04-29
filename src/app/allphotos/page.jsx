import { phtosData } from '@/lib/data';
import PhotoCard from '@/components/PhotoCrad';
import Category from '@/components/Category';


const AllPhtosPage = async ({searchParams}) => {
    
    const {category} = await searchParams
    const photos = await phtosData()
    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos 
    return (
        <div className="w-9/12 mx-auto">
          <h1 className='text-2xl font-bold my-4'>All Photos</h1>
          <Category/>
          <div className='grid grid-cols-3 gap-2'>
                {filteredPhotos.map(photo =>  <PhotoCard photo={photo} key={photo.id}></PhotoCard>)}
            </div>
        </div>
    );
};

export default AllPhtosPage;