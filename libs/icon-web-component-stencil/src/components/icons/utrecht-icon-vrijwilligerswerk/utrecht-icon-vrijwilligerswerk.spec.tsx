import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVrijwilligerswerk } from './utrecht-icon-vrijwilligerswerk';

describe('UtrechtIconVrijwilligerswerk', () => {
  it('builds', () => {
    expect(new UtrechtIconVrijwilligerswerk()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVrijwilligerswerk],
    html: '<utrecht-icon-vrijwilligerswerk icon-title-id="1"></utrecht-icon-vrijwilligerswerk>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
