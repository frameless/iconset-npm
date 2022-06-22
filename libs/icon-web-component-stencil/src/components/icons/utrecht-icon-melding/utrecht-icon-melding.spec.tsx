import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMelding } from './utrecht-icon-melding';

describe('UtrechtIconMelding', () => {
  it('builds', () => {
    expect(new UtrechtIconMelding()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMelding],
    html: '<utrecht-icon-melding icon-title-id="1"></utrecht-icon-melding>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
