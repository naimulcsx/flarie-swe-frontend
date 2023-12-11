import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#a5f3fc',
    boxShadow: '0 0 24px 8px #0284c7',
    '--game-box-width': `min(${gameConfig.container.maxWidth}px, 100vw, 100vh * ${gameConfig.container.ratio})`,
    '--game-box-height': `min(${gameConfig.container.maxHeight}px, 100vh, 100vw / ${gameConfig.container.ratio})`,
    '--border-radius-ratio': `${gameConfig.container.borderRadius} / ${gameConfig.container.maxWidth}`,
    width: 'var(--game-box-width)',
    height: 'var(--game-box-height)',
    borderRadius: `calc(var(--game-box-width) * var(--border-radius-ratio))`,
  }),
);
