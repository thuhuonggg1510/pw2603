import { test, expect } from '@playwright/test';
// Test case =fx( Arrange, Act, Asset)
test('homepage has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
test('get started link works', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
})

test('login successfully', async ({ page }) => {
    //arrange
    await page.goto('https://the-internet.herokuapp.com/login');
    //action
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
    //assertions
    await expect(page.getByText('You logged into a secure area')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Secure Area');
});