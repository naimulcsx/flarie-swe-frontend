import { calc as cssCalc } from '@csstools/css-calc';

/**
 * Replaces CSS variable references in a given CSS string with their corresponding values.
 *
 * @param {string} cssString - The input CSS string that may contain CSS variable references.
 * @param {Record<string, string>} vars - An object representing CSS variable names and their corresponding values.
 * @returns {string} - The modified CSS string with variable references replaced by their values.
 *
 * @example
 * const inputCSS = 'calc(var(--game-box-width) * var(--border-radius-ratio))';
 * const variables = { '--game-box-width': '360px', '--border-radius-ratio': '0.02222222222' };
 * const outputCSS = replaceWithValue(inputCSS, variables);
 *
 * // Result: 'calc(360px * 0.02222222222)'
 */

export function replaceWithActualValue(cssString: string, vars: Record<string, string>): string {
  for (const key in vars) {
    cssString = cssString.replace(`var(${key})`, vars[key]);
  }
  return cssString;
}

/**
 * Computes a CSS calc() expression programatically
 *
 * @param {string} cssString - The input CSS string for which we want to compute the value
 * @param {Record<string, string>} vars - An object representing CSS variable names and their corresponding values.
 * @returns string - The computed value of the calc() expression
 *
 * @example
 * const inputCSS = 'calc(var(--game-box-width) * var(--border-radius-ratio))';
 * const variables = { '--game-box-width': '360px', '--border-radius-ratio': '0.02222222222' };
 * const outputCSS = replaceWithValue(inputCSS, variables);
 *
 * // Result: '8px'
 */

export function calc(cssString: string, vars: Record<string, string>) {
  return cssCalc(replaceWithActualValue(cssString, vars));
}
