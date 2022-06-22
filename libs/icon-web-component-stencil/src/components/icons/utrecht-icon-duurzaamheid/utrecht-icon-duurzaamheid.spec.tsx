import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconDuurzaamheid } from './utrecht-icon-duurzaamheid';

describe('UtrechtIconDuurzaamheid', () => {
  it('builds', () => {
    expect(new UtrechtIconDuurzaamheid()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconDuurzaamheid],
    html: '<utrecht-icon-duurzaamheid icon-title-id="1"></utrecht-icon-duurzaamheid>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
