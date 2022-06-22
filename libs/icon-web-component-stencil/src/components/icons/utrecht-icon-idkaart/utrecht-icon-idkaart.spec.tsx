import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconIdkaart } from './utrecht-icon-idkaart';

describe('UtrechtIconIdkaart', () => {
  it('builds', () => {
    expect(new UtrechtIconIdkaart()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconIdkaart],
    html: '<utrecht-icon-idkaart icon-title-id="1"></utrecht-icon-idkaart>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
