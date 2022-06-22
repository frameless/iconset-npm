import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconKindEnFamilie } from './utrecht-icon-kind-en-familie';

describe('UtrechtIconKindEnFamilie', () => {
  it('builds', () => {
    expect(new UtrechtIconKindEnFamilie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconKindEnFamilie],
    html: '<utrecht-icon-kind-en-familie icon-title-id="1"></utrecht-icon-kind-en-familie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
