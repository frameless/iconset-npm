import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconInformatieEnBetalen } from './utrecht-icon-informatie-en-betalen';

describe('UtrechtIconInformatieEnBetalen', () => {
  it('builds', () => {
    expect(new UtrechtIconInformatieEnBetalen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconInformatieEnBetalen],
    html: '<utrecht-icon-informatie-en-betalen icon-title-id="1"></utrecht-icon-informatie-en-betalen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
