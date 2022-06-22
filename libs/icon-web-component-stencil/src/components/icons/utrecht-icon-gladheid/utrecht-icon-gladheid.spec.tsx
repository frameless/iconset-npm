import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGladheid } from './utrecht-icon-gladheid';

describe('UtrechtIconGladheid', () => {
  it('builds', () => {
    expect(new UtrechtIconGladheid()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGladheid],
    html: '<utrecht-icon-gladheid icon-title-id="1"></utrecht-icon-gladheid>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
