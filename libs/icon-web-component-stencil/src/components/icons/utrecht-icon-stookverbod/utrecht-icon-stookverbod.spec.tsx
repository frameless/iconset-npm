import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconStookverbod } from './utrecht-icon-stookverbod';

describe('UtrechtIconStookverbod', () => {
  it('builds', () => {
    expect(new UtrechtIconStookverbod()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconStookverbod],
    html: '<utrecht-icon-stookverbod icon-title-id="1"></utrecht-icon-stookverbod>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
