const apikey = process.env.REACT_APP_YOUTUBE_APIKEY;

export const getVideoInfo = async ( videoID ) => {

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${apikey}&maxResults=30&type=video`;
    const resp = await fetch (url);
    const {items} = await resp.json();

    //Lists videos with the SNIPPET Property
    const filterVideos = items.filter(item => item.snippet);

    const videoInfo = filterVideos.map( ({snippet, id}) => {

        return {
            publishedAt: snippet.publishedAt,
            channelTitle: snippet.channelTitle,
            title: snippet.localized.title,
            description: snippet.localized.description,
            videoID: id.videoId,
        }
    })

    return videoInfo;
};
