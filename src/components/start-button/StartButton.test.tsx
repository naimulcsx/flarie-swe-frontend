import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', async () => {
    render(<StartButton />);
    const startButton = screen.getByTestId(TestElement.START_BUTTON);

    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent(gameConfig.startButton.buttonText);
  });

  it('SHOULD Render StartButton with click event', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<StartButton />);
    const startButton = screen.getByTestId(TestElement.START_BUTTON);
    fireEvent.click(startButton);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(
      'You will learn to develop JS games after you join with us! For now, best of luck!',
    );
  });
});
