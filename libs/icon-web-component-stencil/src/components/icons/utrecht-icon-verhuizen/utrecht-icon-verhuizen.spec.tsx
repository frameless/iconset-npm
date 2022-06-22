import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVerhuizen } from './utrecht-icon-verhuizen';

describe('UtrechtIconVerhuizen', () => {
  it('builds', () => {
    expect(new UtrechtIconVerhuizen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVerhuizen],
    html: '<utrecht-icon-verhuizen icon-title-id="1"></utrecht-icon-verhuizen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
