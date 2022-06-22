import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAfvalScheiden } from './utrecht-icon-afval-scheiden';

describe('UtrechtIconAfvalScheiden', () => {
  it('builds', () => {
    expect(new UtrechtIconAfvalScheiden()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAfvalScheiden],
    html: '<utrecht-icon-afval-scheiden icon-title-id="1"></utrecht-icon-afval-scheiden>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
