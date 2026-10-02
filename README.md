# KEDRYN frontend MVP

A local, frontend-only interactive food and nourishment demonstration. All people, businesses, food values, service areas, orders, commercial terms and histories are fictional.

## Run

From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. No build step, account, API key or network service is needed after local files load. The app uses HTML, CSS custom properties and vanilla JavaScript ES modules with hash routes.

## Demo paths

Start at `#/` or use **Explore as customer** and **Explore as gym partner**. The primary customer path is `#/planner` → `#/cart` → `#/checkout` → `#/orders/:id` → `#/tracker`. The partner path is `#/partner` → referrals, payouts and assets. The complete five-minute route is in [docs/DEMO_SCRIPT.md](docs/DEMO_SCRIPT.md).

Customer persona: Asha Demo. Family personas: Asha (vegetarian) and Dev (vegan), both adults. Gym: Forge Fitness — Demo, run by Rohan Demo. Sample delivery PINs: `560001`, `560038`. Gym referral code: `KEDRYN-FORGE`; it attributes orders but does not discount them.

The fixed demo clock is October 2, 2026, 10:00 IST. Deliveries can be scheduled October 3–9. A date/window is one dispatch group. Each group costs ₹40 delivery unless its merchandise is at least ₹500. The fictional commission is 10% of eligible merchandise, excluding delivery and tax. More rules and the seed-sales arithmetic discrepancy are in [docs/DEMO_RULES.md](docs/DEMO_RULES.md).

## State and local services

State is stored under `kedryn.demo.v1` in localStorage. It includes preferences, favourites, cart, plan, orders, diary and partner records. The **Reset demo** control restores the fixtures without clearing any other storage key. If storage is unavailable, changes remain in memory until reload. Another-tab changes show a reload notice.

Mock services use deterministic local delays and return `{ok, data, warnings}` or `{ok:false, error}`. About this demo has one-shot **Fail next checkout** and **Simulate catalog load failure** controls. Checkout uses a key to avoid duplicate orders. Successful checkout commits the order, referral attribution, commission and cart clearing in one state write. Order statuses advance manually. No payment credentials are collected.

Bundled sample-photo choices use predetermined catalog estimates. Arbitrary JPEG, PNG and WebP uploads up to 10MB receive an editable generic sample, never image recognition. Image bytes and object URLs are not stored, transmitted or used for inference; object URLs are released when the review closes or resets. The food diary changes only on explicit confirmation.

The visual colors are sampled from the user-provided reference; exact hex values and their source regions are in [docs/COLOR_PALETTE.md](docs/COLOR_PALETTE.md).

## Structure

- `js/data/`: shared catalog and seed fixtures.
- `js/domain/`: dates, money, nutrition scaling and planner scoring.
- `js/services/mock-api.js`: deterministic local service contracts and state mutations.
- `js/pages/`: route content and interactions.
- `js/app.js`: shell, hash routing and delegated events.
- `css/style.css`: mobile-first visual system and responsive layouts.

## Verify

Run `npm test` for calculation and connected-flow tests. The interface is designed for 360px, 390px, 768px and 1440px. This environment denied local port binding and did not expose a usable browser automation surface, so real browser layouts, touch, keyboard, mobile on-screen keyboard and screenshots remain unverified; see [docs/QA_REPORT.md](docs/QA_REPORT.md). Open the app in a browser to complete those checks before a client presentation.

## Limitations

This is a mock frontend. There are no real orders, payments, authentication, AI inference, delivery tracking, affiliate payouts, subscriptions, credits or message delivery. Nutrition and preparation details require real recipe validation. Ingredient exclusions do not establish cross-contact safety. The food imagery is an explicit local SVG fallback because accurate licensed meal photos were unavailable. The plan builder is bounded and deterministic, not a medical or globally optimal plan. Saved-plan duplication asks for a new start date within the fixed demo schedule and revalidates that range; later production weeks are outside this fixture.
