import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconVluchtelingenOpvang } from './utrecht-icon-vluchtelingen-opvang';

describe('UtrechtIconVluchtelingenOpvang', () => {
  it('builds', () => {
    expect(new UtrechtIconVluchtelingenOpvang()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconVluchtelingenOpvang],
    html: '<utrecht-icon-vluchtelingen-opvang icon-title-id="1"></utrecht-icon-vluchtelingen-opvang>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
