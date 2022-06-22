import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconEvenementen } from './utrecht-icon-evenementen';

describe('UtrechtIconEvenementen', () => {
  it('builds', () => {
    expect(new UtrechtIconEvenementen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconEvenementen],
    html: '<utrecht-icon-evenementen icon-title-id="1"></utrecht-icon-evenementen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
