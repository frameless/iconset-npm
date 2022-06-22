import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconGrofvuil } from './utrecht-icon-grofvuil';

describe('UtrechtIconGrofvuil', () => {
  it('builds', () => {
    expect(new UtrechtIconGrofvuil()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconGrofvuil],
    html: '<utrecht-icon-grofvuil icon-title-id="1"></utrecht-icon-grofvuil>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
