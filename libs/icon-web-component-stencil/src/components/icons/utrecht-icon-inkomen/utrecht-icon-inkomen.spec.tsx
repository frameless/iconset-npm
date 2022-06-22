import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconInkomen } from './utrecht-icon-inkomen';

describe('UtrechtIconInkomen', () => {
  it('builds', () => {
    expect(new UtrechtIconInkomen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconInkomen],
    html: '<utrecht-icon-inkomen icon-title-id="1"></utrecht-icon-inkomen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
