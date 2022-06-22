import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBrandgevaar } from './utrecht-icon-brandgevaar';

describe('UtrechtIconBrandgevaar', () => {
  it('builds', () => {
    expect(new UtrechtIconBrandgevaar()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBrandgevaar],
    html: '<utrecht-icon-brandgevaar icon-title-id="1"></utrecht-icon-brandgevaar>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
