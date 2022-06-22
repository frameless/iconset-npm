import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconStationStoptrein } from './utrecht-icon-station-stoptrein';

describe('UtrechtIconStationStoptrein', () => {
  it('builds', () => {
    expect(new UtrechtIconStationStoptrein()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconStationStoptrein],
    html: '<utrecht-icon-station-stoptrein icon-title-id="1"></utrecht-icon-station-stoptrein>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
