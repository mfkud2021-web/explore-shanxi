// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { InquiryForm } from "./InquiryForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(/travel date/i), {
    target: { value: "2099-12-01" },
  });
  fireEvent.change(screen.getByLabelText(/number of passengers/i), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText(/starting point/i), {
    target: { value: "Datong South Station" },
  });
  fireEvent.change(screen.getByLabelText(/places to visit/i), {
    target: { value: "Yungang Grottoes, Hanging Temple" },
  });
  fireEvent.change(screen.getByLabelText(/your email or preferred contact/i), {
    target: { value: "traveler@example.com" },
  });
  fireEvent.click(screen.getByLabelText(/privacy notice/i));
}

describe("InquiryForm", () => {
  it("renders the inquiry form", () => {
    render(<InquiryForm />);
    expect(
      screen.getByText(/Request local transport information/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/travel date/i)).toBeInTheDocument();
  });

  it("shows an honest notice and disables submit when the service is not configured", () => {
    render(<InquiryForm serviceConfigured={false} />);
    expect(
      screen.getByText(/inquiry service is not configured yet/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /inquiry service unavailable/i }),
    ).toBeDisabled();
  });

  it("shows a success message with a reference on successful submit", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ reference: "ABC12345" }), {
        status: 201,
        headers: { "content-type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<InquiryForm />);
    fillValidForm();
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => {
      expect(screen.getByText(/Inquiry sent successfully/i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("shows an error message when the API rejects the submission", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: "Invalid inquiry." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<InquiryForm />);
    fillValidForm();
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => {
      expect(screen.getByText(/Invalid inquiry/i)).toBeInTheDocument();
    });
  });

  it("prevents duplicate submission while a request is in flight", async () => {
    let resolveFetch!: (value: Response) => void;
    const fetchMock = vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveFetch = resolve;
        }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const { container } = render(<InquiryForm />);
    fillValidForm();
    const form = container.querySelector("form")!;
    fireEvent.submit(form);
    fireEvent.submit(form);

    expect(fetchMock).toHaveBeenCalledTimes(1);

    resolveFetch(
      new Response(JSON.stringify({ reference: "ABC12345" }), {
        status: 201,
        headers: { "content-type": "application/json" },
      }),
    );
    await waitFor(() => {
      expect(screen.getByText(/Inquiry sent successfully/i)).toBeInTheDocument();
    });
  });
});
