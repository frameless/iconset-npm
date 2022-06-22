import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconNieuwsbrief } from './utrecht-icon-nieuwsbrief';

describe('UtrechtIconNieuwsbrief', () => {
  it('builds', () => {
    expect(new UtrechtIconNieuwsbrief()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconNieuwsbrief],
    html: '<utrecht-icon-nieuwsbrief icon-title-id="1"></utrecht-icon-nieuwsbrief>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
