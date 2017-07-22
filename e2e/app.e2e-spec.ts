import { TuPreferesPage } from './app.po';

describe('tu-preferes App', () => {
  let page: TuPreferesPage;

  beforeEach(() => {
    page = new TuPreferesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
