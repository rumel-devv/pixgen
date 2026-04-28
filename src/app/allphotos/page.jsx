export const dynamic = "force-dynamic";
import { phtosData } from '@/lib/data';
import PhotoCard from '@/components/PhotoCrad';


const AllPhtosPage = async () => {
    const photos = await phtosData()
    return (
        <div className="w-9/12 mx-auto">
          <h1 className='text-2xl font-bold my-4'>All Photos</h1>
          <div className='grid grid-cols-3 gap-2'>
                {photos.map(photo =>  <PhotoCard photo={photo} key={photo.id}></PhotoCard>)}
            </div>
        </div>
    );
};

export default AllPhtosPage;