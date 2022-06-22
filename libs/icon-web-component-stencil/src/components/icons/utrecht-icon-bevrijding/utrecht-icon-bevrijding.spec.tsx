import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBevrijding } from './utrecht-icon-bevrijding';

describe('UtrechtIconBevrijding', () => {
  it('builds', () => {
    expect(new UtrechtIconBevrijding()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBevrijding],
    html: '<utrecht-icon-bevrijding icon-title-id="1"></utrecht-icon-bevrijding>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
