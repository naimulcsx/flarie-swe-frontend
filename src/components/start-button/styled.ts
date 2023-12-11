import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ButtonStyled = styled.button(
  (): CSSObject => ({
    backgroundColor: '#34d399',
    color: '#022c22',
    position: 'absolute',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transitionProperty: 'background, color, transform, box-shadow',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',
    fontWeight: 'bold',
    top: gameConfig.startButton.offsetTop,
    '--game-box-width': `min(${gameConfig.container.maxWidth}px, 100vw, 100vh * ${gameConfig.container.ratio})`,
    '--font-size-ratio': `${gameConfig.startButton.fontSize} / ${gameConfig.container.maxWidth}`,
    '--button-height-ratio': `${gameConfig.startButton.height} / ${gameConfig.container.maxWidth}`,
    '--border-radius-ratio': `${gameConfig.startButton.borderRadius} / ${gameConfig.container.maxWidth}`,
    fontSize: `calc(var(--game-box-width) * var(--font-size-ratio))`,
    width: gameConfig.startButton.width,
    height: `calc(var(--game-box-width) * var(--button-height-ratio))`,
    borderRadius: `calc(var(--game-box-width) * var(--border-radius-ratio))`,
    ':hover': {
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
    },
    ':active': {
      transform: 'translateY(0px)',
    },
  }),
);
