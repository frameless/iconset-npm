import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBladerenOpruimen } from './utrecht-icon-bladeren-opruimen';

describe('UtrechtIconBladerenOpruimen', () => {
  it('builds', () => {
    expect(new UtrechtIconBladerenOpruimen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBladerenOpruimen],
    html: '<utrecht-icon-bladeren-opruimen icon-title-id="1"></utrecht-icon-bladeren-opruimen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
