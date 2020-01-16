import * as helpers from './helpers';

const appSelector = "#app";

export const $ = (selectorPath) => {
  selectorPath = selectorPath
    ? `${appSelector} ${selectorPath}`
    : appSelector;

  return helpers.$$(selectorPath);
};

export const $$ = (selectorPath) => {
  console.log("Deve chamar do mock, não daqui");
};