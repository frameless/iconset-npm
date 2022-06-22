import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconRegelingLaagInkomen } from './utrecht-icon-regeling-laag-inkomen';

describe('UtrechtIconRegelingLaagInkomen', () => {
  it('builds', () => {
    expect(new UtrechtIconRegelingLaagInkomen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconRegelingLaagInkomen],
    html: '<utrecht-icon-regeling-laag-inkomen icon-title-id="1"></utrecht-icon-regeling-laag-inkomen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
