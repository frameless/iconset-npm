import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconKopenEnVerkopen } from './utrecht-icon-kopen-en-verkopen';

describe('UtrechtIconKopenEnVerkopen', () => {
  it('builds', () => {
    expect(new UtrechtIconKopenEnVerkopen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconKopenEnVerkopen],
    html: '<utrecht-icon-kopen-en-verkopen icon-title-id="1"></utrecht-icon-kopen-en-verkopen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
