import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconKerstbomen } from './utrecht-icon-kerstbomen';

describe('UtrechtIconKerstbomen', () => {
  it('builds', () => {
    expect(new UtrechtIconKerstbomen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconKerstbomen],
    html: '<utrecht-icon-kerstbomen icon-title-id="1"></utrecht-icon-kerstbomen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
