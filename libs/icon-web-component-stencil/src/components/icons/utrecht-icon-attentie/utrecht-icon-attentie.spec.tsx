import { newSpecPage } from '@stencil/core/testing';
import { UtrechtIconAttentie } from './utrecht-icon-attentie';

describe('UtrechtIconAttentie', () => {
  it('builds', () => {
    expect(new UtrechtIconAttentie()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [UtrechtIconAttentie],
    html: '<utrecht-icon-attentie icon-title-id="1"></utrecht-icon-attentie>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
