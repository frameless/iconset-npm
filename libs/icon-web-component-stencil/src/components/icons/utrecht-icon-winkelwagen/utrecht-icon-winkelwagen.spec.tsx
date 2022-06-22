import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWinkelwagen } from './utrecht-icon-winkelwagen';

describe('UtrechtIconWinkelwagen', () => {
  it('builds', () => {
    expect(new UtrechtIconWinkelwagen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWinkelwagen],
    html: '<utrecht-icon-winkelwagen icon-title-id="1"></utrecht-icon-winkelwagen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
