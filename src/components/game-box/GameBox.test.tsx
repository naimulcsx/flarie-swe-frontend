import React from 'react';
import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useWindowResize } from '../../hooks/useWindowResize';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<GameBox />);
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);

    window.innerHeight = 1000;
    window.innerWidth = 1000;
    fireEvent(window, new Event('resize'));

    expect(result.current).toEqual([1000, 1000]);
    expect(parseFloat(getComputedStyle(gameBox).width)).toBeCloseTo(360); // 360px
    expect(parseFloat(getComputedStyle(gameBox).height)).toBeCloseTo(640); // 640px
    expect(parseFloat(getComputedStyle(gameBox).borderRadius)).toBeCloseTo(24); // 24px
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<GameBox />);
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);

    window.innerWidth = 300;
    window.innerHeight = 1000;
    fireEvent(window, new Event('resize'));

    expect(result.current).toEqual([300, 1000]);
    expect(parseFloat(getComputedStyle(gameBox).width)).toBeCloseTo(300.0); // 300px
    expect(parseFloat(getComputedStyle(gameBox).height)).toBeCloseTo(533.333); // 533.333px
    expect(parseFloat(getComputedStyle(gameBox).borderRadius)).toBeCloseTo(20); // 20px
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<GameBox />);
    const gameBox = screen.getByTestId(TestElement.GAME_BOX);

    window.innerWidth = 1000;
    window.innerHeight = 600;
    fireEvent(window, new Event('resize'));

    expect(result.current).toEqual([1000, 600]);
    expect(parseFloat(getComputedStyle(gameBox).width)).toBeCloseTo(337.5); // 337px
    expect(parseFloat(getComputedStyle(gameBox).height)).toBeCloseTo(600); // 600px
    expect(parseFloat(getComputedStyle(gameBox).borderRadius)).toBeCloseTo(22.5); // 22.5px
  });
});
