import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconParkeervoorzieningGehandicapten } from './utrecht-icon-parkeervoorziening-gehandicapten';

describe('UtrechtIconParkeervoorzieningGehandicapten', () => {
  it('builds', () => {
    expect(new UtrechtIconParkeervoorzieningGehandicapten()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconParkeervoorzieningGehandicapten],
    html: '<utrecht-icon-parkeervoorziening-gehandicapten icon-title-id="1"></utrecht-icon-parkeervoorziening-gehandicapten>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
