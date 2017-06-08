import { LopaPage } from './app.po';

describe('LOPA App', () => {
  let page: LopaPage;

  beforeEach(() => {
    page = new LopaPage();
  });

  it('should display heading saying LOPA', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('LOPA'))
      .then(done, done.fail);
  });
});
