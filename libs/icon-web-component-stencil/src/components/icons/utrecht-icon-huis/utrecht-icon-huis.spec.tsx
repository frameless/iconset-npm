import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconHuis } from './utrecht-icon-huis';

describe('UtrechtIconHuis', () => {
  it('builds', () => {
    expect(new UtrechtIconHuis()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconHuis],
    html: '<utrecht-icon-huis icon-title-id="1"></utrecht-icon-huis>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
