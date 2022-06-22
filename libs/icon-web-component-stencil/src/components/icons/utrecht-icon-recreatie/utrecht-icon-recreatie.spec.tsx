import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconRecreatie } from './utrecht-icon-recreatie';

describe('UtrechtIconRecreatie', () => {
  it('builds', () => {
    expect(new UtrechtIconRecreatie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconRecreatie],
    html: '<utrecht-icon-recreatie icon-title-id="1"></utrecht-icon-recreatie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
