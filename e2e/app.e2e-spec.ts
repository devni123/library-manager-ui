import { LibraryManagerUiPage } from './app.po';

describe('library-manager-ui App', () => {
  let page: LibraryManagerUiPage;

  beforeEach(() => {
    page = new LibraryManagerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
