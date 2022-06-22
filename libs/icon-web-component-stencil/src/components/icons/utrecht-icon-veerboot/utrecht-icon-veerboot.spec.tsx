import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVeerboot } from './utrecht-icon-veerboot';

describe('UtrechtIconVeerboot', () => {
  it('builds', () => {
    expect(new UtrechtIconVeerboot()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVeerboot],
    html: '<utrecht-icon-veerboot icon-title-id="1"></utrecht-icon-veerboot>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
