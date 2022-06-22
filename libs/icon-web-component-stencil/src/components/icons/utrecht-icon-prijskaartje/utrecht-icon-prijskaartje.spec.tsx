import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconPrijskaartje } from './utrecht-icon-prijskaartje';

describe('UtrechtIconPrijskaartje', () => {
  it('builds', () => {
    expect(new UtrechtIconPrijskaartje()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconPrijskaartje],
    html: '<utrecht-icon-prijskaartje icon-title-id="1"></utrecht-icon-prijskaartje>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
