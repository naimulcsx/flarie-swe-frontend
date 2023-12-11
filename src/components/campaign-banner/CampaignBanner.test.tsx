import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import { calc } from '../../utils/calc';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', async () => {
    render(<CampaignBanner />);
    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const tree = renderer.create(<CampaignBanner />).toJSON();

    const expectedPadding = 'calc(var(--game-box-width) * var(--padding-ratio))';
    const expectedFontSize = 'calc(var(--game-box-width) * var(--font-size-ratio))';
    const expectedBorderRadius = 'calc(var(--game-box-width) * var(--border-radius-ratio))';

    expect(campaignBanner).toBeInTheDocument();
    expect(tree).toHaveStyleRule('top', gameConfig.campaignBanner.offsetTop);
    expect(tree).toHaveStyleRule('width', '80%');
    expect(tree).toHaveStyleRule('color', gameConfig.campaignBanner.textColor);
    expect(tree).toHaveStyleRule('background-color', gameConfig.campaignBanner.background);
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);
    expect(tree).toHaveStyleRule('padding', expectedPadding);
    expect(tree).toHaveStyleRule('font-size', expectedFontSize);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const cssVars = {
      '--game-box-width': `${gameConfig.container.maxWidth}px`,
      '--border-radius-ratio': `${gameConfig.campaignBanner.borderRadius / gameConfig.container.maxWidth}`,
      '--padding-ratio': `${gameConfig.campaignBanner.padding} / ${gameConfig.container.maxWidth}`,
      '--font-size-ratio': `${gameConfig.campaignBanner.fontSize} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedFontSize, cssVars))).toBeCloseTo(16); // 16px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(8); // 8px
    expect(parseFloat(calc(expectedPadding, cssVars))).toBeCloseTo(12); // 12px
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    render(<CampaignBanner />);
    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const tree = renderer.create(<CampaignBanner />).toJSON();

    const expectedPadding = 'calc(var(--game-box-width) * var(--padding-ratio))';
    const expectedFontSize = 'calc(var(--game-box-width) * var(--font-size-ratio))';
    const expectedBorderRadius = 'calc(var(--game-box-width) * var(--border-radius-ratio))';

    expect(campaignBanner).toBeInTheDocument();
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);
    expect(tree).toHaveStyleRule('padding', expectedPadding);
    expect(tree).toHaveStyleRule('font-size', expectedFontSize);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const VIEWPORT_WIDTH = 250;

    const cssVars = {
      '--game-box-width': `${VIEWPORT_WIDTH}px`,
      '--border-radius-ratio': `${gameConfig.campaignBanner.borderRadius / gameConfig.container.maxWidth}`,
      '--padding-ratio': `${gameConfig.campaignBanner.padding} / ${gameConfig.container.maxWidth}`,
      '--font-size-ratio': `${gameConfig.campaignBanner.fontSize} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedFontSize, cssVars))).toBeCloseTo(11.111); // 11.111px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(5.555); // 5.555px
    expect(parseFloat(calc(expectedPadding, cssVars))).toBeCloseTo(8.333); //  8.333px
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    render(<CampaignBanner />);
    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const tree = renderer.create(<CampaignBanner />).toJSON();

    const expectedPadding = 'calc(var(--game-box-width) * var(--padding-ratio))';
    const expectedFontSize = 'calc(var(--game-box-width) * var(--font-size-ratio))';
    const expectedBorderRadius = 'calc(var(--game-box-width) * var(--border-radius-ratio))';

    expect(campaignBanner).toBeInTheDocument();
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);
    expect(tree).toHaveStyleRule('padding', expectedPadding);
    expect(tree).toHaveStyleRule('font-size', expectedFontSize);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const VIEWPORT_HEIGHT = 600;
    const VIEWPORT_WIDTH = VIEWPORT_HEIGHT * gameConfig.container.ratio;

    const cssVars = {
      '--game-box-width': `${VIEWPORT_WIDTH}px`,
      '--border-radius-ratio': `${gameConfig.campaignBanner.borderRadius / gameConfig.container.maxWidth}`,
      '--padding-ratio': `${gameConfig.campaignBanner.padding} / ${gameConfig.container.maxWidth}`,
      '--font-size-ratio': `${gameConfig.campaignBanner.fontSize} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedFontSize, cssVars))).toBeCloseTo(15); // 15px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(7.5); // 7.5px
    expect(parseFloat(calc(expectedPadding, cssVars))).toBeCloseTo(11.25); // 11.25px
  });
});
