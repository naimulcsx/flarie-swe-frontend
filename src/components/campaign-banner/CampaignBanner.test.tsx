import React from 'react';
import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useWindowResize } from '../../hooks/useWindowResize';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<CampaignBanner />);

    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(result.current).toEqual([1024, 768]);
    expect(parseFloat(getComputedStyle(campaignBanner).fontSize)).toBeCloseTo(16); // 16px;
    expect(parseFloat(getComputedStyle(campaignBanner).padding)).toBeCloseTo(12); // 12px;
    expect(parseFloat(getComputedStyle(campaignBanner).borderRadius)).toBeCloseTo(8); // 8px;
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<CampaignBanner />);

    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);

    // When viewport height is greater than viewport width - 250px x 600px
    window.innerWidth = 250;
    window.innerHeight = 600;
    fireEvent(window, new Event('resize'));

    expect(result.current).toEqual([250, 600]);
    expect(parseFloat(getComputedStyle(campaignBanner).fontSize)).toBeCloseTo(11.111); // 11.11px;
    expect(parseFloat(getComputedStyle(campaignBanner).padding)).toBeCloseTo(8.333); // 8.33px;
    expect(parseFloat(getComputedStyle(campaignBanner).borderRadius)).toBeCloseTo(5.555); // 5.55px;

    // When viewport height is less than viewport width: 250px x 200px
    window.innerWidth = 250;
    window.innerHeight = 200;
    fireEvent(window, new Event('resize'));
    expect(result.current).toEqual([250, 200]);

    expect(parseFloat(getComputedStyle(campaignBanner).fontSize)).toBeCloseTo(5); // 5px;
    expect(parseFloat(getComputedStyle(campaignBanner).padding)).toBeCloseTo(3.75); // 3.75px;
    expect(parseFloat(getComputedStyle(campaignBanner).borderRadius)).toBeCloseTo(2.5); // 2.5px;
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    const { result } = renderHook(() => useWindowResize());
    render(<CampaignBanner />);

    const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);

    // When viewport width is greater than viewport height: 1000px x 600px
    window.innerWidth = 1000;
    window.innerHeight = 600;
    fireEvent(window, new Event('resize'));
    expect(result.current).toEqual([1000, 600]);

    expect(parseFloat(getComputedStyle(campaignBanner).fontSize)).toBeCloseTo(15); // 15px;
    expect(parseFloat(getComputedStyle(campaignBanner).padding)).toBeCloseTo(11.25); // 11.25px;
    expect(parseFloat(getComputedStyle(campaignBanner).borderRadius)).toBeCloseTo(7.5); // 7.5px;

    // When viewport width is less than viewport height - 250px x 600px
    window.innerWidth = 250;
    window.innerHeight = 600;
    fireEvent(window, new Event('resize'));

    expect(result.current).toEqual([250, 600]);
    expect(parseFloat(getComputedStyle(campaignBanner).fontSize)).toBeCloseTo(11.111); // 11.11px;
    expect(parseFloat(getComputedStyle(campaignBanner).padding)).toBeCloseTo(8.333); // 8.33px;
    expect(parseFloat(getComputedStyle(campaignBanner).borderRadius)).toBeCloseTo(5.555); // 5.55px;
  });
});
