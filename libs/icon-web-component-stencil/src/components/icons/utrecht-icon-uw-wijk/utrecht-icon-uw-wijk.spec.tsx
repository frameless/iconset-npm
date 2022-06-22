import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconUwWijk } from './utrecht-icon-uw-wijk';

describe('UtrechtIconUwWijk', () => {
  it('builds', () => {
    expect(new UtrechtIconUwWijk()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconUwWijk],
    html: '<utrecht-icon-uw-wijk icon-title-id="1"></utrecht-icon-uw-wijk>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
