import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconKopenEnHuren } from './utrecht-icon-kopen-en-huren';

describe('UtrechtIconKopenEnHuren', () => {
  it('builds', () => {
    expect(new UtrechtIconKopenEnHuren()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconKopenEnHuren],
    html: '<utrecht-icon-kopen-en-huren icon-title-id="1"></utrecht-icon-kopen-en-huren>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
