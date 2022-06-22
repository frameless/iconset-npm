import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGemeenteraad } from './utrecht-icon-gemeenteraad';

describe('UtrechtIconGemeenteraad', () => {
  it('builds', () => {
    expect(new UtrechtIconGemeenteraad()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGemeenteraad],
    html: '<utrecht-icon-gemeenteraad icon-title-id="1"></utrecht-icon-gemeenteraad>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
