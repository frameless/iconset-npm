import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSubsidie } from './utrecht-icon-subsidie';

describe('UtrechtIconSubsidie', () => {
  it('builds', () => {
    expect(new UtrechtIconSubsidie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSubsidie],
    html: '<utrecht-icon-subsidie icon-title-id="1"></utrecht-icon-subsidie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
