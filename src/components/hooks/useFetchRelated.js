import {useEffect, useState} from 'react';
import {getRelatedVideos} from '../../helpers/getRelatedVideos'

export const useFetchRelated = ( videoID ) => {

    const [relatedvid, setRelatedVid] = useState([]);

    useEffect( () => {

        getRelatedVideos( videoID )
            .then( vids => {
                setRelatedVid([...vids]);
            })
    }, [videoID]);

    return relatedvid;
}
