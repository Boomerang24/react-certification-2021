const apikey = process.env.REACT_APP_YOUTUBE_APIKEY;

export const getVideos = async ( searchedVideo ) => {

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchedVideo}&key=${apikey}&maxResults=30&type=video`;
    const resp = await fetch (url);
    const {items} = await resp.json();
    console.log(resp);

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
