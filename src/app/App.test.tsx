import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { TestElement } from '../enums/TestElement';

test('renders necessary components', () => {
  render(<App />);

  const gameBox = screen.getByTestId(TestElement.GAME_BOX);
  const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
  const startButton = screen.getByTestId(TestElement.START_BUTTON);

  expect(gameBox).toBeInTheDocument();
  expect(campaignBanner).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
});
