import { NgBuscamedPage } from './app.po';

describe('ng-buscamed App', () => {
  let page: NgBuscamedPage;

  beforeEach(() => {
    page = new NgBuscamedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
