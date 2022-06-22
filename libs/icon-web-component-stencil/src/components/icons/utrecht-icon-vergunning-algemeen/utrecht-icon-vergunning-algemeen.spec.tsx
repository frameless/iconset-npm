import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVergunningAlgemeen } from './utrecht-icon-vergunning-algemeen';

describe('UtrechtIconVergunningAlgemeen', () => {
  it('builds', () => {
    expect(new UtrechtIconVergunningAlgemeen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVergunningAlgemeen],
    html: '<utrecht-icon-vergunning-algemeen icon-title-id="1"></utrecht-icon-vergunning-algemeen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
