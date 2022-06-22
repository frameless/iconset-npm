import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSport } from './utrecht-icon-sport';

describe('UtrechtIconSport', () => {
  it('builds', () => {
    expect(new UtrechtIconSport()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSport],
    html: '<utrecht-icon-sport icon-title-id="1"></utrecht-icon-sport>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
