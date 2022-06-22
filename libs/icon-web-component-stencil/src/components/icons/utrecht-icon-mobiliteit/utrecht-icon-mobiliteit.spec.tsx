import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMobiliteit } from './utrecht-icon-mobiliteit';

describe('UtrechtIconMobiliteit', () => {
  it('builds', () => {
    expect(new UtrechtIconMobiliteit()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMobiliteit],
    html: '<utrecht-icon-mobiliteit icon-title-id="1"></utrecht-icon-mobiliteit>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
