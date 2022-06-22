import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconInformatie } from './utrecht-icon-informatie';

describe('UtrechtIconInformatie', () => {
  it('builds', () => {
    expect(new UtrechtIconInformatie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconInformatie],
    html: '<utrecht-icon-informatie icon-title-id="1"></utrecht-icon-informatie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
