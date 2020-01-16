const appSelector = "#app";

export const $ = (selectorPath) => {
  selectorPath = selectorPath
    ? `${appSelector} ${selectorPath}`
    : appSelector;

  return $$(selectorPath);
};

export const $$ = (selectorPath) => {
  console.log("Deve chamar do mock, não daqui");
};

export default {
  $,
  $$
};