import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconFiets } from './utrecht-icon-fiets';

describe('UtrechtIconFiets', () => {
  it('builds', () => {
    expect(new UtrechtIconFiets()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconFiets],
    html: '<utrecht-icon-fiets icon-title-id="1"></utrecht-icon-fiets>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
