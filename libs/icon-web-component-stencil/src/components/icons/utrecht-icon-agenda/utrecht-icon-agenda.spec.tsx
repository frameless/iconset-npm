import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAgenda } from './utrecht-icon-agenda';

describe('UtrechtIconAgenda', () => {
  it('builds', () => {
    expect(new UtrechtIconAgenda()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAgenda],
    html: '<utrecht-icon-agenda icon-title-id="1"></utrecht-icon-agenda>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
