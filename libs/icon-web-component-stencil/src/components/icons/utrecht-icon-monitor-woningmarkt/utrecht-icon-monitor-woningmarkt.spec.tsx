import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMonitorWoningmarkt } from './utrecht-icon-monitor-woningmarkt';

describe('UtrechtIconMonitorWoningmarkt', () => {
  it('builds', () => {
    expect(new UtrechtIconMonitorWoningmarkt()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMonitorWoningmarkt],
    html: '<utrecht-icon-monitor-woningmarkt icon-title-id="1"></utrecht-icon-monitor-woningmarkt>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
