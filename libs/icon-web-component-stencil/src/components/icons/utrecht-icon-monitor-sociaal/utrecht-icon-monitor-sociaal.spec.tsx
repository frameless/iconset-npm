import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMonitorSociaal } from './utrecht-icon-monitor-sociaal';

describe('UtrechtIconMonitorSociaal', () => {
  it('builds', () => {
    expect(new UtrechtIconMonitorSociaal()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMonitorSociaal],
    html: '<utrecht-icon-monitor-sociaal icon-title-id="1"></utrecht-icon-monitor-sociaal>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
