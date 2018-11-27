import { AppPage } from './app.po';

describe('ng-timer-docs App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should do nothing', () => {
    page.navigateTo();
    expect('').toEqual('');
  });
});
