import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconTrouwenEnGeregistreerdPartnerschap } from './utrecht-icon-trouwen-en-geregistreerd-partnerschap';

describe('UtrechtIconTrouwenEnGeregistreerdPartnerschap', () => {
  it('builds', () => {
    expect(new UtrechtIconTrouwenEnGeregistreerdPartnerschap()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconTrouwenEnGeregistreerdPartnerschap],
    html: '<utrecht-icon-trouwen-en-geregistreerd-partnerschap icon-title-id="1"></utrecht-icon-trouwen-en-geregistreerd-partnerschap>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
