import { Theme } from 'enums';

export const changeCssRootVariables = (theme: Theme): void => {
  const root = document.querySelector(':root') as HTMLElement;
  const components = ['body-bg', 'components-bg', 'card-bg', 'card-shadow', 'text-color'];

  components.forEach(component => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
};
