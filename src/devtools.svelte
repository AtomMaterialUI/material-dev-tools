<script>
  import defaultStyle from 'data-text:./assets/default.css';
  import darkStyle from 'data-text:./assets/dark.css';
  import lightStyle from 'data-text:./assets/light.css';
  import hexRgb from 'hex-rgb';

  (async function(w, storage, panels, browserAction) {
    const SETTINGS = 'devtools-settings';
    const DEVTOOLS_THEME = 'devtools-theme';
    const DEVTOOLS_FONT = 'devtools-font';
    const DEVTOOLS_SIZE = 'devtools-size';
    const DEVTOOLS_CURRENT = 'devtools-current';
    const DEVTOOLS_ACCENT_COLOR = 'devtools-accent-color';
    const DEVTOOLS_SCROLLBARS = 'devtools-scrollbars';

    let css;

    const styleBuilder = {
      /**
       * Extract current theme colors and inject a style tag in the body
       * @param currentTheme
       * @param currentFontFamily
       * @param currentFontSize
       * @param accentColor
       */
      generateThemeVars(currentTheme, currentFontFamily = 'Menlo', currentFontSize = 11, accentColor = null) {
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
                  error
                } = currentTheme.colors;

          return this.styles({
            background,
            foreground,
            primary: text,
            selectBg,
            selectFg,
            button,
            disabled,
            contrast,
            second,
            table,
            border: border,
            highlight: hl,
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
            accentColor: accentColor
          });
        }
      },

      hexRGB(hex, alpha) {
        if (!hex) {
          return hexRgb('#000000', { format: 'css', alpha });
        }
        return hexRgb(hex.replace('\'', ''), { format: 'css', alpha });
      },

      /**
       * Extract the styles and create a css string to be injected to a style tag
       * @param background
       * @param foreground
       * @param primary
       * @param selectBg
       * @param selectFg
       * @param selectFg2
       * @param button
       * @param disabled
       * @param contrast
       * @param second
       * @param darkerBg
       * @param lighterBg
       * @param table
       * @param border
       * @param highlight
       * @param tree
       * @param notif
       * @param accent
       * @param accent2
       * @param accent3
       * @param excluded
       * @param comments
       * @param vars
       * @param links
       * @param functions
       * @param keywords
       * @param tags
       * @param errors
       * @param strings
       * @param operators
       * @param numbers
       * @param attributes
       * @param parameters
       * @param fontFamily
       * @param fontSize
       * @param accentColor
       * @returns {string}
       */
      styles({
               background,
               foreground,
               primary,
               selectBg,
               selectFg,
               selectFg2,
               button,
               disabled,
               contrast,
               second,
               darkerBg = contrast,
               lighterBg = second,
               table,
               border,
               highlight,
               tree,
               notif,
               accent,
               accent2 = accent,
               accent3 = accent,
               excluded,
               comments,
               vars,
               links,
               functions,
               keywords,
               tags,
               errors,
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
               accentColor
             }) {
        // language=CSS
        return `
          :root {
            --bg: ${background};
            --fg: ${foreground};
            --text: ${primary};
            --selBg: ${selectBg};
            --selFg: ${selectFg};
            --selFg2: ${selectFg2};
            --button: ${button};
            --disabled: ${disabled};
            --contrast: ${contrast};
            --second: ${second};
            --active: ${table};
            --border: ${border};
            --hl: ${highlight};
            --tree: ${tree};
            --notif: ${notif};
            --accent: ${accentColor || accent};
            --excluded: ${excluded};

            --trans-bg: ${this.hexRGB(background, 0.5)};
            --trans-fg: ${this.hexRGB(foreground, 0.5)};
            --trans-text: ${this.hexRGB(primary, 0.5)};
            --trans-selBg: ${this.hexRGB(selectBg, 0.5)};
            --trans-selFg: ${this.hexRGB(selectFg, 0.5)};
            --trans-selFg2: ${this.hexRGB(selectFg2, 0.5)};
            --trans-button: ${this.hexRGB(button, 0.5)};
            --trans-disabled: ${this.hexRGB(disabled, 0.5)};
            --trans-contrast: ${this.hexRGB(contrast, 0.5)};
            --trans-second: ${this.hexRGB(second, 0.5)};
            --trans-active: ${this.hexRGB(table, 0.5)};
            --trans-border: ${this.hexRGB(border, 0.5)};
            --trans-hl: ${this.hexRGB(highlight, 0.5)};
            --trans-tree: ${this.hexRGB(tree, 0.5)};
            --trans-notif: ${this.hexRGB(notif, 0.5)};
            --trans-accent: ${this.hexRGB(accentColor || accent, 0.5)};
            --trans-excluded: ${this.hexRGB(excluded, 0.5)};

            --tags: ${tags};
            --attributes: ${attributes};
            --comments: ${comments};
            --keywords: ${keywords};
            --errors: ${errors};
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
      }
    };

    function generateScrollbarsStyle(scrollbars = true) {
      if (!scrollbars) {
        return '';
      }
      // language=CSS
      return `
        :host ::-webkit-scrollbar,
        html ::-webkit-scrollbar,
        .-theme-with-dark-background ::-webkit-scrollbar,
        :host-context(.-theme-with-dark-background) ::-webkit-scrollbar {
          width: 10px !important;
          height: 10px !important;
          opacity: 0 !important;
          transition: opacity 0.4s ease;
        }
      `;
    }

    async function themeSetup() {
      storage.get(SETTINGS, async (object) => {
        const settings = object[SETTINGS];
        if (settings && settings.startsWith('{')) {
          const json = JSON.parse(settings);
          const size       = json[DEVTOOLS_SIZE],
                theme      = json[DEVTOOLS_THEME] || 'Oceanic',
                current    = json[DEVTOOLS_CURRENT],
                family     = json[DEVTOOLS_FONT],
                scrollbars = json[DEVTOOLS_SCROLLBARS] ?? true,
                accent     = json[DEVTOOLS_ACCENT_COLOR];

          // Variables
          let style = styleBuilder.generateThemeVars(current, family, size, accent);
          // Append scroll manually
          const scroll = generateScrollbarsStyle(scrollbars);

          panels.applyStyleSheet(style);
          browserAction.setIcon({ path: `assets/icons/${theme}.svg` }, () => {});

          // Apply theme
          if (current.dark) {
            panels.applyStyleSheet(lightStyle);
          }
          else {
            panels.applyStyleSheet(darkStyle);
          }
          // Apply def style
          panels.applyStyleSheet(scroll);
        }
        else {
          // Append scroll manually
          const scroll = generateScrollbarsStyle(true);
          panels.applyStyleSheet(defaultStyle);
          panels.applyStyleSheet(scroll);
        }
      });
    }

    await themeSetup();
    panels.setOpenResourceHandler(() => panels.applyStyleSheet(css));
  })(window, chrome.storage.sync, chrome.devtools.panels, chrome.action);

</script>
