import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVuurwerk } from './utrecht-icon-vuurwerk';

describe('UtrechtIconVuurwerk', () => {
  it('builds', () => {
    expect(new UtrechtIconVuurwerk()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVuurwerk],
    html: '<utrecht-icon-vuurwerk icon-title-id="1"></utrecht-icon-vuurwerk>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
