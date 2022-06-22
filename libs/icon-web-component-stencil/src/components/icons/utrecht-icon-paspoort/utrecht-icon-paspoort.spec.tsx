import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconPaspoort } from './utrecht-icon-paspoort';

describe('UtrechtIconPaspoort', () => {
  it('builds', () => {
    expect(new UtrechtIconPaspoort()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconPaspoort],
    html: '<utrecht-icon-paspoort icon-title-id="1"></utrecht-icon-paspoort>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
