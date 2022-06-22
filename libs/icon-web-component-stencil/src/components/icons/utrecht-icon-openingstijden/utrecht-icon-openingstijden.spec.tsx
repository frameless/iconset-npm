import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOpeningstijden } from './utrecht-icon-openingstijden';

describe('UtrechtIconOpeningstijden', () => {
  it('builds', () => {
    expect(new UtrechtIconOpeningstijden()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOpeningstijden],
    html: '<utrecht-icon-openingstijden icon-title-id="1"></utrecht-icon-openingstijden>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
