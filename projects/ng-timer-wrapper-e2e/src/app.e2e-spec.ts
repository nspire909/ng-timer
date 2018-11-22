import { AppPage } from './app.po';

describe('ng-timer-wrapper App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should do nothing', () => {
    page.navigateTo();
    expect('').toEqual('');
  });
});
