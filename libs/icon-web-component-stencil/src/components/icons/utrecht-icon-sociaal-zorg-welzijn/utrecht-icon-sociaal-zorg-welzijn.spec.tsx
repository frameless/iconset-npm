import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSociaalZorgWelzijn } from './utrecht-icon-sociaal-zorg-welzijn';

describe('UtrechtIconSociaalZorgWelzijn', () => {
  it('builds', () => {
    expect(new UtrechtIconSociaalZorgWelzijn()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSociaalZorgWelzijn],
    html: '<utrecht-icon-sociaal-zorg-welzijn icon-title-id="1"></utrecht-icon-sociaal-zorg-welzijn>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
