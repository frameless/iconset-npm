import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconTemperatuurMelding } from './utrecht-icon-temperatuur-melding';

describe('UtrechtIconTemperatuurMelding', () => {
  it('builds', () => {
    expect(new UtrechtIconTemperatuurMelding()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconTemperatuurMelding],
    html: '<utrecht-icon-temperatuur-melding icon-title-id="1"></utrecht-icon-temperatuur-melding>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
