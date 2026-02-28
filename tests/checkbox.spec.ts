// Test case =fx( Arrange, Act, Asset)

// test('get started link works', async ({ page }) => {
// await page.goto('https://the-internet.herokuapp.com/checkboxes');
// await page.getByRole('checkbox').first();
// await expect(page.getByRole('checkbox').first()).toBeChecked();
// })

import { test, expect } from '@playwright/test';

test('verify checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    await page.getByRole('checkbox').nth(1)
    await expect(page.getByRole('checkbox').nth(1)).toBeChecked();

    await page.getByRole('checkbox').first()
    await page.getByRole('checkbox').first().check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();

});