import { render, screen, fireEvent } from "@testing-library/react";
import ListaLivros from "./ListaLivros";


describe("Testes de comportamento", () => {
  test("click no botão Salvar", () => {
    render(<ListaLivros />);
    const botaoSavar = screen.getByTestId("salvar");
    expect(console.log(botaoSavar));
  });

  test("evento change e form submit", () => {
    const {container} = render(<ListaLivros />);
    expect(console.log(container.innerHTML));
  });

  test("evento change e form submit", () => {
    const {container} = render(<ListaLivros />);
    const input = screen.getByTestId("titulo");
    const [form] = container.querySelectorAll("form");
    fireEvent.change(input, {target: {value: "React JS"} });
    fireEvent.submit(form);
    expect(console.log(container.innerHTML));
  });
});














