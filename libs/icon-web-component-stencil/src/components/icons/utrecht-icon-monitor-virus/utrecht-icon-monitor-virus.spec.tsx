import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMonitorVirus } from './utrecht-icon-monitor-virus';

describe('UtrechtIconMonitorVirus', () => {
  it('builds', () => {
    expect(new UtrechtIconMonitorVirus()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMonitorVirus],
    html: '<utrecht-icon-monitor-virus icon-title-id="1"></utrecht-icon-monitor-virus>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
