import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVergaderen } from './utrecht-icon-vergaderen';

describe('UtrechtIconVergaderen', () => {
  it('builds', () => {
    expect(new UtrechtIconVergaderen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVergaderen],
    html: '<utrecht-icon-vergaderen icon-title-id="1"></utrecht-icon-vergaderen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
