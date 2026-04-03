import { test, expect } from '@playwright/test'

test.describe('Portfolio - Non-Demo Mode', () => {
  test('homepage loads with hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Alex Rivera/)
    // Hero section content from Drupal
    await expect(page.getByRole('heading', { name: /Alex Rivera/ }).first()).toBeVisible()
  })

  test('homepage displays stats from Drupal paragraphs', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Projects Completed')).toBeVisible()
    await expect(page.getByText('Happy Clients')).toBeVisible()
    await expect(page.getByText('Years Experience')).toBeVisible()
  })

  test('projects listing page shows Drupal content', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Projects')
    await expect(page.getByText('NutriTrack Health Dashboard').first()).toBeVisible()
    await expect(page.getByText('CraftMarket E-Commerce Platform').first()).toBeVisible()
    await expect(page.getByText('OpenForm - Open Source Form Builder').first()).toBeVisible()
  })

  test('project detail page renders via route query', async ({ page }) => {
    await page.goto('/projects/nutritrack-health-dashboard')
    await expect(page.getByRole('heading', { name: /NutriTrack/ }).first()).toBeVisible()
    await expect(page.getByText('The Challenge').first()).toBeVisible()
  })

  test('skills listing page shows Drupal content', async ({ page }) => {
    await page.goto('/skills')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Skills')
    await expect(page.getByText('React & Next.js').first()).toBeVisible()
    await expect(page.getByText('TypeScript').first()).toBeVisible()
  })

  test('skill detail page renders via route query', async ({ page }) => {
    await page.goto('/skills/react')
    await expect(page.getByText('React').first()).toBeVisible()
    await expect(page.getByText('Expert').first()).toBeVisible()
  })

  test('testimonials listing page shows Drupal content', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Testimonials')
    // Check for client names rendered in cards
    await expect(page.getByText('NutriTrack Testimonial').first()).toBeVisible()
    await expect(page.getByText('CraftMarket Testimonial').first()).toBeVisible()
  })

  test('about page renders body from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible()
    await expect(page.getByText('Portland').first()).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/projects"]').first()).toBeVisible()
    await expect(page.locator('a[href="/skills"]').first()).toBeVisible()
  })
})
