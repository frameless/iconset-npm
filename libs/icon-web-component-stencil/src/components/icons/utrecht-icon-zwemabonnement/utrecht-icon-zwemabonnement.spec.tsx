import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconZwemabonnement } from './utrecht-icon-zwemabonnement';

describe('UtrechtIconZwemabonnement', () => {
  it('builds', () => {
    expect(new UtrechtIconZwemabonnement()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconZwemabonnement],
    html: '<utrecht-icon-zwemabonnement icon-title-id="1"></utrecht-icon-zwemabonnement>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
