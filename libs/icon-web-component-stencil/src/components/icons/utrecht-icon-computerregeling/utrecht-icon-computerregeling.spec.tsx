import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconComputerregeling } from './utrecht-icon-computerregeling';

describe('UtrechtIconComputerregeling', () => {
  it('builds', () => {
    expect(new UtrechtIconComputerregeling()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconComputerregeling],
    html: '<utrecht-icon-computerregeling icon-title-id="1"></utrecht-icon-computerregeling>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
