import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOverDeGemeente } from './utrecht-icon-over-de-gemeente';

describe('UtrechtIconOverDeGemeente', () => {
  it('builds', () => {
    expect(new UtrechtIconOverDeGemeente()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOverDeGemeente],
    html: '<utrecht-icon-over-de-gemeente icon-title-id="1"></utrecht-icon-over-de-gemeente>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
