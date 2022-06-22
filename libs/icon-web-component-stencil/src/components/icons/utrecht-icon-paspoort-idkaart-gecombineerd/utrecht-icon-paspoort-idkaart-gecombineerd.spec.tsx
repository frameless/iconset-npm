import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconPaspoortIdkaartGecombineerd } from './utrecht-icon-paspoort-idkaart-gecombineerd';

describe('UtrechtIconPaspoortIdkaartGecombineerd', () => {
  it('builds', () => {
    expect(new UtrechtIconPaspoortIdkaartGecombineerd()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconPaspoortIdkaartGecombineerd],
    html: '<utrecht-icon-paspoort-idkaart-gecombineerd icon-title-id="1"></utrecht-icon-paspoort-idkaart-gecombineerd>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
