
import {useEffect, useState} from 'react';
import {getRelatedVideos} from '../../helpers/getRelatedVideos'

export const useFetchRelated = ( videoID ) => {

    const [state, setState] = useState([]);

    useEffect( () => {

        getRelatedVideos( videoID )
            .then( vids => {
                setState([...vids]);
            })
    }, [videoID]);

    // console.log(state);

    return state;
}
