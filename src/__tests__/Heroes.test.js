import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Heroes from "../components/Heroes";

test('Heroes List display testing', () => {
	const url = '/heroes'
	const { findAllByTestId } = render(
		<Heroes url={url} />
	)

	expect(findAllByTestId.length === 4);
})