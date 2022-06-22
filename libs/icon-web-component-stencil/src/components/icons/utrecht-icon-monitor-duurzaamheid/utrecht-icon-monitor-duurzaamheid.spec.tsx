import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMonitorDuurzaamheid } from './utrecht-icon-monitor-duurzaamheid';

describe('UtrechtIconMonitorDuurzaamheid', () => {
  it('builds', () => {
    expect(new UtrechtIconMonitorDuurzaamheid()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMonitorDuurzaamheid],
    html: '<utrecht-icon-monitor-duurzaamheid icon-title-id="1"></utrecht-icon-monitor-duurzaamheid>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
