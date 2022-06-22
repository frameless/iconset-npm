import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVoeding } from './utrecht-icon-voeding';

describe('UtrechtIconVoeding', () => {
  it('builds', () => {
    expect(new UtrechtIconVoeding()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVoeding],
    html: '<utrecht-icon-voeding icon-title-id="1"></utrecht-icon-voeding>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
