import React, { ReactNode, useEffect, useRef } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';
import { useWindowResize } from '../../hooks/useWindowResize';
import { gameConfig } from '../../config/game-config';

interface Props {
  children?: ReactNode;
}

export const GameBox = ({ children }: Props) => {
  const [width, height] = useWindowResize();
  const gameBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameBoxRef.current) {
      const boxWidth = Math.min(gameConfig.container.maxWidth, width, height * gameConfig.container.ratio);
      const boxHeight = Math.min(gameConfig.container.maxHeight, height, width / gameConfig.container.ratio);
      const boxBorderRadius = boxWidth * (gameConfig.container.borderRadius / gameConfig.container.maxWidth);

      gameBoxRef.current.style.width = boxWidth + 'px';
      gameBoxRef.current.style.height = boxHeight + 'px';
      gameBoxRef.current.style.borderRadius = boxBorderRadius + 'px';
    }
  }, [width, height]);

  return (
    <ContainerStyled ref={gameBoxRef} data-testid={TestElement.GAME_BOX}>
      {children}
    </ContainerStyled>
  );
};
