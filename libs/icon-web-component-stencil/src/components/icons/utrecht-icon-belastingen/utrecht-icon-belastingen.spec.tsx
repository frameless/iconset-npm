import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconBelastingen } from './utrecht-icon-belastingen';

describe('UtrechtIconBelastingen', () => {
  it('builds', () => {
    expect(new UtrechtIconBelastingen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconBelastingen],
    html: '<utrecht-icon-belastingen icon-title-id="1"></utrecht-icon-belastingen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
