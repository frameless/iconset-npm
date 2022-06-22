import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVacatures } from './utrecht-icon-vacatures';

describe('UtrechtIconVacatures', () => {
  it('builds', () => {
    expect(new UtrechtIconVacatures()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVacatures],
    html: '<utrecht-icon-vacatures icon-title-id="1"></utrecht-icon-vacatures>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
