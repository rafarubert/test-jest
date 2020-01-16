import * as helpers from './helpers';

describe('Test', () => {
  let $$Orig;

  beforeAll(() => {
    $$Orig = helpers.$$;
    helpers.$$ = jest.fn( () => { console.log("Chamou do fake")});
  });

  afterAll(() => {
    helpers.$$ = $$Orig;
  });

  it('test', () => {
    helpers.$();

    expect(helpers.$$).toHaveBeenCalled();
  });
});