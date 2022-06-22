import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconEconomieWerkInkomen } from './utrecht-icon-economie-werk-inkomen';

describe('UtrechtIconEconomieWerkInkomen', () => {
  it('builds', () => {
    expect(new UtrechtIconEconomieWerkInkomen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconEconomieWerkInkomen],
    html: '<utrecht-icon-economie-werk-inkomen icon-title-id="1"></utrecht-icon-economie-werk-inkomen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
