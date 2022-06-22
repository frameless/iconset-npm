import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconStrand } from './utrecht-icon-strand';

describe('UtrechtIconStrand', () => {
  it('builds', () => {
    expect(new UtrechtIconStrand()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconStrand],
    html: '<utrecht-icon-strand icon-title-id="1"></utrecht-icon-strand>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
