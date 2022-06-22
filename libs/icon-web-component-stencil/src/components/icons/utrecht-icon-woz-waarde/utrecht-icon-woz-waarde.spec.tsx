import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWozWaarde } from './utrecht-icon-woz-waarde';

describe('UtrechtIconWozWaarde', () => {
  it('builds', () => {
    expect(new UtrechtIconWozWaarde()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWozWaarde],
    html: '<utrecht-icon-woz-waarde icon-title-id="1"></utrecht-icon-woz-waarde>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
