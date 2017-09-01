import { MyFlashSalePage } from './app.po';

describe('my-flash-sale App', () => {
  let page: MyFlashSalePage;

  beforeEach(() => {
    page = new MyFlashSalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
