import { useEffect, useState } from 'react';
import { getBreeds } from '../../api/api';
import './allbreeds.css';
import {Toaster, toast} from 'react-hot-toast';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Allbreeds = () => {

    const [page, setPage] = useState(1);
    const [takeAllBreeds, setTakeAllBreeds] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(25);

    useEffect(() => {
        (async() => {
            const data = await getBreeds();
            const e = data.data;
            console.log(e);
            setTakeAllBreeds(e);
        })()
        console.log(takeAllBreeds);
    }, []);

    const back = () => {
        if(x > 0){
            setX(x - 25);
            setY(y - 25);
            setPage(page - 1);
            console.log(x, y);
        }else{
            setX(0);
            setY(25);
            console.log(x, y);
        }
    }

   const totalBreeds = takeAllBreeds.length;
    
    const next = () => {
        if(y < totalBreeds){
            setX(x + 25);
            setY(y + 25);
            setPage(page + 1);
            console.log(x, y);
        }else if(y >= totalBreeds){
            setX(x);
            setY(y);
            console.log(x, y);
        }else{
            toast("This is the last page!");
        }
    }

    const breedsForPages = takeAllBreeds.slice(x, y);

    return(
        <div className='back'>
        <Toaster/>
        <div className='e container'>
        {breedsForPages.map(t => <div className='all mx-auto m-3' key={t.id}>
        <LazyLoadImage
            key={t.id}
            src={t.url}
        />
        </div>)}
        </div>
        <button onClick={() => back()}> back </button>
        <span>{page}</span>
        <button onClick={() => next()}> next </button>
        </div>
    )
}

export default Allbreeds;