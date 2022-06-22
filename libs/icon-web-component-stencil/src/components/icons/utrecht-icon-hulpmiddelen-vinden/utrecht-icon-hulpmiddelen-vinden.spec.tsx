import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconHulpmiddelenVinden } from './utrecht-icon-hulpmiddelen-vinden';

describe('UtrechtIconHulpmiddelenVinden', () => {
  it('builds', () => {
    expect(new UtrechtIconHulpmiddelenVinden()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconHulpmiddelenVinden],
    html: '<utrecht-icon-hulpmiddelen-vinden icon-title-id="1"></utrecht-icon-hulpmiddelen-vinden>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
