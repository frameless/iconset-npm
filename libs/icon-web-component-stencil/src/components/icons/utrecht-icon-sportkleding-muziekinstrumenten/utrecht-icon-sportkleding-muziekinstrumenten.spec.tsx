import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSportkledingMuziekinstrumenten } from './utrecht-icon-sportkleding-muziekinstrumenten';

describe('UtrechtIconSportkledingMuziekinstrumenten', () => {
  it('builds', () => {
    expect(new UtrechtIconSportkledingMuziekinstrumenten()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSportkledingMuziekinstrumenten],
    html: '<utrecht-icon-sportkleding-muziekinstrumenten icon-title-id="1"></utrecht-icon-sportkleding-muziekinstrumenten>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
