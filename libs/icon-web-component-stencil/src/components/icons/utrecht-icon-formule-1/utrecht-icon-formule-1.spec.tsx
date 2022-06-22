import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconFormule1 } from './utrecht-icon-formule-1';

describe('UtrechtIconFormule1', () => {
  it('builds', () => {
    expect(new UtrechtIconFormule1()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconFormule1],
    html: '<utrecht-icon-formule-1 icon-title-id="1"></utrecht-icon-formule-1>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
