# Jira: CPT-9045

**Title:** Infinite Loading on /explore-careers/job-roles (Content fails to hydrate)  
**Issue Type:** Bug  
**Priority:** P1 - Highest  
**Severity:** S1 - Blocker  
**Component:** `frontend-web`, `api-gateway`  
**Assignee:** Unassigned  
**Reporter:** L. Tavares  
**Status:** TO DO  

---

## Description
The Job Roles grid component fails to render, locking the UI in a permanent loading state (red partial spinner). The failure prevents users from discovering career paths, blocking the primary acquisition funnel for certifications.

## Steps to Reproduce
1. Navigate to production environment: `https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all`
2. Wait for initial React hydration to complete.
3. Scroll down to the category filter section.

## Expected Result
The loading spinner should unmount upon successful API response, and the `<JobRoleGrid />` component should map and render the items.

## Actual Result
The UI is permanently blocked with the spinner. No content is rendered.

## Technical Context / Root Cause Investigation
- **Environment:** Production (`v2.4.1`)
- **Browser:** Chrome v121.0 / Windows 11
- **Network Trace:** The GraphQL/REST fetch request triggered by the page load likely hangs or returns a `5xx` status, and the frontend lacks a proper `try/catch` block to mount the Error Boundary.

**Simulated Console Trace (Assumption based on UI behavior):**
```javascript
// The application is failing to resolve the promise or mapping an undefined payload
Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at JobRoleGrid (job-role-grid.js:42)
    at renderWithHooks (react-dom.production.min.js:150)
```

**cURL to test API endpoint (Needs BE confirmation):**
```bash
curl 'https://www.comptia.org/api/job-roles?page=1&category=all' \
  -H 'accept: application/json' \
  -v
```

## Attachments
- `infinite_loading_screenshot.png` (Attached via Jira UI)
