import { render, screen,fireEvent } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

describe("Testes de renderização", () => {
    test("texto Lista Livros", () => {
        render(<ListaLivros />)
        const linkElement = screen.getByText(/lista de livros/i)
        expect(linkElement).toBeInTheDocument()
    })

    test("input para o título do livro", () => {
        render(<ListaLivros />)
        const elInput = screen.getByLabelText("Insira um livro:", {
            selector: "input"
        })
        expect(elInput).toBeInTheDocument()
    })

    test("botão Salvar", () => {
        render(<ListaLivros />);
        const elBotao = screen.getByTestId("salvar");
        expect(elBotao).toBeInTheDocument();
        
        const stringText = screen.getByText((content, element) => {
            return element.textContent === 'Salvar';
        });
        expect(stringText).toBeInTheDocument();
    });

    test("render options", () => {
        const { container } = render(<ListaLivros />)
        console.log(container.innerHTML)
    })
})
