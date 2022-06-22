import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGebruikerCentraal } from './utrecht-icon-gebruiker-centraal';

describe('UtrechtIconGebruikerCentraal', () => {
  it('builds', () => {
    expect(new UtrechtIconGebruikerCentraal()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGebruikerCentraal],
    html: '<utrecht-icon-gebruiker-centraal icon-title-id="1"></utrecht-icon-gebruiker-centraal>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
