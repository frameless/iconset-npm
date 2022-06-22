import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconReclame } from './utrecht-icon-reclame';

describe('UtrechtIconReclame', () => {
  it('builds', () => {
    expect(new UtrechtIconReclame()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconReclame],
    html: '<utrecht-icon-reclame icon-title-id="1"></utrecht-icon-reclame>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
