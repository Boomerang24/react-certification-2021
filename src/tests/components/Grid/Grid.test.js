import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../../../components/Grid/Grid";
import { VideosContext } from "../../../components/providers/VideosProvider";

describe('Test for Grid', () => {
    
    test('should render correctly', () => {
        
        render(
            <BrowserRouter>
                <VideosContext.Provider value={{
                    videosList: [{
                        publishedAt: "hoy",
                        title: "Dross",
                        thumbnail: "SoyUnPreview",
                        channelTitle: "Magnates",
                        videoID: "s7d8f7s",
                    }]
                }}>
                    <Grid />
                </VideosContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getAllByAltText("videoPreview").length).toBe(1);
    });
});
