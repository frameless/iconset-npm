import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconSchoolkostenregeling } from './utrecht-icon-schoolkostenregeling';

describe('UtrechtIconSchoolkostenregeling', () => {
  it('builds', () => {
    expect(new UtrechtIconSchoolkostenregeling()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconSchoolkostenregeling],
    html: '<utrecht-icon-schoolkostenregeling icon-title-id="1"></utrecht-icon-schoolkostenregeling>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
