import { render, screen } from "@testing-library/react";
import { NavBar } from "../../../components/NavBar/NavBar";

describe('Test for Navbar', () => {
    
    test('should render correctly', () => {
        
        render(
            <NavBar />
        );

        expect(screen.getByTestId('navbar-container')).toBeInTheDocument();
    });
});
