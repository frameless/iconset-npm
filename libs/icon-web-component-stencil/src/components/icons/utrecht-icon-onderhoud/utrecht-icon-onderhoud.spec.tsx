import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOnderhoud } from './utrecht-icon-onderhoud';

describe('UtrechtIconOnderhoud', () => {
  it('builds', () => {
    expect(new UtrechtIconOnderhoud()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOnderhoud],
    html: '<utrecht-icon-onderhoud icon-title-id="1"></utrecht-icon-onderhoud>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
