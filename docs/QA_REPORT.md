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
