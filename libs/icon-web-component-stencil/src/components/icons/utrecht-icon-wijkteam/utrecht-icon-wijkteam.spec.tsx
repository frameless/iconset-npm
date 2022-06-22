import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconWijkteam } from './utrecht-icon-wijkteam';

describe('UtrechtIconWijkteam', () => {
  it('builds', () => {
    expect(new UtrechtIconWijkteam()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconWijkteam],
    html: '<utrecht-icon-wijkteam icon-title-id="1"></utrecht-icon-wijkteam>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
