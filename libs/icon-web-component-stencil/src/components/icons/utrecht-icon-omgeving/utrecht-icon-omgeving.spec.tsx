import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOmgeving } from './utrecht-icon-omgeving';

describe('UtrechtIconOmgeving', () => {
  it('builds', () => {
    expect(new UtrechtIconOmgeving()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOmgeving],
    html: '<utrecht-icon-omgeving icon-title-id="1"></utrecht-icon-omgeving>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
