import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAfval } from './utrecht-icon-afval';

describe('UtrechtIconAfval', () => {
  it('builds', () => {
    expect(new UtrechtIconAfval()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAfval],
    html: '<utrecht-icon-afval icon-title-id="1"></utrecht-icon-afval>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
