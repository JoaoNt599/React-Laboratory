import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

describe("Outro teste aleatório", () => {
    test("renderização do texto random", () => {
        render(<ListaLivros />);
        const linkElement = screen.getByText(/random/i);
        expect(linkElement).toBeInTheDocument();
      
        const stringText = screen.getByText((content, element) => {
            return element.textContent === 'random';
        });
        expect(stringText).toBeInTheDocument();
    });
});