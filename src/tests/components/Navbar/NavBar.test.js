import { render, screen } from "@testing-library/react";
import { NavBar } from "../../../components/NavBar/NavBar";
import { VideosProvider } from "../../../components/providers/VideosProvider";

describe('Test for Navbar', () => {
    
    test('should render correctly', () => {
        
        render(
            <VideosProvider>
                <NavBar />
            </VideosProvider>
        );

        expect(screen.getByTestId('navbar-container')).toBeInTheDocument();
    });
});
