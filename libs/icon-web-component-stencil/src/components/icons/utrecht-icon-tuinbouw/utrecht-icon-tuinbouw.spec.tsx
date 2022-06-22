import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconTuinbouw } from './utrecht-icon-tuinbouw';

describe('UtrechtIconTuinbouw', () => {
  it('builds', () => {
    expect(new UtrechtIconTuinbouw()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconTuinbouw],
    html: '<utrecht-icon-tuinbouw icon-title-id="1"></utrecht-icon-tuinbouw>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
