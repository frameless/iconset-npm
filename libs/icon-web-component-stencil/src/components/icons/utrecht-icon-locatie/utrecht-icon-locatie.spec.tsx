import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconLocatie } from './utrecht-icon-locatie';

describe('UtrechtIconLocatie', () => {
  it('builds', () => {
    expect(new UtrechtIconLocatie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconLocatie],
    html: '<utrecht-icon-locatie icon-title-id="1"></utrecht-icon-locatie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
