import { createBdd } from 'playwright-bdd';
import { test } from '@playwright/test'

const { AfterStep } = createBdd();

AfterStep(async ({ page }) => { 
  const screenshot = await page.screenshot();
  
  await test.info().attach('screenshot-step', {
    body: screenshot,
    contentType: 'image/png'
  });
});