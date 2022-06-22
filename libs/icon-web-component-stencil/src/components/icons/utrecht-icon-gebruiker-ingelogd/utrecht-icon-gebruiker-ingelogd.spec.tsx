import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGebruikerIngelogd } from './utrecht-icon-gebruiker-ingelogd';

describe('UtrechtIconGebruikerIngelogd', () => {
  it('builds', () => {
    expect(new UtrechtIconGebruikerIngelogd()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGebruikerIngelogd],
    html: '<utrecht-icon-gebruiker-ingelogd icon-title-id="1"></utrecht-icon-gebruiker-ingelogd>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
