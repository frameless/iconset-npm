import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconLiefdadigheid } from './utrecht-icon-liefdadigheid';

describe('UtrechtIconLiefdadigheid', () => {
  it('builds', () => {
    expect(new UtrechtIconLiefdadigheid()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconLiefdadigheid],
    html: '<utrecht-icon-liefdadigheid icon-title-id="1"></utrecht-icon-liefdadigheid>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
