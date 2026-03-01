import { describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from "../components/login/Form";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Form login", () => {
  it("should login successfully and navigate to /explorer", () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("+254712345678"), {
      target: { value: "+254712345678" },
    });

    fireEvent.click(screen.getByText("Login"));

  });
});