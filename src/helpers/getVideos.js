import { apikey, baseUrl } from "../envVariables";


export const getVideos = async ( searchedVideo ) => {

    const url = `${baseUrl}search?part=snippet&q=${searchedVideo}&key=${apikey}&maxResults=30&type=video`;
    const resp = await fetch (url);
    const {items} = await resp.json();

    const videos = items.map( ({snippet, id}) => {
        
        return {
            publishedAt: snippet.publishedAt,
            title: snippet.title,
            thumbnail: snippet.thumbnails.high.url,
            channelTitle: snippet.channelTitle,
            videoID: id.videoId,
        }
    })

    return videos;
};
