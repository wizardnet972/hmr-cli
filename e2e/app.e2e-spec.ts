import { HmrCliPage } from './app.po';

describe('hmr-cli App', () => {
  let page: HmrCliPage;

  beforeEach(() => {
    page = new HmrCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
