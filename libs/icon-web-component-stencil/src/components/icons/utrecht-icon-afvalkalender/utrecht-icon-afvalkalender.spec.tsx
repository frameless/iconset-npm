import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAfvalkalender } from './utrecht-icon-afvalkalender';

describe('UtrechtIconAfvalkalender', () => {
  it('builds', () => {
    expect(new UtrechtIconAfvalkalender()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAfvalkalender],
    html: '<utrecht-icon-afvalkalender icon-title-id="1"></utrecht-icon-afvalkalender>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
