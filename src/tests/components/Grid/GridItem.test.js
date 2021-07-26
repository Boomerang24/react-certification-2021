import { render, screen } from "@testing-library/react";
import { GridItem } from "../../../components/Grid/GridItem";

describe('Test for GridItem', () => {
    
    test('should render correctly', () => {
        
        render(
            <GridItem 
                title="Toalla Del Mojado"
                thumbnail="SoyUnURL"
                channelTitle="Renders Perros"
            />
        )

        expect(screen.getByAltText("SoyUnaImagen")).toBeInTheDocument();
        expect(screen.getByText("Renders Perros")).toBeInTheDocument();
        expect(screen.getByRole("img").getAttribute('src')).toBe("SoyUnURL");
    });
})
