import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMonitorAgrofood } from './utrecht-icon-monitor-agrofood';

describe('UtrechtIconMonitorAgrofood', () => {
  it('builds', () => {
    expect(new UtrechtIconMonitorAgrofood()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMonitorAgrofood],
    html: '<utrecht-icon-monitor-agrofood icon-title-id="1"></utrecht-icon-monitor-agrofood>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
