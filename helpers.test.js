import 'document-register-element';
import helpers from './helpers';

jest.mock('./helpers');


test('Then parse element path with selectorPath', () => {

  const spy = jest.spyOn(helpers, '$$');

  helpers.$();

  expect(spy).toHaveBeenCalled();
  
});