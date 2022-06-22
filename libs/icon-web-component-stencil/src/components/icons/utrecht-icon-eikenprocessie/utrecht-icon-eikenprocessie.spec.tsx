import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconEikenprocessie } from './utrecht-icon-eikenprocessie';

describe('UtrechtIconEikenprocessie', () => {
  it('builds', () => {
    expect(new UtrechtIconEikenprocessie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconEikenprocessie],
    html: '<utrecht-icon-eikenprocessie icon-title-id="1"></utrecht-icon-eikenprocessie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
