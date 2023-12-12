import React, { useEffect, useRef } from 'react';
import { BannerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';
import { useWindowResize } from '../../hooks/useWindowResize';
import { gameConfig } from '../../config/game-config';

export const CampaignBanner = () => {
  const [width, height] = useWindowResize();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      const boxWidth = Math.min(gameConfig.container.maxWidth, width, height * gameConfig.container.ratio);
      const bannerFontSize = (boxWidth * gameConfig.campaignBanner.fontSize) / gameConfig.container.maxWidth;
      const bannerPadding = (boxWidth * gameConfig.campaignBanner.padding) / gameConfig.container.maxWidth;
      const bannerBorderRadius = boxWidth * (gameConfig.campaignBanner.borderRadius / gameConfig.container.maxWidth);

      bannerRef.current.style.fontSize = bannerFontSize + 'px';
      bannerRef.current.style.padding = bannerPadding + 'px';
      bannerRef.current.style.borderRadius = bannerBorderRadius + 'px';
    }
  }, [width, height]);

  return (
    <BannerStyled ref={bannerRef} data-testid={TestElement.CAMPAIGN_BANNER}>
      Score 200 points and get 10% discount on your next mobile Recharge!
    </BannerStyled>
  );
};
