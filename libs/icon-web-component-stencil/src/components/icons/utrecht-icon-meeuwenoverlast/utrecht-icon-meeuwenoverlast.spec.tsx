import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMeeuwenoverlast } from './utrecht-icon-meeuwenoverlast';

describe('UtrechtIconMeeuwenoverlast', () => {
  it('builds', () => {
    expect(new UtrechtIconMeeuwenoverlast()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMeeuwenoverlast],
    html: '<utrecht-icon-meeuwenoverlast icon-title-id="1"></utrecht-icon-meeuwenoverlast>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
