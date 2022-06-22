import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconHondenbelasting } from './utrecht-icon-hondenbelasting';

describe('UtrechtIconHondenbelasting', () => {
  it('builds', () => {
    expect(new UtrechtIconHondenbelasting()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconHondenbelasting],
    html: '<utrecht-icon-hondenbelasting icon-title-id="1"></utrecht-icon-hondenbelasting>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
