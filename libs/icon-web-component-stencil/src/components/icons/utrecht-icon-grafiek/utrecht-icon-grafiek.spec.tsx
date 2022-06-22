import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGrafiek } from './utrecht-icon-grafiek';

describe('UtrechtIconGrafiek', () => {
  it('builds', () => {
    expect(new UtrechtIconGrafiek()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGrafiek],
    html: '<utrecht-icon-grafiek icon-title-id="1"></utrecht-icon-grafiek>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
