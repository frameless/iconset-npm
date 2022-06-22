import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconStationSneltrein } from './utrecht-icon-station-sneltrein';

describe('UtrechtIconStationSneltrein', () => {
  it('builds', () => {
    expect(new UtrechtIconStationSneltrein()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconStationSneltrein],
    html: '<utrecht-icon-station-sneltrein icon-title-id="1"></utrecht-icon-station-sneltrein>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
