import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconLetOp } from './utrecht-icon-let-op';

describe('UtrechtIconLetOp', () => {
  it('builds', () => {
    expect(new UtrechtIconLetOp()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconLetOp],
    html: '<utrecht-icon-let-op icon-title-id="1"></utrecht-icon-let-op>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
