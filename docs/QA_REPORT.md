# QA report · 2026-10-02

| Check | Result | Evidence / limit |
|---|---|---|
| JavaScript syntax | Pass | `node --check` completed for every JS module |
| Page render smoke check | Pass in Node mock environment | 16 route variants rendered to HTML; partner overview, referrals, payouts and assets also rendered after service load |
| Domain and connected-flow tests | Pass | `npm test`: 8 tests, 0 failures |
| M09 portions | Pass | ₹209 / ₹156.75 / ₹313.50; 500 / 375 / 750 kcal asserted |
| Dispatch arithmetic | Pass | M07 ×2 = ₹538 total and ₹49.80 commission; M11 ×2 = ₹518 total and ₹51.80 commission asserted |
| Referral checkout → commission → explicit log → cancellation | Pass at service level | Automated test creates one order and commission, logs once, deletes log, cancels and reconciles partner figures |
| Sample-photo log, edit and delete | Pass at service level | Rajma 1.5 servings = 750 kcal / 27g protein; editing to one = 500 kcal / 18g, deletion removes it |
| Failed checkout | Pass at service level | Automated test confirms cart survives and no commission is created |
| Seeded partner balances | Pass | Derived ₹2,728 eligible sales, ₹91.60 pending, ₹89.60 approved, ₹91.60 paid, ₹272.80 total commission |
| Prompt's ₹2,730 eligible-sales expectation | Conflict in specification | Specified seed lines and prices add to ₹2,728; details in `DEMO_RULES.md` |
| Browser customer journey | Unverified | Sandbox blocked local HTTP port binding (`PermissionError: Operation not permitted`) |
| Browser partner dashboard and copy/download controls | Unverified | No usable browser was exposed for the local app |
| 360px, 390px, 768px, 1440px screenshots and overflow | Unverified | Browser capture could not run; no screenshots claimed |
| Touch, keyboard, dialog focus and on-screen keyboard | Unverified | Real browser/device testing unavailable |
| Live kedryn.com inspection | Unverified | Prior stakeholder research reports access blocked; no independent live-site inspection here |

The app was not deployed. Browser checks remain a release gate before a client presentation, especially mobile checkout, photo review, partner card layout and dialog focus behavior.

## Screenshot-driven layout fixes

A supplied tracker screenshot showed the five selected-day nutrition values overflowing the narrow right panel and an unstyled upload control. The tracker now uses a two-column metric grid in that panel, a consistent four-action toolbar, and a bundled-sample picker. The HTML route renders and the eight automated tests still pass. A fresh browser screenshot remains unverified in this environment.

A supplied partner screenshot showed three balance cards sitting in a four-column grid and chart bars collapsed to baseline lines. The balance section now uses three columns. The chart renders dated bar heights and values from the filtered commercial rows, including a zero-value cancelled day, and includes a daily data table. Node render inspection found seven bars with the expected ₹498 and ₹518 values; fresh browser visual capture remains unverified.

The user-supplied color reference was sampled for seven exact UI colors. A scan of runtime CSS, HTML, JavaScript SVG generation, and the local fallback SVG found only those colors plus alpha variants of the burgundy. Burgundy/page-cream contrast is 11.9:1 and muted-plum/page-cream is 6.89:1. Automated tests and syntax checks passed after the palette update; browser visual capture remains unavailable.

A later tracker screenshot showed seven-day date labels merging and bars collapsed to the baseline. The trend now renders two wide charts with fixed-height bars, two-line day labels, daily numeric values, and the existing accessible table. Node render inspection found two panels, 14 bars and 14 day labels; the eight automated tests passed. Fresh browser visual capture remains unverified.

A supplied header screenshot showed the customer dropdown expanding the burgundy masthead. Its links now sit in an absolutely positioned desktop panel; the mobile panel stays in normal flow. Structural checks confirmed both layouts and the eight automated tests passed. Browser visual verification remains unavailable.

The visual tokens were updated from the user-provided violet/lime reference. Runtime CSS and SVG colors were scanned for stale burgundy/cream values. Contrast calculations: action violet on warm ivory 7.97:1, near-black on lime 12.9:1. The eight automated tests passed after the update; browser visual capture remains unavailable.
