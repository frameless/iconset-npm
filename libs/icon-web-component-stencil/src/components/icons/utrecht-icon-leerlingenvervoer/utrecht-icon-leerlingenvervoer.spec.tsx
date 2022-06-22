import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconLeerlingenvervoer } from './utrecht-icon-leerlingenvervoer';

describe('UtrechtIconLeerlingenvervoer', () => {
  it('builds', () => {
    expect(new UtrechtIconLeerlingenvervoer()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconLeerlingenvervoer],
    html: '<utrecht-icon-leerlingenvervoer icon-title-id="1"></utrecht-icon-leerlingenvervoer>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
