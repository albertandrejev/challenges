/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { randomString } from "../../../utils/test/random";
import Layout, { ConsentValue, EMAIL_INPUT_FIELD, NAME_INPUT_FIELD } from "./Layout";

const consents: ConsentValue[] = [
  { name: "news", label: "Receive newsletter" },
  { name: "ads", label: "Be shown targeted ads" },
  { name: "stats", label: "Contribute to anonymous usage statistics" },
];

describe("Collect route. Internal Layout", () => {
  it("should submit form", () => {
    const submitMock = jest.fn();
    const { container, getByLabelText } = render(<Layout onSubmit={submitMock} consents={consents} />);

    const name = randomString(10);
    const nameElement = container.querySelector(`[name='${NAME_INPUT_FIELD}']`);
    expect(nameElement).toBeInTheDocument();
    fireEvent.change(nameElement!, {
      target: { value: name },
    });

    const email = `${randomString(10)}@${randomString(5)}.com`;
    const emailElement = container.querySelector(`[name='${EMAIL_INPUT_FIELD}']`);
    expect(emailElement).toBeInTheDocument();
    fireEvent.change(emailElement!, {
      target: { value: email },
    });

    fireEvent.click(getByLabelText(/receive newsletter/i));

    fireEvent.click(getByLabelText(/be shown targeted ads/i));

    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
    fireEvent.submit(form!);

    expect(submitMock).toBeCalledWith(
      { nameField: name, emailField: email, ads: true, news: true },
      expect.anything(),
      expect.anything(),
    );
  });
});
