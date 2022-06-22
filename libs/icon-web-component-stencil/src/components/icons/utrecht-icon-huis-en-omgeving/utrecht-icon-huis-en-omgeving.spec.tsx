import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconHuisEnOmgeving } from './utrecht-icon-huis-en-omgeving';

describe('UtrechtIconHuisEnOmgeving', () => {
  it('builds', () => {
    expect(new UtrechtIconHuisEnOmgeving()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconHuisEnOmgeving],
    html: '<utrecht-icon-huis-en-omgeving icon-title-id="1"></utrecht-icon-huis-en-omgeving>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
