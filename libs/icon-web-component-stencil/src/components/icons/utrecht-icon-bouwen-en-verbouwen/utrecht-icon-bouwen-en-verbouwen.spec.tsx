import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBouwenEnVerbouwen } from './utrecht-icon-bouwen-en-verbouwen';

describe('UtrechtIconBouwenEnVerbouwen', () => {
  it('builds', () => {
    expect(new UtrechtIconBouwenEnVerbouwen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBouwenEnVerbouwen],
    html: '<utrecht-icon-bouwen-en-verbouwen icon-title-id="1"></utrecht-icon-bouwen-en-verbouwen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
