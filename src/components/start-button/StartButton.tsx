import React, { useEffect, useRef } from 'react';
import { ButtonStyled } from './styled';
import { gameConfig } from '../../config/game-config';
import { TestElement } from '../../enums/TestElement';
import { useWindowResize } from '../../hooks/useWindowResize';

export const StartButton = () => {
  const [width, height] = useWindowResize();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onStartGame = () => {
    alert('You will learn to develop JS games after you join with us! For now, best of luck!');
  };

  useEffect(() => {
    if (buttonRef.current) {
      const boxWidth = Math.min(gameConfig.container.maxWidth, width, height * gameConfig.container.ratio);
      const buttonHeight = (boxWidth * gameConfig.startButton.height) / gameConfig.container.maxWidth;
      const buttonFontSize = (boxWidth * gameConfig.startButton.fontSize) / gameConfig.container.maxWidth;
      const buttonBorderRadius = (boxWidth * gameConfig.startButton.borderRadius) / gameConfig.container.maxWidth;

      buttonRef.current.style.height = buttonHeight + 'px';
      buttonRef.current.style.fontSize = buttonFontSize + 'px';
      buttonRef.current.style.borderRadius = buttonBorderRadius + 'px';
    }
  }, [width, height]);

  return (
    <ButtonStyled ref={buttonRef} data-testid={TestElement.START_BUTTON} onClick={onStartGame}>
      {gameConfig.startButton.buttonText}
    </ButtonStyled>
  );
};
