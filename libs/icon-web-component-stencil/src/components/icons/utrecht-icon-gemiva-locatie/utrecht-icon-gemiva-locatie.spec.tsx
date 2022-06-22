import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGemivaLocatie } from './utrecht-icon-gemiva-locatie';

describe('UtrechtIconGemivaLocatie', () => {
  it('builds', () => {
    expect(new UtrechtIconGemivaLocatie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGemivaLocatie],
    html: '<utrecht-icon-gemiva-locatie icon-title-id="1"></utrecht-icon-gemiva-locatie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
