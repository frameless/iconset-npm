import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBezwaarEnBeroep } from './utrecht-icon-bezwaar-en-beroep';

describe('UtrechtIconBezwaarEnBeroep', () => {
  it('builds', () => {
    expect(new UtrechtIconBezwaarEnBeroep()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBezwaarEnBeroep],
    html: '<utrecht-icon-bezwaar-en-beroep icon-title-id="1"></utrecht-icon-bezwaar-en-beroep>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
