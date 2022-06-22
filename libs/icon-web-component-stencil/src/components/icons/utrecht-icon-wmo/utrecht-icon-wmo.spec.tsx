import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWmo } from './utrecht-icon-wmo';

describe('UtrechtIconWmo', () => {
  it('builds', () => {
    expect(new UtrechtIconWmo()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWmo],
    html: '<utrecht-icon-wmo icon-title-id="1"></utrecht-icon-wmo>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
