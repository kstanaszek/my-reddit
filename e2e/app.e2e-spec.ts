import { MyRedditPage } from './app.po';

describe('my-reddit App', () => {
  let page: MyRedditPage;

  beforeEach(() => {
    page = new MyRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
