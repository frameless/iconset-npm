import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVirus } from './utrecht-icon-virus';

describe('UtrechtIconVirus', () => {
  it('builds', () => {
    expect(new UtrechtIconVirus()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVirus],
    html: '<utrecht-icon-virus icon-title-id="1"></utrecht-icon-virus>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
