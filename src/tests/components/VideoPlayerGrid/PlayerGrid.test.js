import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PlayerGrid } from "../../../components/VideoPlayerGrid/PlayerGrid";
import { VideosContext } from "../../../components/providers/VideosProvider";

describe('Test for PlayerGrid', () => {
    
    test('iframe should render correctly', () => {
        
        render(
            <BrowserRouter>
                <VideosContext.Provider value={{}}>
                    <PlayerGrid />
                </VideosContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole("iframe")).toBeInTheDocument();
    });
});
