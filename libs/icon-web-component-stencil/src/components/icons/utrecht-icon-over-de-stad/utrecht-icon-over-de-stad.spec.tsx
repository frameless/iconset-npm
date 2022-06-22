import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOverDeStad } from './utrecht-icon-over-de-stad';

describe('UtrechtIconOverDeStad', () => {
  it('builds', () => {
    expect(new UtrechtIconOverDeStad()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOverDeStad],
    html: '<utrecht-icon-over-de-stad icon-title-id="1"></utrecht-icon-over-de-stad>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
