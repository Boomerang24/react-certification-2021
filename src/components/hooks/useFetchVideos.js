import {useEffect, useState} from 'react';
import {getVideos} from '../../helpers/getVideos'

export const useFetchVideos = ( search ) => {

    const [fetch, setFetch] = useState([]);

    useEffect( () => {

        getVideos( search )
            .then( vids => {
                setFetch([...vids]);
            })
    }, [search]);

    return fetch;
}
