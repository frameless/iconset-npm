import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconParkeren } from './utrecht-icon-parkeren';

describe('UtrechtIconParkeren', () => {
  it('builds', () => {
    expect(new UtrechtIconParkeren()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconParkeren],
    html: '<utrecht-icon-parkeren icon-title-id="1"></utrecht-icon-parkeren>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
