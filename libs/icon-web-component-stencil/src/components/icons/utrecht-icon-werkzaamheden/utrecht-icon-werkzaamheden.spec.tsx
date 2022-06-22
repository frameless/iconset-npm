import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWerkzaamheden } from './utrecht-icon-werkzaamheden';

describe('UtrechtIconWerkzaamheden', () => {
  it('builds', () => {
    expect(new UtrechtIconWerkzaamheden()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWerkzaamheden],
    html: '<utrecht-icon-werkzaamheden icon-title-id="1"></utrecht-icon-werkzaamheden>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
