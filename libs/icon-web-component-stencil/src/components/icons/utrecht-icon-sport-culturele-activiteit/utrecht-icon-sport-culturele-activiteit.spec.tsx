import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSportCultureleActiviteit } from './utrecht-icon-sport-culturele-activiteit';

describe('UtrechtIconSportCultureleActiviteit', () => {
  it('builds', () => {
    expect(new UtrechtIconSportCultureleActiviteit()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSportCultureleActiviteit],
    html: '<utrecht-icon-sport-culturele-activiteit icon-title-id="1"></utrecht-icon-sport-culturele-activiteit>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
