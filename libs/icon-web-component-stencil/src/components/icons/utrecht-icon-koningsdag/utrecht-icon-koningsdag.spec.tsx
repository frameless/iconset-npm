import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconKoningsdag } from './utrecht-icon-koningsdag';

describe('UtrechtIconKoningsdag', () => {
  it('builds', () => {
    expect(new UtrechtIconKoningsdag()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconKoningsdag],
    html: '<utrecht-icon-koningsdag icon-title-id="1"></utrecht-icon-koningsdag>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
