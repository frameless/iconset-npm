import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGezicht } from './utrecht-icon-gezicht';

describe('UtrechtIconGezicht', () => {
  it('builds', () => {
    expect(new UtrechtIconGezicht()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGezicht],
    html: '<utrecht-icon-gezicht icon-title-id="1"></utrecht-icon-gezicht>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
