import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVerkiezingen } from './utrecht-icon-verkiezingen';

describe('UtrechtIconVerkiezingen', () => {
  it('builds', () => {
    expect(new UtrechtIconVerkiezingen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVerkiezingen],
    html: '<utrecht-icon-verkiezingen icon-title-id="1"></utrecht-icon-verkiezingen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
