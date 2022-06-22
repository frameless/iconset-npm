import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconContactGemeente } from './utrecht-icon-contact-gemeente';

describe('UtrechtIconContactGemeente', () => {
  it('builds', () => {
    expect(new UtrechtIconContactGemeente()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconContactGemeente],
    html: '<utrecht-icon-contact-gemeente icon-title-id="1"></utrecht-icon-contact-gemeente>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
