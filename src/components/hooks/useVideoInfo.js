import {useEffect, useState} from 'react';
import { getVideoInfo } from '../../helpers/getVideoInfo';

export const useVideoInfo = ( videoID ) => {

    const [videoinfo, setVideoInfo] = useState([]);

    useEffect( () => {

        getVideoInfo( videoID )
            .then( info => {
                setVideoInfo(info);
            })
    }, [videoID]);

    return videoinfo;
}
