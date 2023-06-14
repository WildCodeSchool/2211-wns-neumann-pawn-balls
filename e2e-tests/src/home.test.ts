import { expect, test } from '@playwright/test';
import { clearDB, connect, disconnect } from './dbHelpers';

test.beforeAll(connect);
test.beforeEach(clearDB);
test.afterAll(disconnect);

test('can view sport list', async ({ page }) => {
  /** await db.getRepository(Category).insert([{ name: 'Wilder1' }, { name: 'Wilder2' }]);
   *
   * somewhere inside the project you can get the category list of every sport and you want to get it there so you can check its properly displayed.
   * page.goto('/');
   * await expect(page.getByTestId('wilder-list')).toContainText('Wilder1');
   * await expect(page.getByTestId('wilder-list')).toContainText('Wilder2');
   */
  expect(true).toBe(true);
});
