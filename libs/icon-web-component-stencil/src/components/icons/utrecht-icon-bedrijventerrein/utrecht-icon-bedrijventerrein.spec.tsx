import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBedrijventerrein } from './utrecht-icon-bedrijventerrein';

describe('UtrechtIconBedrijventerrein', () => {
  it('builds', () => {
    expect(new UtrechtIconBedrijventerrein()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBedrijventerrein],
    html: '<utrecht-icon-bedrijventerrein icon-title-id="1"></utrecht-icon-bedrijventerrein>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
