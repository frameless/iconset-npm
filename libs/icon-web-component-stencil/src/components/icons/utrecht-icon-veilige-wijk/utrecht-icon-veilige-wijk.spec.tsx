import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVeiligeWijk } from './utrecht-icon-veilige-wijk';

describe('UtrechtIconVeiligeWijk', () => {
  it('builds', () => {
    expect(new UtrechtIconVeiligeWijk()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVeiligeWijk],
    html: '<utrecht-icon-veilige-wijk icon-title-id="1"></utrecht-icon-veilige-wijk>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
