import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSinterklaas } from './utrecht-icon-sinterklaas';

describe('UtrechtIconSinterklaas', () => {
  it('builds', () => {
    expect(new UtrechtIconSinterklaas()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSinterklaas],
    html: '<utrecht-icon-sinterklaas icon-title-id="1"></utrecht-icon-sinterklaas>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
