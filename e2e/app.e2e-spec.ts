import { AppPage } from './app.po';

describe('muenchen App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title', () => {
    page.navigateTo();

    expect(page.getTitle())
      .toEqual('Bücher');
  });
});
