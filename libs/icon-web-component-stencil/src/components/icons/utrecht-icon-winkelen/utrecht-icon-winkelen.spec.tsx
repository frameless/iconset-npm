import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWinkelen } from './utrecht-icon-winkelen';

describe('UtrechtIconWinkelen', () => {
  it('builds', () => {
    expect(new UtrechtIconWinkelen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWinkelen],
    html: '<utrecht-icon-winkelen icon-title-id="1"></utrecht-icon-winkelen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
