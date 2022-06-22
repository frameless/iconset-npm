import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconOnderscheidingen } from './utrecht-icon-onderscheidingen';

describe('UtrechtIconOnderscheidingen', () => {
  it('builds', () => {
    expect(new UtrechtIconOnderscheidingen()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconOnderscheidingen],
    html: '<utrecht-icon-onderscheidingen icon-title-id="1"></utrecht-icon-onderscheidingen>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
