import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconHorecavergunningen } from './utrecht-icon-horecavergunningen';

describe('UtrechtIconHorecavergunningen', () => {
  it('builds', () => {
    expect(new UtrechtIconHorecavergunningen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconHorecavergunningen],
    html: '<utrecht-icon-horecavergunningen icon-title-id="1"></utrecht-icon-horecavergunningen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
