import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconRaadEnCollege } from './utrecht-icon-raad-en-college';

describe('UtrechtIconRaadEnCollege', () => {
  it('builds', () => {
    expect(new UtrechtIconRaadEnCollege()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconRaadEnCollege],
    html: '<utrecht-icon-raad-en-college icon-title-id="1"></utrecht-icon-raad-en-college>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
