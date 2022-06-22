import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWandelen } from './utrecht-icon-wandelen';

describe('UtrechtIconWandelen', () => {
  it('builds', () => {
    expect(new UtrechtIconWandelen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWandelen],
    html: '<utrecht-icon-wandelen icon-title-id="1"></utrecht-icon-wandelen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
