import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconJeugd } from './utrecht-icon-jeugd';

describe('UtrechtIconJeugd', () => {
  it('builds', () => {
    expect(new UtrechtIconJeugd()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconJeugd],
    html: '<utrecht-icon-jeugd icon-title-id="1"></utrecht-icon-jeugd>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
