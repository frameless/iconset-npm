import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAfvalContainer } from './utrecht-icon-afval-container';

describe('UtrechtIconAfvalContainer', () => {
  it('builds', () => {
    expect(new UtrechtIconAfvalContainer()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAfvalContainer],
    html: '<utrecht-icon-afval-container icon-title-id="1"></utrecht-icon-afval-container>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
