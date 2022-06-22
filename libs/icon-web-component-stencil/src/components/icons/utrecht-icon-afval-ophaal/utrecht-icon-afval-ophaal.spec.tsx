import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAfvalOphaal } from './utrecht-icon-afval-ophaal';

describe('UtrechtIconAfvalOphaal', () => {
  it('builds', () => {
    expect(new UtrechtIconAfvalOphaal()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAfvalOphaal],
    html: '<utrecht-icon-afval-ophaal icon-title-id="1"></utrecht-icon-afval-ophaal>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
