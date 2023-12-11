import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { GameBox } from './GameBox';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import { calc } from '../../utils/calc';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  let expectedWidth: string;
  let expectedHeight: string;
  let expectedBorderRadius: string;

  beforeEach(() => {
    expectedWidth = 'var(--game-box-width)';
    expectedHeight = 'var(--game-box-height)';
    expectedBorderRadius = 'calc(var(--game-box-width) * var(--border-radius-ratio))';
  });

  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    render(<GameBox />);

    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    const tree = renderer.create(<GameBox />).toJSON();

    expect(gameBox).toBeInTheDocument();
    expect(tree).toHaveStyleRule('width', expectedWidth);
    expect(tree).toHaveStyleRule('height', expectedHeight);
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const VIEWPORT_WIDTH = 1000,
      VIEWPORT_HEIGHT = 1000;

    const cssVars = {
      '--game-box-width': `min(${gameConfig.container.maxWidth}, ${VIEWPORT_WIDTH}, ${VIEWPORT_HEIGHT} * ${gameConfig.container.ratio})`,
      '--game-box-height': `min(${gameConfig.container.maxHeight}, ${VIEWPORT_HEIGHT}, ${VIEWPORT_WIDTH} / ${gameConfig.container.ratio})`,
      '--border-radius-ratio': `${gameConfig.container.borderRadius} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedWidth, cssVars))).toBeCloseTo(360); // 360px
    expect(parseFloat(calc(expectedHeight, cssVars))).toBeCloseTo(640); // 640px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(24); // 24px
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    render(<GameBox />);

    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    const tree = renderer.create(<GameBox />).toJSON();

    expect(gameBox).toBeInTheDocument();
    expect(tree).toHaveStyleRule('width', expectedWidth);
    expect(tree).toHaveStyleRule('height', expectedHeight);
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const VIEWPORT_WIDTH = 300,
      VIEWPORT_HEIGHT = 1000;

    const cssVars = {
      '--game-box-width': `min(${gameConfig.container.maxWidth}, ${VIEWPORT_WIDTH}, ${VIEWPORT_HEIGHT} * ${gameConfig.container.ratio})`,
      '--game-box-height': `min(${gameConfig.container.maxHeight}, ${VIEWPORT_HEIGHT}, ${VIEWPORT_WIDTH} / ${gameConfig.container.ratio})`,
      '--border-radius-ratio': `${gameConfig.container.borderRadius} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedWidth, cssVars))).toBeCloseTo(300); // 300px
    expect(parseFloat(calc(expectedHeight, cssVars))).toBeCloseTo(533.33); // 533.33px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(20); // 20px
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    render(<GameBox />);

    const gameBox = screen.getByTestId(TestElement.GAME_BOX);
    const tree = renderer.create(<GameBox />).toJSON();

    expect(gameBox).toBeInTheDocument();
    expect(tree).toHaveStyleRule('width', expectedWidth);
    expect(tree).toHaveStyleRule('height', expectedHeight);
    expect(tree).toHaveStyleRule('border-radius', expectedBorderRadius);

    /**
     * Calculate the value of css calc() expressions through JS
     */
    const VIEWPORT_WIDTH = 1000,
      VIEWPORT_HEIGHT = 600;

    const cssVars = {
      '--game-box-width': `min(${gameConfig.container.maxWidth}, ${VIEWPORT_WIDTH}, ${VIEWPORT_HEIGHT} * ${gameConfig.container.ratio})`,
      '--game-box-height': `min(${gameConfig.container.maxHeight}, ${VIEWPORT_HEIGHT}, ${VIEWPORT_WIDTH} / ${gameConfig.container.ratio})`,
      '--border-radius-ratio': `${gameConfig.container.borderRadius} / ${gameConfig.container.maxWidth}`,
    };

    expect(parseFloat(calc(expectedWidth, cssVars))).toBeCloseTo(337.5); // 337.5px
    expect(parseFloat(calc(expectedHeight, cssVars))).toBeCloseTo(600); // 600px
    expect(parseFloat(calc(expectedBorderRadius, cssVars))).toBeCloseTo(22.5); // 22.5px
  });
});
