import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBijstandsuitkering } from './utrecht-icon-bijstandsuitkering';

describe('UtrechtIconBijstandsuitkering', () => {
  it('builds', () => {
    expect(new UtrechtIconBijstandsuitkering()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBijstandsuitkering],
    html: '<utrecht-icon-bijstandsuitkering icon-title-id="1"></utrecht-icon-bijstandsuitkering>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
