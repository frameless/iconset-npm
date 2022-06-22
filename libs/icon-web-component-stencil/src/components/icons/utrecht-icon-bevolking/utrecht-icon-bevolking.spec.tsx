import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBevolking } from './utrecht-icon-bevolking';

describe('UtrechtIconBevolking', () => {
  it('builds', () => {
    expect(new UtrechtIconBevolking()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBevolking],
    html: '<utrecht-icon-bevolking icon-title-id="1"></utrecht-icon-bevolking>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
