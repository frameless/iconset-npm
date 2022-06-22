import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAuto } from './utrecht-icon-auto';

describe('UtrechtIconAuto', () => {
  it('builds', () => {
    expect(new UtrechtIconAuto()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAuto],
    html: '<utrecht-icon-auto icon-title-id="1"></utrecht-icon-auto>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
