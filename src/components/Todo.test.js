import React from 'react';

import { render, waitForElement, fireEvent } from '@testing-library/react';

import Todo from './Todo';

describe('Tests for Todo component', () => {

  it('Shoul add new task when form has been submitted', async () => {

    const NEW_TASK = 'testing'

    const { getByTestId, getByText } = render(<Todo />);

    const fieldNode = await waitForElement(() => getByTestId('form-field'));

    fireEvent.change(fieldNode, { target: { value: NEW_TASK } });

    expect(fieldNode.value).toEqual(NEW_TASK);

    const btnNode = await waitForElement(() => getByTestId('form-btn'));

    fireEvent.click(btnNode);

    const tdNode = await waitForElement(() => getByText(NEW_TASK));

    expect(tdNode).toBeDefined();
  });
})