import { LopaPage } from './app.po';

describe('LOPA App', () => {
  let page: LopaPage;

  beforeEach(() => {
    page = new LopaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
