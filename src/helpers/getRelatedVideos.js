import { apikey, baseUrl } from "../envVariables";

export const getRelatedVideos = async ( videoID ) => {

    const url = `${baseUrl}search?part=snippet&relatedToVideoId=${videoID}&key=${apikey}&maxResults=30&type=video`;
    const resp = await fetch (url);
    const {items} = await resp.json();

    //Lists videos with the SNIPPET Property
    const filterVideos = items.filter(item => item.snippet);

    const videos = filterVideos.map( ({snippet, id}) => {

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
