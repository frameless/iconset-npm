import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBuitengebied } from './utrecht-icon-buitengebied';

describe('UtrechtIconBuitengebied', () => {
  it('builds', () => {
    expect(new UtrechtIconBuitengebied()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBuitengebied],
    html: '<utrecht-icon-buitengebied icon-title-id="1"></utrecht-icon-buitengebied>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
