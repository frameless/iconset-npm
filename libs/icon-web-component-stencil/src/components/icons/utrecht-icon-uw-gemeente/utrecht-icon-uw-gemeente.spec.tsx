import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconUwGemeente } from './utrecht-icon-uw-gemeente';

describe('UtrechtIconUwGemeente', () => {
  it('builds', () => {
    expect(new UtrechtIconUwGemeente()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconUwGemeente],
    html: '<utrecht-icon-uw-gemeente icon-title-id="1"></utrecht-icon-uw-gemeente>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
