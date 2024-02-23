import type { Store } from '~store/store';
import type { Colors, AppSettings } from '~types/types';
import hexRgb from 'hex-rgb';

/**
 * Service to build the styles
 */
export const styleBuilder = {
  /**
   * Extract current theme colors and inject a style tag in the body
   * @param currentTheme
   * @param currentFontFamily
   * @param currentFontSize
   * @param accentColor
   * @param scrollbars
   */
  applyTheme({ currentTheme, currentFontFamily = 'Menlo', currentFontSize = 14, currentAccentColor = null, scrollbars = true }: Partial<Store> = {}) {
    // Extract colors
    if (currentTheme && currentTheme.colors) {
      const {
        background,
        foreground,
        text,
        selectBg,
        selectFg,
        button,
        disabled,
        contrast,
        second,
        table,
        border,
        hl,
        tree,
        notif,
        accent,
        excluded,
        comments,
        vars,
        links,
        functions,
        keywords,
        tags,
        strings,
        operators,
        attributes,
        numbers,
        parameters,
        green,
        red,
        yellow,
        blue,
        purple,
        orange,
        cyan,
        white,
        gray,
        error,
      } = currentTheme.colors;

      // Create a style tag with css variables with colors
      const style = document.createElement('style');
      style.id = 'inject-style';
      style.innerHTML = this.styles({
        background,
        foreground,
        text,
        selectBg,
        selectFg,
        button,
        disabled,
        contrast,
        second,
        table,
        border,
        hl,
        tree,
        notif,
        accent,
        excluded,
        comments,
        vars,
        links,
        functions,
        keywords,
        tags,
        errors: tags,
        strings,
        operators,
        numbers,
        attributes,
        parameters,
        green,
        red,
        yellow,
        blue,
        purple,
        orange,
        cyan,
        white,
        gray,
        error,
        fontFamily: currentFontFamily,
        fontSize: currentFontSize,
        accentColor: currentAccentColor,
        scrollbars,
      });

      const styleElem = document.getElementById('inject-style');
      if (styleElem) {
        document.head.removeChild(styleElem);
      }
      document.head.appendChild(style);
    }
  },

  styles({
    background,
    foreground,
    text,
    selectBg,
    selectFg,
    selectFg2,
    button,
    disabled,
    contrast,
    second,
    table,
    border,
    hl,
    tree,
    notif,
    accent,
    excluded,
    comments,
    vars,
    links,
    functions,
    keywords,
    tags,
    strings,
    operators,
    numbers,
    attributes,
    parameters,
    green,
    red,
    yellow,
    blue,
    purple,
    orange,
    cyan,
    white,
    gray,
    error,
    fontFamily,
    fontSize,
    accentColor,
  }: Colors & AppSettings) {
    function hexRGB(hex: string, alpha: number) {
      if (!hex) {
        return hexRgb('#000000', { format: 'css', alpha });
      }
      return hexRgb(hex.replace("'", ''), { format: 'css', alpha });
    }

    // language=CSS
    return `
      :root {
        --bg: ${background};
        --fg: ${foreground};
        --text: ${text};
        --selBg: ${selectBg};
        --selFg: ${selectFg};
        --selFg2: ${selectFg2};
        --button: ${button};
        --disabled: ${disabled};
        --contrast: ${contrast};
        --second: ${second};
        --active: ${table};
        --border: ${border};
        --hl: ${hl};
        --tree: ${tree};
        --notif: ${notif};
        --accent: ${accentColor || accent};
        --excluded: ${excluded};

        --trans-bg: ${hexRGB(background, 0.5)};
        --trans-fg: ${hexRGB(foreground, 0.5)};
        --trans-text: ${hexRGB(text, 0.5)};
        --trans-selBg: ${hexRGB(selectBg, 0.5)};
        --trans-selFg: ${hexRGB(selectFg, 0.5)};
        --trans-selFg2: ${hexRGB(selectFg2, 0.5)};
        --trans-button: ${hexRGB(button, 0.5)};
        --trans-disabled: ${hexRGB(disabled, 0.5)};
        --trans-contrast: ${hexRGB(contrast, 0.5)};
        --trans-second: ${hexRGB(second, 0.5)};
        --trans-active: ${hexRGB(table, 0.5)};
        --trans-border: ${hexRGB(border, 0.5)};
        --trans-hl: ${hexRGB(hl, 0.5)};
        --trans-tree: ${hexRGB(tree, 0.5)};
        --trans-notif: ${hexRGB(notif, 0.5)};
        --trans-accent: ${hexRGB(accentColor || accent, 0.5)};
        --trans-excluded: ${hexRGB(excluded, 0.5)};

        --tags: ${tags};
        --attributes: ${attributes};
        --comments: ${comments};
        --keywords: ${keywords};
        --errors: ${error};
        --vars: ${vars};
        --operators: ${operators};
        --functions: ${functions};
        --strings: ${strings};
        --numbers: ${numbers};
        --links: ${links};
        --parameters: ${parameters};
        --green: ${green};
        --red: ${red};
        --yellow: ${yellow};
        --blue: ${blue};
        --purple: ${purple};
        --orange: ${orange};
        --cyan: ${cyan};
        --white: ${white};
        --gray: ${gray};
        --error: ${error};

        --ui-font-family: Roboto, Helvetica Neue, Arial, sans-serif;
        --font-family: ${fontFamily}, Menlo, Consolas, "Fira Code", monospace;
        --font-size: ${fontSize || 10}px;
      }
    `;
  },
};
