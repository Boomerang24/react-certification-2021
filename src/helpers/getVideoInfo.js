import { apikey, baseUrl } from "../envVariables";

export const getVideoInfo = async (videoID) => {
  const url = `${baseUrl}videos?part=snippet&id=${videoID}&key=${apikey}&maxResults=30&type=video`;
  const resp = await fetch(url);
  const { items } = await resp.json();

  //Lists videos with the SNIPPET Property
  const { snippet, id } = items.filter((item) => item.snippet)[0];

  const videoInfo = {
    publishedAt: snippet.publishedAt,
    channelTitle: snippet.channelTitle,
    title: snippet.localized.title,
    thumbnail: snippet.thumbnails.high.url,
    description: snippet.localized.description,
    videoID: id.videoId,
  };
  return videoInfo;
};
