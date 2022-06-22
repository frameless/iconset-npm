import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconUittreksel } from './utrecht-icon-uittreksel';

describe('UtrechtIconUittreksel', () => {
  it('builds', () => {
    expect(new UtrechtIconUittreksel()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconUittreksel],
    html: '<utrecht-icon-uittreksel icon-title-id="1"></utrecht-icon-uittreksel>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
