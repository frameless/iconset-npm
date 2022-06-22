import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconNatuurLandschap } from './utrecht-icon-natuur-landschap';

describe('UtrechtIconNatuurLandschap', () => {
  it('builds', () => {
    expect(new UtrechtIconNatuurLandschap()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconNatuurLandschap],
    html: '<utrecht-icon-natuur-landschap icon-title-id="1"></utrecht-icon-natuur-landschap>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
