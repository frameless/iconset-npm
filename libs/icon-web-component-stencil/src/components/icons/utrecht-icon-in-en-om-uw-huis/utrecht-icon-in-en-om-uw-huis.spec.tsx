import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconInEnOmUwHuis } from './utrecht-icon-in-en-om-uw-huis';

describe('UtrechtIconInEnOmUwHuis', () => {
  it('builds', () => {
    expect(new UtrechtIconInEnOmUwHuis()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconInEnOmUwHuis],
    html: '<utrecht-icon-in-en-om-uw-huis icon-title-id="1"></utrecht-icon-in-en-om-uw-huis>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
