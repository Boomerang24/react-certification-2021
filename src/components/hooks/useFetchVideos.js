
import {useEffect, useState} from 'react';
import {getVideos} from '../../helpers/getVideos'

export const useFetchVideos = ( search ) => {

    const [state, setState] = useState([]);

    useEffect( () => {

        getVideos( search )
            .then( vids => {
                setState([...vids]);
            })
    }, [search]);

    // console.log(state);

    return state;
}
