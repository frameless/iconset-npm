import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVervoersvoorziening } from './utrecht-icon-vervoersvoorziening';

describe('UtrechtIconVervoersvoorziening', () => {
  it('builds', () => {
    expect(new UtrechtIconVervoersvoorziening()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVervoersvoorziening],
    html: '<utrecht-icon-vervoersvoorziening icon-title-id="1"></utrecht-icon-vervoersvoorziening>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
