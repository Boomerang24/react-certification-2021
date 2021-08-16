
import {useEffect, useState} from 'react';
import { getVideoInfo } from '../../helpers/getVideoInfo';

export const useVideoInfo = ( videoID ) => {

    const [state, setState] = useState([]);

    useEffect( () => {

        getVideoInfo( videoID )
            .then( info => {
                setState([...info]);
            })
    }, [videoID]);

    // console.log(state);

    return state;
}
