import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconRijbewijs } from './utrecht-icon-rijbewijs';

describe('UtrechtIconRijbewijs', () => {
  it('builds', () => {
    expect(new UtrechtIconRijbewijs()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconRijbewijs],
    html: '<utrecht-icon-rijbewijs icon-title-id="1"></utrecht-icon-rijbewijs>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
