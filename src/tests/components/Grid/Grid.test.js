import { render, screen } from "@testing-library/react";
import { Grid } from "../../../components/Grid/Grid";

describe('Test for Grid', () => {
    
    test('should render correctly', () => {
        
        render(
            <Grid />
        );

        expect(screen.getAllByAltText("SoyUnaImagen").length).toBe(25);
    });
});
