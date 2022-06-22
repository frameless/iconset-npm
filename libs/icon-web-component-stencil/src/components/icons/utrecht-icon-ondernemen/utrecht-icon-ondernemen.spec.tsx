import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOndernemen } from './utrecht-icon-ondernemen';

describe('UtrechtIconOndernemen', () => {
  it('builds', () => {
    expect(new UtrechtIconOndernemen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOndernemen],
    html: '<utrecht-icon-ondernemen icon-title-id="1"></utrecht-icon-ondernemen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
