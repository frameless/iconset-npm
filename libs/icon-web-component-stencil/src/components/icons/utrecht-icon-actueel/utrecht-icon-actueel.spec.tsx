import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconActueel } from './utrecht-icon-actueel';

describe('UtrechtIconActueel', () => {
  it('builds', () => {
    expect(new UtrechtIconActueel()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconActueel],
    html: '<utrecht-icon-actueel icon-title-id="1"></utrecht-icon-actueel>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
