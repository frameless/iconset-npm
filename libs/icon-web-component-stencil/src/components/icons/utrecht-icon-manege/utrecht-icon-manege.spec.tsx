import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconManege } from './utrecht-icon-manege';

describe('UtrechtIconManege', () => {
  it('builds', () => {
    expect(new UtrechtIconManege()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconManege],
    html: '<utrecht-icon-manege icon-title-id="1"></utrecht-icon-manege>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
