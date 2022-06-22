import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGebruikersvraag } from './utrecht-icon-gebruikersvraag';

describe('UtrechtIconGebruikersvraag', () => {
  it('builds', () => {
    expect(new UtrechtIconGebruikersvraag()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGebruikersvraag],
    html: '<utrecht-icon-gebruikersvraag icon-title-id="1"></utrecht-icon-gebruikersvraag>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
