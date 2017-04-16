import { LopaPage } from './app.po';

describe('LOPA App', () => {
  let page: LopaPage;

  beforeEach(() => {
    page = new LopaPage();
  });

  it('should display heading saying LOPA', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('LOPA');
  });
});
