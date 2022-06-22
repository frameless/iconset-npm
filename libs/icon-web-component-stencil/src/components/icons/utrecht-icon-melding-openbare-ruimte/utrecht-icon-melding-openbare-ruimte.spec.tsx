import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconMeldingOpenbareRuimte } from './utrecht-icon-melding-openbare-ruimte';

describe('UtrechtIconMeldingOpenbareRuimte', () => {
  it('builds', () => {
    expect(new UtrechtIconMeldingOpenbareRuimte()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconMeldingOpenbareRuimte],
    html: '<utrecht-icon-melding-openbare-ruimte icon-title-id="1"></utrecht-icon-melding-openbare-ruimte>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
