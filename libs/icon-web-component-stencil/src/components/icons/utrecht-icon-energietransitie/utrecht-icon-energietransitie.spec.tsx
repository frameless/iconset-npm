import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconEnergietransitie } from './utrecht-icon-energietransitie';

describe('UtrechtIconEnergietransitie', () => {
  it('builds', () => {
    expect(new UtrechtIconEnergietransitie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconEnergietransitie],
    html: '<utrecht-icon-energietransitie icon-title-id="1"></utrecht-icon-energietransitie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
