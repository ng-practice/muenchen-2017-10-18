import { AppPage } from './app.po';
import { browser } from 'protractor';

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

  it('should navigate to details', () => {
    page.navigateTo();
    page.clickFirstDetailLink();

    expect(browser.getCurrentUrl()).toMatch(/books\/.+$/);
  });
});
