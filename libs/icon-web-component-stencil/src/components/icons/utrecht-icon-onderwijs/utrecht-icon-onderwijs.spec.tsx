import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOnderwijs } from './utrecht-icon-onderwijs';

describe('UtrechtIconOnderwijs', () => {
  it('builds', () => {
    expect(new UtrechtIconOnderwijs()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOnderwijs],
    html: '<utrecht-icon-onderwijs icon-title-id="1"></utrecht-icon-onderwijs>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
