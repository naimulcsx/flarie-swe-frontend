import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    top: gameConfig.campaignBanner.offsetTop,
    width: gameConfig.campaignBanner.width,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,
    fontSize: 'calc(var(--game-box-width) * var(--font-size-ratio))',
    padding: 'calc(var(--game-box-width) * var(--padding-ratio))',
    borderRadius: 'calc(var(--game-box-width) * var(--border-radius-ratio))',
    '--game-box-width': `min(${gameConfig.container.maxWidth}px, 100vw, 100vh * ${gameConfig.container.ratio})`,
    '--font-size-ratio': `${gameConfig.campaignBanner.fontSize} / ${gameConfig.container.maxWidth}`,
    '--padding-ratio': `${gameConfig.campaignBanner.padding} / ${gameConfig.container.maxWidth}`,
    '--border-radius-ratio': `${gameConfig.campaignBanner.borderRadius} / ${gameConfig.container.maxWidth}`,
  }),
);
