import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBegroting } from './utrecht-icon-begroting';

describe('UtrechtIconBegroting', () => {
  it('builds', () => {
    expect(new UtrechtIconBegroting()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBegroting],
    html: '<utrecht-icon-begroting icon-title-id="1"></utrecht-icon-begroting>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
