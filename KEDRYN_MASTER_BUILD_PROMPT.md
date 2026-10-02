# KEDRYN Frontend MVP — Master Build Prompt

## Strategic recommendation

Build KEDRYN around one promise: **familiar food, clearer choices, easier everyday nourishment.** Lead with meals and make planning, ordering, logging, family convenience, and gym referrals feel like connected parts of one product.

The strongest client demonstration is a single transaction moving through the system: a customer plans meals, places a referred order, explicitly logs a meal as eaten, and then sees that same order reflected in the gym partner dashboard.

**Research limitation:** Attempts to access [kedryn.com](https://kedryn.com/) and its www variant through the web reader failed. Indexed searches returned no usable results. Interactive browser inspection was blocked by missing Computer Use permissions, including after retrying following the user's permission update. Consequently, the website context below comes from stakeholder-supplied observations; the live pages and their interactions have not been independently verified.

**Mobile readiness is a release requirement.** The complete customer and gym-partner experiences must work on phones, not just the landing page. This requirement is integrated into the master prompt below.

## Assumptions

- This is a presentation-quality, frontend-only product demonstration.
- The initial catalog is vegetarian, with vegan options, for manageable demo coverage; this is not a claim about Kedryn's actual offering.
- All catalog prices, recipes, nutrition, service areas, commercial rules, customer records, and partner activity are fictional demo fixtures.
- The demo uses a fixed India-time presentation date so history, scheduling, and reset remain reproducible.
- Gym referrals earn a fictional 10% commission on eligible merchandise revenue; referral codes do not provide discounts.
- Ingredient-label education is the single additional showcase. It reinforces food transparency without introducing another major product.
- Real operations, recurring billing, clinical recommendations, and production integrations remain outside scope.

---

# MASTER BUILD PROMPT — BEGIN

You are the product designer, UX architect, and frontend engineer responsible for implementing a complete, polished KEDRYN frontend MVP.

Build the working application, verify its critical journeys, and deliver the source files and handover documentation. Do not stop at wireframes, a landing page, static dashboard screenshots, or disconnected feature mockups.

## 1. Objective and product positioning

KEDRYN is an India-oriented food and nourishment brand. This MVP must demonstrate a persuasive product vision to the client while remaining a maintainable starting point for future development.

Use this positioning:

> **KEDRYN brings familiar Indian meals, clear meal information, and everyday planning together—making it easier to order for yourself, coordinate a household, and connect nourishment with your gym community.**

The primary product is prepared food. Nutrition planning supports food decisions. Broader wellness remains visible but secondary.

Build two connected journeys:

**Customer**

Discover → Personalize → Plan → Order → Explicitly log food → View progress.

**Gym partner**

Share referral → Customer places attributed order → Estimated commission appears → Partner reviews performance.

Primary audiences:

- Adults seeking convenient familiar meals and understandable nutrition information.
- Adults coordinating different household preferences within one delivery.
- Gym owners evaluating a possible referral partnership.

Success means a presenter can complete the connected demonstration in approximately five minutes without dead ends, hidden prerequisites, or inconsistent totals.

The complete product must be mobile-first and responsive. Every core journey must work using touch on a phone, including the planner, checkout, photo logger, and partner dashboard.

## 2. Research provenance and claim boundaries

The source website is https://kedryn.com/.

Previous research attempts could not retrieve the site or inspect its interactive sections. Browser access was blocked by missing Computer Use permissions, including a retry after the user reported updating permissions. Therefore, treat the following as **stakeholder-supplied observations of the existing website**, not independently verified findings:

- Burgundy/plum, cream, warm neutrals, serif headings, and restrained visual styling.
- INR prices, delivery PIN codes, and Indian meals.
- Breakfast, lunch, snacks, and dinner organization.
- Nutrition estimates, favourites, scheduling, meal plans, and credits.
- Example meal names: Pav Bhaji, Tawa Pulao, Margherita Protein Pizza, Paneer Makhani, High Protein Khichdi, and Rajma Rice Bowl.
- Family ordering supporting different preferences within one shared delivery.
- Partnership registration preview including gyms.
- Knowledge content covering ingredient labels, an ingredient library, planning, and education.
- Energy content covering training, coaches, and a gym network.
- Development content covering workplace meals and group budgets.
- Recovery and Yoga activity/session planning.
- Orders and several services described as previews.
- Development-stage qualifications around protein atta, alternative bakery bases, lentil-based products, and Daily Blend.

Create `docs/RESEARCH_AND_CLAIMS.md` distinguishing:

| Category | Treatment |
|---|---|
| Supplied current-site observations | Preserve their context; do not call them independently verified |
| Requested new MVP capabilities | Connected planner, photo-assisted logging simulation, functioning affiliate dashboard |
| Recommended additions | Customer home, lightweight adult preferences, ingredient-label explainer |
| Invented demo rules/data | Every catalog value, serviceable PIN, commercial rule, customer, order, commission, and payout |

If website access becomes available, inspect representative public interactions without submitting information or placing orders. Record the exact URLs and inspection date. Do not block implementation on access, and do not silently replace this specification with an attempt to rebuild the entire existing site.

Claim rules:

- Use “nutrition estimate,” “demo recipe,” and “preview” where appropriate.
- Do not turn recipe targets, development concepts, or proposed services into established capabilities.
- Do not claim certified nutrition, allergen-free preparation, clinical outcomes, guaranteed weight loss, or verified food recognition.
- Do not fabricate testimonials, customer logos, partner counts, certifications, press coverage, ratings, or delivery-performance statistics.
- Do not infer nutrition or allergen status from a meal name.
- Historical names containing “Protein” or “High Protein” remain names, not substantiated claims.
- Keep development concepts out of the purchasable catalog.
- All supplied nutritional values are fictional illustrative estimates.
- Clearly identify fictional people and businesses as demo personas.
- Avoid presenting any default calorie value as a personal recommendation.
- Do not create child profiles, child calorie targets, or medical meal plans.

## 3. Non-negotiable technical boundaries

Use:

- Semantic HTML5.
- CSS with custom properties.
- Vanilla JavaScript using ES modules.
- Hash-based routing.
- A simple local static server.
- Local assets and deterministic local services.
- Versioned localStorage for persistent demo state.

Do not substitute React, Next.js, Vue, a backend, authentication, serverless functions, or paid APIs.

No real:

- Payments or payment credential collection.
- Authentication or account creation.
- AI inference.
- Orders or restaurant communications.
- Delivery tracking.
- Affiliate payouts.
- Email, SMS, WhatsApp, or other message delivery.
- External form submission or analytics tracking.

Essential journeys must work after the local app and bundled assets load, without network access.

Do not publish, deploy, create hosting accounts, or connect production services unless separately requested.

Always show a discreet but readable indicator:

> **Interactive demo · No real orders or payments**

Provide visible:

- **Explore as customer**
- **Explore as gym partner**
- **Reset demo**

Role switching is navigation between demo personas, not authentication.

## 4. Prioritized scope

Implement in this order, but deliver all required scope.

**Foundation**

Shared fixtures, state store, routing, calculations, visual tokens, app shell, demo indicator, reset, accessibility primitives.

**Core product**

1. Food-led landing page.
2. Discovery, details, cart, checkout, order history, and simulated order status.
3. Catalog-only meal planner.
4. Photo-assisted logging simulation and nutrition diary.
5. Connected gym referral dashboard.

**Supporting product**

- Adult goals and preferences.
- Customer home.
- Favourites and reorder.
- Saved weekly plan and repeat-week preview.
- Two-adult family ordering with one compatible delivery.
- Ingredient-label explainer.

**Discovery-only content**

Knowledge, Energy, Development, Recovery, and Yoga.

Do not add coach booking, exercise tracking, live chat, social feeds, rewards systems, actual subscriptions, credit wallets, or workplace administration.

## 5. Information architecture and routes

Use these routes or a directly equivalent static-host-safe structure:

| Route | Purpose |
|---|---|
| `#/` | Public landing page |
| `#/home` | Customer overview |
| `#/meals` | Catalog, search, filters, favourites mode |
| `#/meals/:mealId` | Meal detail |
| `#/planner` | Builder and active plan |
| `#/plans` | Saved plans and repeat-week preview |
| `#/family` | Adult household ordering |
| `#/cart` | Cart and delivery groups |
| `#/checkout` | Customer details, referral, totals, mock payment |
| `#/orders` | Order history |
| `#/orders/:orderId` | Confirmation, schedule, simulated status, log/reorder |
| `#/tracker` | Diary, photo workflow, manual entry, trends |
| `#/preferences` | Goals and adult food preferences |
| `#/knowledge/labels` | Ingredient-label showcase |
| `#/wellness` | Compact, qualified pillar discovery |
| `#/partner` | Partner overview |
| `#/partner/referrals` | Attributed orders and customer summaries |
| `#/partner/payouts` | Estimated balances and payout history |
| `#/partner/assets` | Downloadable assets and copy |
| `#/about-demo` | Mock rules, limits, reset, state-testing tools |

Support URL query state where useful:

- `#/meals?window=lunch&ref=KEDRYN-FORGE`
- `#/meals?favourites=1`
- `#/tracker?date=2026-10-02`

Handle browser back/forward, refresh on a nested hash route, unknown routes, missing IDs, and empty search results.

Customer navigation:

- Meals
- Meal planner
- Food log
- Saved plans
- Cart

Expose customer home and orders through a clearly labelled customer menu.

Partner navigation:

- Overview
- Referrals
- Payouts
- Marketing assets
- Switch to customer

Never make partner screens appear to be customer nutrition administration.

## 6. Art direction and design system

Design a warm editorial food brand with a precise, calm product interface.

The landing page should resemble a considered food publication combined with a useful ordering service. Dashboards should inherit the same typography, color, and spacing while reducing decorative elements.

### Color tokens

```css
--color-plum-950: #301523;
--color-plum-800: #532438;
--color-plum-700: #6A3047;
--color-cream: #FAF6EF;
--color-surface: #FFFCF7;
--color-sand: #EEE4D7;
--color-sage: #DDE6D7;
--color-sage-ink: #334A38;
--color-charcoal: #292522;
--color-muted: #625A54;
--color-border: #D8CEC2;
--color-danger: #9D303B;
--color-warning-bg: #FFF0CC;
--color-warning-ink: #674510;
--color-focus: #1F6570;
```

Check actual color pair contrast; adjust tokens if needed to meet WCAG AA. Never rely on color alone.

### Typography

Use locally bundled, licensed fonts if obtainable:

- Display: Fraunces, regular/medium.
- Interface: Manrope, regular/medium/semibold.

Include license files. Fall back to Georgia and a system sans-serif stack if local font files are unavailable.

| Use | Desktop | Mobile |
|---|---:|---:|
| Hero | 64px / 1.05 | 40px / 1.1 |
| Page heading | 44px / 1.12 | 32px / 1.15 |
| Section heading | 36px / 1.15 | 28px / 1.2 |
| Card heading | 22px / 1.25 | 20px / 1.3 |
| Body | 16px / 1.6 | 16px / 1.6 |
| Supporting | 14px / 1.5 | 14px / 1.5 |
| Small metadata | 12px / 1.45 | 12px / 1.45 |
| Dashboard KPI | 32px / 1.1 | 28px / 1.15 |

Use tabular numerals for prices and metrics. Do not use tiny low-contrast legal text to carry important limitations. Form inputs must use at least 16px text on mobile.

### Spacing and geometry

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;

--radius-control: 10px;
--radius-card: 18px;
--radius-dialog: 24px;
--content-max: 1240px;
```

- Desktop page gutters: 40–64px.
- Tablet: 24–32px.
- Mobile: 16–20px.
- Touch targets: at least 44 × 44px.
- Primary button height: 48px.
- Form fields: minimum 48px.
- Section spacing: 80–96px desktop, 48–64px mobile.
- Soft shadows only for lifted elements such as drawers and dialogs.
- Use thin borders and surface differences for most structure.

### Photography

- Warm natural light, realistic Indian meals, appetizing but credible portions.
- Hero uses one dominant food image with asymmetric editorial composition.
- Meal images use a consistent 4:3 crop.
- Detail pages use a larger 4:3 or 3:2 image.
- Show the actual food represented. Never use a curry image for a pizza or an unrelated salad for khichdi.
- Do not scrape images from the source site without permission.
- Use supplied assets, licensed reusable photography, or original assets with recorded provenance.
- Bundle assets locally.
- If an accurate image cannot be obtained, use an intentional local fallback showing the meal name and “Photo coming soon.” Do not disguise an incorrect image as the meal.
- Provide a polished local SVG fallback, not a broken-image icon.
- Record source URL, license, attribution, and edits in `ASSET_LICENSES.md`.

### Motion

- Hover and state transitions: 140–180ms.
- Drawers/dialogs: approximately 200ms.
- No scroll hijacking, autoplay video, parallax dependency, or perpetual decorative motion.
- Honor `prefers-reduced-motion`.
- Functional progress remains understandable with animation disabled.

Avoid generic SaaS hero graphics, glass panels, neon gradients, emoji icons, repetitive card grids, empty charts, and excessive pills.

Use small consistent SVG icons with accessible names where needed.

## 7. Landing page and draft copy

Build a complete page with deliberate visual variation.

### Navigation

Wordmark; Meals; Meal planner; For families; For gyms; More.

Actions: customer demo, partner demo, cart.

The brand can use a typographic KEDRYN wordmark unless a licensed logo is supplied. Do not invent a trademark symbol.

### Hero

Eyebrow:

> Everyday nourishment, thoughtfully planned

Headline:

> **Familiar food. Clearer choices.**

Body:

> Explore Indian favourites with meal information you can understand. Plan your next few days, order around your routine, and bring different household preferences into one delivery.

Primary CTA:

> Explore meals

Secondary CTA:

> Build my meal plan

Support line:

> A preview of the KEDRYN experience. Meals, prices, nutrition and delivery availability shown here are illustrative.

Composition: text left, substantial food photograph right, a restrained meal-information annotation referencing a real shared catalog item. Do not hardcode a disconnected nutrition number. On mobile, stack copy and photography while keeping the primary CTA near the introductory content.

### Delivery PIN

Heading:

> Let's start with your delivery area.

Label: “Delivery PIN code”

Prefill `560001` for the demo.

Button: “Check availability”

Support:

> Demo serviceability check. Try 560001 or 560038.

Success:

> This PIN is supported in the demo. Choose your meals and delivery window.

Unsupported:

> This PIN isn't supported in the demo. Try a sample PIN to continue.

Malformed:

> Enter a valid six-digit PIN code.

### How it works

Use a three-step editorial strip rather than three generic feature cards.

1. **Find food you look forward to.** Browse by meal time, ingredients, price, and nutrition estimates.
2. **Make it fit your day.** Choose portions, plan delivery windows, or build a schedule from the menu.
3. **Keep your day in view.** Review upcoming meals and log what you actually eat.

CTA: “Try the complete customer demo.”

### Distinctive USP section

Heading:

> Everyday food, with more of the details that matter.

Four concise themes:

- **Familiar comes first.** Indian favourites and everyday formats that feel at home in your routine.
- **See what's in your meal.** Review ingredients, stated allergens, serving sizes, and estimated nutrition before choosing.
- **Plan from food you can order.** Build a schedule using the same meals available in the catalog.
- **One household. Different preferences.** Choose meals for each adult and combine compatible delivery windows.

Add a small qualification:

> Recipes and nutrition are demo examples. Production information requires recipe validation.

Do not imply that transparent ingredient information guarantees allergy safety.

### Featured meals

Show four shared catalog records:

- Rajma Rice Bowl
- Paneer Makhani
- High Protein Khichdi
- Margherita Protein Pizza

Each includes image, serving size, price, calories, protein estimate, favourite action, detail link, and add action. Respect availability: M15's add action is disabled with a clear reason.

Meal cards use the exact shared data. Provide the general nutrition disclaimer close to the section.

### Interactive planning preview

Heading:

> Give tomorrow a little less guesswork.

Show a real lunch-and-dinner preview using catalog IDs.

Allow the visitor to change:

- Vegetarian or vegan preference.
- Selected-meal budget.
- One meal using a swap action.

Immediately recalculate price and nutrition.

Label:

> Lunch + dinner subtotal—not full-day nutrition.

CTA:

> Continue with this plan

Transfer the preview choices into the planner instead of discarding them.

### Family section

Heading:

> Different plates. One shared delivery.

Body:

> Choose separately for two adults, review ingredients together, and bring compatible meals into one delivery window.

CTA:

> Try family ordering

Caption:

> Adult preferences only in this demo. Shared preparation may involve cross-contact.

### Gym partnership section

Heading:

> Bring everyday nourishment into your gym community.

Body:

> Preview a partner experience built around a referral code, attributed orders, and clear estimated earnings.

CTA:

> Explore the gym partner demo

Qualification:

> Fictional partner data and illustrative commission rules. No live partnership or payout is created.

### Wider wellness section

Heading:

> Nourishment is the starting point.

Use one compact editorial band introducing:

- Knowledge: understand ingredients and labels.
- Energy: explore movement and training concepts.
- Development: discover workplace nourishment ideas.
- Recovery: make room for rest and recovery.
- Yoga: explore session-planning concepts.

Only Knowledge opens the working ingredient-label showcase. Other pillars open scoped content in `#/wellness`, clearly marked “Concept preview.” Do not create booking actions that imply availability.

### Development concepts

Use a small expandable note in the wellness area:

> Some concepts referenced by KEDRYN—including protein atta, alternative bakery bases, lentil-based products, and Daily Blend—remain development-stage ideas. They are not available to purchase in this demonstration.

### FAQs

Implement accessible accordions with these answers:

- **Can I place a real order here?** No. Checkout creates a local demo order and does not charge you.
- **Are the nutrition values verified?** No. This demonstration uses illustrative estimates. Final values require recipe and portion validation.
- **Does the planner create recipes?** It schedules prepared meals from this demo's Kedryn catalog.
- **Does the photo tool recognize my food?** Bundled photos have predetermined estimates. Uploaded photos receive an editable sample breakdown; no image-recognition service runs.
- **Can I order for more than one person?** The family preview supports separate preferences for two adults and one compatible delivery.
- **Does a gym code give a discount?** Not in this demo. It attributes the order to the gym without changing the price.
- **Are listed meals safe for my allergy?** The demo can exclude stated ingredients and allergens, but it cannot establish cross-contact safety. Final ingredient and preparation information must be confirmed with the business.

### Final CTA

Heading:

> Start with your next meal.

Primary: “Explore meals”

Secondary: “Build a meal plan”

### Footer

Include meaningful navigation, demo information, ingredient-label education, partner demo, and reset.

Do not invent real contact details, social accounts, registration numbers, certifications, or legal policies. Explain local storage and photo handling in the demo information page.

## 8. Shared seeded meal catalog

Create these 20 records with stable IDs. All prices and values below are invented demo assumptions.

Nutrition is per one standard serving. `C` means carbohydrates and `Fi` means fibre, all in grams.

| ID | Meal | Window | Serving | INR | kcal | P | C | F | Fi |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|
| M01 | Vegetable Poha | Breakfast | 250g | 129 | 340 | 8 | 57 | 9 | 5 |
| M02 | Moong Dal Chilla with Mint Chutney | Breakfast | 240g | 169 | 330 | 18 | 43 | 10 | 8 |
| M03 | Idli, Sambar & Coconut Chutney | Breakfast | 320g | 149 | 390 | 12 | 66 | 9 | 7 |
| M04 | Paneer Bhurji & Whole-Wheat Roti | Breakfast | 300g | 219 | 510 | 27 | 48 | 23 | 7 |
| M05 | Pav Bhaji | Lunch, Dinner | 350g | 229 | 540 | 14 | 77 | 20 | 10 |
| M06 | Tawa Pulao | Lunch, Dinner | 350g | 199 | 480 | 12 | 78 | 13 | 8 |
| M07 | Paneer Makhani with Rice | Lunch, Dinner | 360g | 249 | 640 | 26 | 70 | 28 | 6 |
| M08 | High Protein Khichdi | Lunch, Dinner | 350g | 219 | 470 | 24 | 64 | 13 | 11 |
| M09 | Rajma Rice Bowl | Lunch, Dinner | 350g | 209 | 500 | 18 | 83 | 10 | 13 |
| M10 | Chole & Jeera Rice | Lunch, Dinner | 350g | 209 | 530 | 19 | 85 | 13 | 14 |
| M11 | Tofu Millet Bowl | Lunch, Dinner | 350g | 259 | 490 | 26 | 60 | 17 | 10 |
| M12 | Roasted Chana Chaat | Snacks | 180g | 129 | 270 | 13 | 42 | 6 | 10 |
| M13 | Hung Curd & Fruit Cup | Snacks | 220g | 159 | 250 | 17 | 31 | 7 | 3 |
| M14 | Sweet Potato Chaat | Snacks | 220g | 139 | 260 | 5 | 52 | 5 | 7 |
| M15 | Margherita Protein Pizza | Lunch, Dinner | 300g | 279 | 650 | 30 | 80 | 24 | 8 |
| M16 | Soya Keema & Rotis | Lunch, Dinner | 330g | 229 | 520 | 32 | 63 | 15 | 13 |
| M17 | Dal Tadka & Brown Rice | Lunch, Dinner | 350g | 199 | 480 | 19 | 77 | 11 | 11 |
| M18 | Palak Paneer & Rotis | Lunch, Dinner | 330g | 249 | 550 | 29 | 49 | 27 | 9 |
| M19 | Vegetable Dalia | Breakfast | 300g | 149 | 340 | 11 | 58 | 8 | 9 |
| M20 | Sesame Tofu Wrap | Lunch, Dinner | 280g | 239 | 470 | 25 | 54 | 17 | 9 |

Use the following canonical ingredient and allergen assumptions. These are fictional recipes, not claims about actual Kedryn formulations.

| ID | Demo ingredients | Declared allergens | Vegan |
|---|---|---|---|
| M01 | Rice flakes, peas, onion, peanut, lemon, mustard seed, oil, spices, salt | Peanut | Yes |
| M02 | Moong dal, onion, coriander, mint, lemon, oil, spices, salt | None declared in fixture | Yes |
| M03 | Rice, urad dal, toor dal, vegetables, coconut, tamarind, oil, spices, salt | None declared in fixture | Yes |
| M04 | Paneer, whole-wheat flour, onion, tomato, oil, spices, salt | Milk, wheat/gluten | No |
| M05 | Wheat pav, potato, peas, cauliflower, tomato, butter, oil, spices, salt | Wheat/gluten, milk | No |
| M06 | Rice, peas, carrot, beans, capsicum, tomato, oil, spices, salt | None declared in fixture | Yes |
| M07 | Paneer, rice, tomato, cashew, cream, butter, spices, salt | Milk, cashew/tree nut | No |
| M08 | Rice, moong dal, soya granules, vegetables, oil, spices, salt | Soy | Yes |
| M09 | Kidney beans, rice, onion, tomato, oil, spices, salt | None declared in fixture | Yes |
| M10 | Chickpeas, rice, onion, tomato, cumin, oil, spices, salt | None declared in fixture | Yes |
| M11 | Tofu, millet, chickpeas, carrot, greens, lemon, oil, spices, salt | Soy | Yes |
| M12 | Roasted chickpeas, onion, tomato, cucumber, lemon, spices, salt | None declared in fixture | Yes |
| M13 | Hung curd, banana, apple, pomegranate | Milk | No |
| M14 | Sweet potato, onion, coriander, lemon, oil, spices, salt | None declared in fixture | Yes |
| M15 | Wheat flour, soya flour, mozzarella, tomato, basil, olive oil, yeast, salt | Wheat/gluten, soy, milk | No |
| M16 | Soya granules, whole-wheat flour, peas, onion, tomato, oil, spices, salt | Soy, wheat/gluten | Yes |
| M17 | Toor dal, brown rice, onion, tomato, garlic, oil, spices, salt | None declared in fixture | Yes |
| M18 | Paneer, spinach, whole-wheat flour, onion, tomato, oil, spices, salt | Milk, wheat/gluten | No |
| M19 | Broken wheat, peas, carrot, beans, onion, oil, spices, salt | Wheat/gluten | Yes |
| M20 | Tofu, whole-wheat flour, cabbage, carrot, sesame, lemon, oil, spices, salt | Soy, wheat/gluten, sesame | Yes |

All meals are vegetarian in this seed catalog.

Ingredient tokens must support exclusion matching. “Milk” exclusion must also match paneer, curd, butter, cream, and mozzarella through an explicit allergen/ingredient mapping. Do not use loose substring matching as the only safety filter.

For all meals, use `crossContactStatus: "unknown"` and display:

> Ingredient exclusions use stated demo recipes. Cross-contact safety is not established.

Do not provide an “allergen-free” badge.

### Portions

- Standard: multiplier `1`.
- Light: multiplier `0.75`.
- Generous: multiplier `1.5`.
- M07, M08, M09, M10, M11, M17 support all three.
- All other records support Standard only.

For flexible portions:

- Serving grams and nutrition scale linearly.
- Price scales linearly in integer paise, rounded half-up once per unit portion.
- This pricing behavior is an explicit demo assumption.

Do not invent different nutrition values in detail screens, plan cards, or the tracker.

### Availability fixtures

- M15 is unavailable throughout the demo schedule and remains visible with an explanation.
- M18 is unavailable for dinner on `2026-10-04`.
- Other meals are available in their listed windows.
- No inventory quantities or stock countdowns.

Add original descriptions and brief preparation notes derived from these ingredient fixtures. Do not invent gluten-free kitchens or special manufacturing processes.

Calories are an independent recipe estimate. They need not exactly equal a `4/4/9` macro calculation because of rounding and fibre conventions; explain this in the data documentation.

## 9. Food discovery, detail, and ordering

### Catalog

Support:

- Search by name and ingredient.
- Meal-window tabs: All, Breakfast, Lunch, Snacks, Dinner.
- Vegetarian/vegan selection.
- “Exclude stated allergens” multi-select.
- Ingredient exclusions.
- Price range.
- Minimum estimated protein per standard serving.
- Maximum calories per standard serving.
- Available-only toggle for selected date/window.
- Sort by recommended, price ascending/descending, protein descending, calories ascending.
- Favourite toggle.
- Clear individual filters and clear all.
- Result count.
- URL-preserved query/filter state where practical.

Logic:

- Filters across categories combine using AND.
- Multiple allergens mean exclude any matching allergen.
- All selected ingredient exclusions apply.
- Clearly state that catalog price/nutrition filters use the standard serving.
- Stable sort ties by meal ID.
- Use fixture `featuredRank` for “Recommended.”
- No-results state offers a one-action filter reset without silently clearing exclusions.

### Meal cards

Include:

- Accurate image or intentional fallback.
- Name, short descriptor, standard serving.
- Price.
- Calories and protein estimate.
- Dietary text.
- Availability.
- Favourite action with `aria-pressed`.
- Detail link.
- Add action that selects a valid date/window/portion.

Unavailable meals may be viewed and favourited but cannot be added.

### Meal detail

Show:

- Image, description, serving size, price.
- Calories, protein, carbohydrates, fat, and fibre.
- Ingredients.
- Declared allergens.
- Dietary tags.
- Preparation notes.
- Available meal windows.
- Date-specific availability.
- Portion control, supported options only.
- Quantity, integer 1–10.
- Date/window control.
- Adult household assignment when relevant.
- Nutrition and price recalculation.
- Clear add confirmation with cart link.

### Cart

Group items by delivery date and window.

Each line retains:

- Meal ID.
- Portion ID.
- Quantity.
- Delivery date/window.
- Optional adult member.
- Optional source plan-item ID.

Line identity includes those fields. Do not merge different dates, portions, or household members.

Allow quantity edits, line removal, delivery edits, and opening meal details.

Show a persistent mobile checkout summary without covering controls or content.

Empty cart offers “Explore meals” and “Build a meal plan.”

### Delivery rules

Use these explicit fictional rules:

- Demo clock: `2026-10-02T10:00:00+05:30`.
- Ordering range: `2026-10-03` through `2026-10-09`.
- No same-day ordering.
- Serviceable PINs: `560001`, `560038`.
- Breakfast: 08:00–10:00 IST.
- Lunch: 12:00–14:00 IST.
- Snacks: 16:00–18:00 IST.
- Dinner: 19:00–21:00 IST.
- Each distinct date/window is one dispatch group.
- ₹40 delivery per dispatch group.
- Delivery waived for a group with merchandise subtotal of at least ₹500.
- No discount promotion in this version.
- Additional tax: ₹0 for the demo; this is not production tax guidance.
- One checkout may contain multiple clearly displayed scheduled deliveries.

Explain the delivery charge beside the total.

### Checkout

Prefill fictional details:

- Name: Asha Demo.
- Email: `asha@example.test`.
- Phone: `9000000000`, labelled fictional.
- Address: `12 Sample Street, Demo Layout`.
- City: Bengaluru.
- PIN: `560001`.

Encourage presenters to keep sample details; no information leaves the browser.

Validate:

- Name length 2–80.
- Basic email format.
- Ten-digit phone format, explicitly format validation only.
- Address length 10–200.
- Six-digit PIN and mocked serviceability.
- At least one valid cart line.
- Quantities, portions, delivery dates/windows, and availability.
- Referral code validity when entered.

Use inline errors and an error summary that links to fields.

Totals:

- Merchandise subtotal.
- Discount: ₹0.
- Delivery charges by dispatch group.
- Additional tax: ₹0, demo assumption.
- Grand total.

Payment action:

> **Simulate payment & place demo order**

Do not ask for card numbers, UPI IDs, bank details, OTPs, or identity documents.

Disable duplicate submission while processing. Use idempotency as well as button disabling.

Provide an intentional mock payment-failure state through demo tools. Preserve the cart and form values after failure.

### Order confirmation and history

Persist the mock order. Show its stable order number, receipt, schedule, totals, referral attribution, and next actions:

- View order.
- Log a meal as eaten.
- Reorder.
- View partner attribution when applicable.

Delivery status is manual simulation:

Scheduled → Preparing → Out for delivery → Delivered.

Use a labelled “Simulate next status” action. Do not display a live map, courier identity, or false real-time ETA.

An order becomes delivered when every dispatch group is delivered.

Allow whole-order cancellation before any dispatch is delivered. No partial cancellation in this MVP.

Reorder uses current catalog prices and current availability. Ask for replacement dates. Explain changes instead of copying expired dates or unavailable meals.

## 10. Catalog-only meal planner

Frame this as prepared-meal scheduling, not home-cooking recipe generation.

Title:

> A meal plan made from the menu.

Subcopy:

> Choose your preferences and schedule Kedryn meals for delivery. Recommendations are generated locally for this demo.

Show a persistent “Simulated planning” label near the generation action.

### Builder fields

- Adult goal: Everyday balance, Protein focus, Routine and convenience.
- Editable daily calorie/protein goals for tracker context.
- Separate editable calorie/protein targets for the selected plan slots.
- Vegetarian/vegan preference.
- Declared allergen exclusions.
- Ingredient exclusions.
- Merchandise budget per selected day.
- Days: 1–7 within the ordering range.
- Meal slots selected from breakfast/lunch/snacks/dinner.
- Optional training-day dates.
- Optional training-day protein emphasis entered by the user.
- Default portion preference.

Never automatically calculate goals from body measurements. No body measurements are needed.

Default demonstration:

- Three days: October 3–5.
- Lunch and dinner.
- Vegetarian.
- No exclusions.
- ₹500 merchandise budget per day.
- Selected-meal target: 1,200 kcal and 60g protein per day.
- Daily tracker targets separately set to 2,000 kcal and 100g protein as editable sample values.

State:

> You are planning lunch and dinner. These totals cover selected meals only.

If all four slots are selected, still explain that only planned food is counted; snacks and drinks outside the plan are not inferred.

### Deterministic algorithm

Implement an understandable local recommendation service:

1. Validate inputs.
2. Build candidates per date/slot.
3. Apply dietary, declared-allergen, ingredient-exclusion, and date/window availability constraints first.
4. Include only supported portions.
5. Treat the merchandise budget as a hard cap.
6. Treat calorie/protein targets as optimization preferences, never guarantees.
7. Preserve locked items.
8. Exclude unavailable or incompatible candidates.
9. Avoid repeating a meal within a day where a valid alternative exists.
10. Penalize repeated meals across the plan.
11. Score nutrition distance, price, and variety.
12. Return the best valid plan found and explicit warnings.

A bounded beam search is sufficient:

- Build day combinations slot by slot.
- Keep the best 100 valid partial combinations.
- Prune combinations exceeding the daily budget.
- Use a normalized nutrition distance score, for example:

```text
calorieDistance = abs(actualCalories - targetCalories) / max(targetCalories, 1)
proteinDistance = abs(actualProtein - targetProtein) / max(targetProtein, 1)

score =
  0.45 * calorieDistance +
  0.40 * proteinDistance +
  0.10 * repeatedMealPenalty +
  0.05 * budgetUtilizationPenalty
```

Training-day protein emphasis can increase the protein weight; renormalize weights and document the calculation.

Use stable tie-breaking from normalized preferences, date, meal ID, portion ID, and a persisted regeneration counter. No `Math.random()` for recommendations.

Regeneration may deterministically rotate among near-best valid candidates. If only one valid outcome exists, say so.

Do not claim a global optimum from bounded search.

### Infeasible constraints

- If a slot has no safe candidate, leave it visibly unfilled.
- Never silently relax an allergen or ingredient exclusion.
- Never silently exceed the budget.
- If locks alone exceed budget, preserve them and show a conflict requiring the user to change locks or budget.
- If preferences change and a lock becomes incompatible, flag it and block transfer until resolved.
- If targets are missed, show the actual difference.
- Do not describe a partial plan as complete.
- An explicitly acknowledged partial plan may transfer only its valid selected items.

Suggested warning:

> We couldn't fill dinner within these preferences and budget. Your exclusions are still applied.

### Generation state

Use a fixed 900ms local delay with short stages:

- Checking meal availability.
- Comparing selected-meal targets.
- Organizing your schedule.

Announce completion. Allow cancellation. Do not imply that a remote AI model is running.

### Plan results

Provide:

- Mobile day selector and vertical slots.
- Desktop day/week view.
- Daily nutrition totals and merchandise cost.
- Whole-plan totals.
- Estimated delivery charges separately.
- Actual-minus-target differences.
- Clear selected-meal scope.
- Reason for each recommendation based on real constraints.

Example explanation:

> Available for Tuesday lunch, fits your vegan preference, and contributes 26g of estimated protein.

Actions:

- Swap.
- Lock/unlock.
- Regenerate unlocked items.
- Change supported portion.
- Change servings/quantity 1–3.
- Remove an item.
- Save plan.
- Add selected days.
- Add whole plan.

Swaps must obey the same hard constraints. Show the prospective nutrition/cost difference before confirmation.

Every edit recalculates all affected totals immediately.

Adding a plan to the cart preserves dates, slots, quantities, portions, and household assignment. If the same plan revision is transferred twice, offer “Replace previously added items” or “Add another copy”; never silently duplicate.

## 11. Photo-assisted calorie and macro tracker

Use original KEDRYN branding. Borrow only the general concept of photo-assisted review, not another product's branding, screen composition, or proprietary assets.

Title:

> A clearer view of what you ate.

Top-level actions:

- Try a sample photo.
- Upload a photo.
- Search Kedryn meals.
- Add food manually.

### Photo workflow

Photo → Suggested items → Review quantities → Confirm → Update diary.

Bundled samples:

1. Rajma rice bowl: 1 × M09.
2. Moong dal chilla: 1 × M02.
3. Paneer meal: 1 × M07.

Use accurately matching local images. Each sample has a deterministic predefined result.

Uploading:

- Accept JPEG, PNG, and WebP up to 10MB.
- Reject unsupported file types and corrupt images with clear errors.
- Preview using an object URL.
- Revoke object URLs when replaced, closed, or reset.
- Do not retain uploads in localStorage.
- Do not transmit files.
- Do not infer image contents.

For arbitrary uploads show:

> This demo does not recognize uploaded food. The items below are a sample breakdown—replace or edit them before confirming.

Use a deliberately generic default such as “Sample food item,” with a visible editable standard-serving estimate. Never describe that default as detected food.

No confidence percentages.

### Suggested item editor

Each item has:

- Editable food name.
- Base serving unit and amount.
- Calories, protein, carbohydrates, fat, fibre per base serving.
- Consumed amount.
- Calculated nutrition.
- Remove action.
- Add another item action.

Catalog-derived items retain an identifiable catalog source. If the user overrides their base values, label them as edited estimates.

Portion controls must use normalized data. Examples:

- 1.5 standard servings of M09 = 750 kcal, 27g protein.
- 175g of a 350g standard M09 serving = 250 kcal, 9g protein.

Nutrition uncertainty copy:

> Portion size and preparation can change these estimates. Review quantities before logging.

Confirmation is required before the diary changes.

### Diary

Support:

- Date selection.
- Meals grouped into breakfast/lunch/snacks/dinner.
- Edit and delete entries.
- Selected-day calories, protein, carbohydrates, fat, and fibre.
- User-entered daily targets.
- “Remaining” when below target.
- “Over selected target by…” when above.
- No negative “remaining” labels.
- Seven-day trend.
- Text summary and accessible data table.

Use seven days of fictional seeded food-log entries. Mark seeded history as sample history.

Display calorie and protein trends in separate views or clearly labelled scales. Avoid a confusing dual-axis chart.

### Purchased-meal logging

Ordering never changes nutrition totals.

Each order line supports “Log as eaten.” The user selects:

- Diary date.
- Meal slot.
- Number of purchased servings/units eaten.
- Optional fractional consumption.

Track already logged quantity against the purchased order line.

- Prevent double-click duplicates with an idempotency token.
- Show the remaining unlogged quantity.
- Disable further purchase-linked logging when fully logged.
- Additional unrelated food can still be logged manually.
- Editing/deleting a purchase-linked entry updates its logged-quantity relationship.
- Repeated rendering or refreshing must not re-log food.

A customer may log a scheduled item for demonstration, but the UI must explain that this is an explicit eating record and does not update delivery status.

### Optional remaining-target suggestions

After logging, show up to three available catalog meals that fit adult preferences and are relevant to remaining selected targets.

Explain the basis. Do not promise an exact match or encourage compensatory eating. If no suitable candidates exist, show a calm empty state.

## 12. Gym-owner affiliate dashboard

Use a fictional gym:

- ID: `GYM01`
- Name: Forge Fitness — Demo
- Owner: Rohan Demo
- Referral code: `KEDRYN-FORGE`
- Commission: 10%
- All records explicitly fictional.

Referral URL:

```text
{current static app base URL}#/meals?ref=KEDRYN-FORGE
```

Generate the link from the actual app base, not `kedryn.com`.

Provide a working copy action. If Clipboard API access fails, reveal a selectable text field and a manual-copy instruction.

Omit QR code unless it is generated locally and verified to encode the actual link correctly. Do not use a decorative QR image.

### Referral behavior

- Normalize case and trim whitespace.
- Valid code attributes the order.
- It does not change the price.
- A referral link can prefill a visible referral chip.
- The customer can remove or replace attribution before checkout.
- Invalid codes show an inline error and block submission until corrected or removed.
- Snapshot the selected attribution at order creation.
- No retroactive attribution editing.
- No invisible cookie-based attribution.
- No cross-device claims; the demo uses the same browser's local state.

### Commission rules

These are invented demo commercial rules:

- Rate: 10%, stored as `1000` basis points.
- Eligible revenue: merchandise subtotal minus merchandise discounts.
- Delivery charges and taxes excluded.
- No promotion is active, so discount is zero.
- Commission rounded half-up once per order, in paise.
- Successful attributed mock order: pending commission.
- Fully delivered order: approved commission.
- Paid status exists in seeded payout fixtures.
- Cancelled order: eligible value becomes zero and commission is void.
- Failed checkout: no order, attribution, or commission.
- Runtime whole-order cancellation is available before any dispatch is delivered.
- Paid fixture orders are read-only and cannot be cancelled through the demo.
- No partial refunds, chargebacks, multi-level referrals, or retroactive code changes.

Use one commission record per attributed order:

```text
commissionId = "COM-" + orderId
```

Do not create new records during rendering or metric queries.

### Overview

Show:

- Referred customers.
- Attributed orders.
- Eligible sales.
- Estimated commission.
- Pending balance.
- Approved balance.
- Paid amount.

Definitions must be visible through concise helper text or tooltips:

- Referred customers: distinct customers with non-cancelled attributed orders in the selected order-date period.
- Attributed orders: non-cancelled successful attributed orders.
- Eligible sales: current eligible merchandise value from those orders.
- Estimated commission: pending + approved + paid commission for orders in the period.
- Voided records appear in tables but are excluded from positive totals.

Separate date-filtered performance metrics from all-time balance cards. Label scopes explicitly.

Default period: last seven demo days, September 26–October 2, inclusive.

Provide last 7 days, last 30 days, all time, and custom date filters.

### Dashboard content

- Daily eligible-sales chart.
- Switchable commission chart.
- Accessible tabular equivalent.
- Recent attributed order table.
- Referred-customer summary.
- Payout history.
- Commission-rule explanation.
- CSV download.
- Marketing assets.

Partner-facing data includes only:

- Fictional customer alias, such as “Customer A.”
- Order ID/date.
- Merchandise value.
- Attribution.
- Commercial status.
- Eligible value.
- Commission.

Do not expose addresses, contact details, food photos, diary records, body metrics, preferences, nutrition goals, or household member information. Do not require partner access to food-line details.

### Seed commercial history

Build full underlying historical order records using the shared meal catalog and normal money functions:

| Order | Created IST date | Customer | Merchandise lines | Commission state |
|---|---|---|---|---|
| SEED01 | Sep 26 | Customer A | 2 × M07 Standard | Paid |
| SEED02 | Sep 27 | Customer B | 2 × M09 Standard | Paid |
| SEED03 | Sep 28 | Customer A | 2 × M08 Standard | Approved |
| SEED04 | Sep 29 | Customer C | 2 × M16 Standard | Approved |
| SEED05 | Sep 30 | Customer D | 2 × M06 Standard | Pending |
| SEED06 | Oct 1 | Customer E | 2 × M11 Standard | Pending |
| SEED07 | Oct 2 | Customer B | 1 × M05 Standard | Void, cancelled |

All attributed to GYM01. All dates are in 2026.

Use corresponding valid delivery snapshots and historical dates. Paid/approved orders must be delivered; pending orders remain scheduled.

Create one settled payout fixture referencing SEED01 and SEED02 commissions.

Expected initial eligible figures:

- Eligible sales: ₹2,730.
- Pending: ₹91.60.
- Approved: ₹89.60.
- Paid: ₹91.60.
- Total estimated commission: ₹272.80.
- Six eligible attributed orders.
- Five referred customers.

SEED07 contributes zero eligible sales and commission.

Compute these figures from records; do not hardcode them into dashboard cards.

### Payout interaction

Provide “Preview payout” for approved funds.

It opens a simulation explaining the amount and relevant records. It must not request bank details or imply a transfer.

For this MVP, previewing does not change balances or create a payment record. Seeded payout history provides the paid-state example.

### Marketing assets

Provide:

- Two locally rendered branded referral cards as downloadable SVG files.
- Copyable short campaign text.
- A referral-link insert action.

Sample copy:

> Explore familiar meals and clearer meal information in the KEDRYN demo. Use our referral code KEDRYN-FORGE to see how gym attribution works. Demo only; no real orders or discounts.

No WhatsApp send button or email delivery. Copy/download only.

### CSV

Export the currently filtered commercial records, including void rows with zero current eligibility.

Columns:

```text
order_id,order_date_ist,customer_alias,order_status,
merchandise_inr,discount_inr,eligible_inr,
commission_rate_percent,commission_inr,commission_status
```

Use consistent escaping, neutralize formula-like strings, and include the date range in the filename.

## 13. Supporting experiences

### Adult preferences

Optional, skippable onboarding:

1. Choose an adult goal.
2. Choose dietary preferences and exclusions.
3. Review editable sample targets.

No signup barrier. Do not ask for weight, medical history, or sensitive body information.

Preferences are reused by planner and tracker suggestions. Catalog filters may be changed independently with a visible distinction between saved preferences and temporary filters.

### Customer home

Show:

- Today's logged nutrition.
- Today's planned meals, if any.
- Next scheduled delivery.
- Saved-plan shortcut.
- Favourite meals.
- Clear empty states.

Never combine planned and eaten nutrition into one unlabeled total.

### Saved plans and weekly preview

- Save, rename, duplicate, and delete a plan.
- “Plan another week” asks for dates and revalidates availability/prices.
- No auto-renewal.
- No recurring charge.
- No assumed subscription discount.
- Label as a scheduling preview.

### Family ordering

Two fictional adult members:

- Asha: vegetarian.
- Dev: vegan.

Support member-specific preferences and ingredient exclusions.

The family flow chooses one delivery date/window first, then separate meals for each adult. Compatible selections share one dispatch group and one delivery charge.

Keep member assignments visible in cart and order.

Do not combine both adults' nutrition into the signed-in customer's diary. Logging requires explicit selection by the customer.

### Single additional showcase: ingredient-label explanation

Why this feature: it substantiates the transparency story while keeping attention on food.

Create an original fictional packaged-food label with:

- Ingredient list.
- Declared allergens.
- Nutrition per 100g and per 40g serving.
- Two-serving calculator.
- Clickable callouts explaining serving size, ingredients, and the difference between label values and personal needs.

Use internally consistent fictional values:

- Per 100g: 400 kcal, 20g protein, 50g carbohydrate, 13g fat, 10g fibre.
- Per 40g: 160 kcal, 8g protein, 20g carbohydrate, 5.2g fat, 4g fibre.

Label it:

> Fictional teaching example, not a Kedryn product label.

Do not score foods as “clean,” “toxic,” or medically suitable. Do not add a separate OCR label scanner.

## 14. Shared normalized data model

Use stable IDs and normalized lookup maps. Keep immutable seed fixtures separate from mutable state.

Minimum entities:

```text
Meal
  id, name, description, mealWindows, standardServingGrams
  basePricePaise, nutritionPerStandard
  ingredientIds, declaredAllergenIds, dietaryTags
  portionIds, imageId, preparationNotes
  availabilityRuleId, featuredRank, crossContactStatus

Portion
  id, label, multiplierNumerator, multiplierDenominator

Customer
  id, demoName, checkoutFixture, preferencesId

CustomerPreferences
  id, customerId, adultGoal, dietaryMode
  excludedAllergenIds, excludedIngredientIds
  dailyTargets, defaultPlanningTargets

HouseholdMember
  id, customerId, displayName, adultOnly
  dietaryMode, excludedAllergenIds, excludedIngredientIds

CartLine
  id, mealId, portionId, quantity
  deliveryDate, deliveryWindowId, householdMemberId?
  sourcePlanId?, sourcePlanItemId?, sourcePlanRevision?

Plan
  id, customerId, name, inputConstraints
  startDate, dayCount, selectedSlots, revision
  generationCounter, createdAt, updatedAt

PlanItem
  id, planId, date, slot, mealId?, portionId?, quantity
  locked, status, explanation, householdMemberId?

Order
  id, customerId, createdAt, checkoutSnapshot
  lineSnapshots, dispatchGroups, totals
  referralAttributionId?, status, idempotencyKey

OrderLineSnapshot
  id, mealId, name, portionId, portionLabel
  quantity, servingGramsPerUnit
  nutritionPerUnit, unitPricePaise, lineTotalPaise
  deliveryDate, deliveryWindowId, householdMemberId?

FoodLogEntry
  id, customerId, diaryDate, mealSlot
  foodItems, confirmedNutritionSnapshot
  sourceType, sourceOrderLineId?, consumedOrderQuantity?
  sourceSampleId?, idempotencyKey, createdAt, updatedAt

FoodLogItem
  id, name, sourceMealId?
  baseAmount, baseUnit, baseNutrition, consumedAmount
  confirmedNutritionSnapshot

Gym
  id, name, ownerDisplayName, referralCode, commissionRateBps

ReferralAttribution
  id, orderId, gymId, normalizedCode
  source, attributedAt

CommissionRecord
  id, orderId, gymId, eligibleRevenuePaise
  rateBps, commissionPaise, status, payoutId?

PayoutFixture
  id, gymId, commissionIds, amountPaise
  settledAt, status, fictionalReference
```

Add ingredient, allergen, image, delivery-window, and availability maps as needed.

Relationships and invariants:

- Every cart/plan catalog item references a valid meal and supported portion.
- Plan totals derive from plan items.
- Cart totals derive from cart lines and dispatch groups.
- Orders retain purchase-time values.
- Logs retain confirmed values even if the catalog changes later.
- Commission records refer to exactly one order.
- Payout fixture amounts equal the sum of referenced paid commissions.
- Never maintain unrelated hand-entered dashboard totals.
- Partner selectors return only permitted commercial fields.
- Derived metrics are computed, not mutated on page render.

## 15. State, dates, money, and persistence

Use localStorage key:

```text
kedryn.demo.v1
```

Payload includes:

- Schema version.
- Fixed demo clock.
- Mutable customer preferences.
- Favourites.
- Cart.
- Plans and plan items.
- Orders.
- Food logs.
- Referral attribution and commission records.
- Deterministic ID counters.
- Plan-transfer idempotency records.

Do not persist:

- Uploaded files.
- Blob/object URLs.
- Base64 photo data.
- Temporary dialog state.
- Mock loading state.
- Failure-injection toggles unless explicitly documented.

State initialization:

1. Validate stored version and shape.
2. Load valid state.
3. If invalid or incompatible, show a recovery notice and restore exact fixtures.
4. If storage is unavailable, continue in memory and clearly explain that reload will not preserve changes.

Reset:

- Confirm in an accessible dialog.
- Replace only KEDRYN's storage key with a fresh deep copy of fixtures.
- Do not call `localStorage.clear()`.
- Reset IDs, dates, preferences, cart, plans, logs, commercial activity, and role.
- Release temporary photo resources.
- Return to landing.
- Restore exactly the same seeded demonstration.

For multiple open tabs, use the `storage` event to refresh state or show a clear “Demo changed in another tab—reload” notice. The primary supported presentation is one browser tab.

### Money

- Store integer paise.
- Use integer arithmetic and basis points.
- Round portion unit prices half-up once.
- Multiply rounded unit price by quantity.
- Sum line totals into merchandise subtotal.
- Calculate dispatch fees from each group's merchandise subtotal.
- Commission rounds once per order.
- Format with `Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" })`.
- Use consistent decimal formatting on receipts, commissions, and exports.

### Nutrition

- Use shared portion-scaling helpers.
- Keep sufficient precision internally.
- Aggregate unrounded values, then display calories as whole numbers and macros to one decimal where useful.
- If implementing fixed-point nutrition, document its precision.
- Portion edits must not repeatedly round already rounded display values.

### Dates

- Delivery dates are ISO date-only strings interpreted in Asia/Kolkata.
- Instants are ISO timestamps.
- Format dates and times explicitly in `Asia/Kolkata`.
- Avoid parsing date-only strings through timezone-sensitive local `Date` behavior.
- All demo “today,” last-seven-days, schedules, and reset use the fixed clock.
- Prominently explain the sample date on demo information and relevant dashboards.

## 16. Mock service contracts

Implement promise-based services with deterministic latency. No random errors.

Use one result convention:

```js
{
  ok: true,
  data: {},
  warnings: []
}
```

or:

```js
{
  ok: false,
  error: {
    code: "ERROR_CODE",
    message: "Readable message",
    fieldErrors: {}
  }
}
```

Minimum contracts:

| Function | Input | Output | Delay | Error cases |
|---|---|---|---:|---|
| `checkServiceability` | `{pin}` | supported status, windows | 250ms | malformed PIN; unsupported as explicit result |
| `getMeals` | query, filters, sort, date/window | meal IDs, count, applied filters | 120ms | malformed filters |
| `getMealDetail` | meal ID, date/window, portion | full view model | 100ms | unknown ID, unsupported portion |
| `generateMealPlan` | constraints, locked items, generation counter | plan items, totals, explanations, warnings | 900ms | invalid targets/dates; conflicts |
| `swapPlanMeal` | plan/item IDs, replacement, revision | updated plan | 150ms | incompatible meal, stale revision, budget conflict |
| `analyzeSamplePhoto` | sample ID | editable normalized items | 900ms | unknown sample |
| `analyzeUploadedPhoto` | local file metadata | generic sample items + mandatory disclosure | 900ms | file type/size/decode failure |
| `placeMockOrder` | cart snapshot, fictional checkout, referral, idempotency key | saved order ID and receipt | 700ms | empty cart, invalid details, PIN, availability, referral, simulated failure |
| `advanceMockOrder` | order/group ID | new status and commission update | 200ms | invalid transition |
| `cancelMockOrder` | order ID | cancelled order and void commission | 200ms | already delivered, paid fixture, invalid state |
| `logMeal` | normalized foods, date/slot, source, idempotency key | saved log and daily totals | 150ms | invalid quantities/nutrition, over-logged order quantity |
| `updateFoodLog` | entry ID and revision | updated entry/totals | 100ms | invalid entry or quantity |
| `deleteFoodLog` | entry ID | updated daily totals | 100ms | unknown entry |
| `getPartnerMetrics` | gym ID and date range | scoped metrics, series, permitted rows | 150ms | invalid range |
| `exportPartnerCsv` | gym ID and date range | downloadable blob | immediate | invalid range |
| `resetDemo` | confirmed flag | fresh state | immediate | no mutation without confirmation |

Additional requirements:

- Mutation services reread current state before committing.
- Checkout validates the latest cart and availability.
- A successful checkout is one atomic state write covering order, attribution, commission, and cart clearing.
- If persistent storage fails, preserve a coherent in-memory transaction and show the persistence limitation.
- Repeated calls with the same idempotency key return the existing result.
- Metric services never create orders or commissions.
- Stale asynchronous results must not overwrite newer filters or edits.
- Clear loading state on success, failure, cancellation, and route change.
- `#/about-demo` provides deliberate “Fail next checkout” and “Simulate catalog load failure” controls for verification. They affect local behavior only.

## 17. Component inventory and interaction states

Create reusable functions/components for:

- App header and mobile navigation.
- Demo indicator and role switcher.
- Footer.
- Buttons, icon buttons, form fields, checkboxes, segmented controls.
- PIN checker.
- Meal card.
- Nutrition summary.
- Dietary/allergen text labels.
- Portion selector and quantity stepper.
- Date/window selector.
- Filter drawer and active-filter chips.
- Cart line and dispatch-group summary.
- Price breakdown.
- Plan day and slot.
- Swap dialog and lock action.
- Photo preview and analysis review.
- Food-log row/editor.
- Metric card.
- Accessible SVG chart and data table.
- Referral code field.
- Copy action.
- Toast/status message.
- Empty state.
- Loading skeleton.
- Inline error and error summary.
- Accessible dialog.
- Reset confirmation.

Every interactive component needs applicable:

- Default.
- Hover.
- Focus.
- Pressed/selected.
- Disabled.
- Loading.
- Success.
- Error.
- Empty/unavailable.

Disabled controls need a nearby reason when the cause is not obvious. Do not rely on disabled-only tooltips. No information or action may require hover to be accessible.

No decorative controls. Every visible action must perform something meaningful.

## 18. Accessibility and mobile-first responsiveness

**Mobile readiness is a release requirement, not a final cosmetic pass.** Build mobile-first and verify the complete customer and partner journeys at 360px, 390px, 768px, and 1440px.

Target WCAG AA practices.

Required:

- Semantic landmarks and heading hierarchy.
- Skip link.
- Labels and helpful descriptions.
- Visible keyboard focus.
- Keyboard-operable filters, steppers, tabs, menus, and dialogs.
- Native buttons for actions and links for navigation.
- `aria-live="polite"` for cart, generation, copy, and logging results.
- Error summaries announced appropriately.
- Focus moved sensibly after route navigation.
- Accessible dialogs using native `<dialog>` where suitable.
- Escape closes cancellable dialogs.
- Focus returns to the opener.
- Scroll locking without trapping focus outside the dialog.
- Reduced motion.
- Meaningful image alternatives.
- Charts accompanied by text summaries and data tables.
- Minimum 44px touch targets.
- Form-input text at least 16px on mobile.
- No color-only status communication.
- No hover-only actions or information.
- No horizontal page overflow.
- Viewport metadata that supports responsive layout without disabling user zoom.

### 360px and 390px phones

- Collapsible, touch-friendly navigation with visible current route and a working close action.
- One-column catalog.
- Filter drawer with accessible apply/reset controls.
- Full-width meal detail actions.
- Vertical daily planner with day selectors and stacked meal slots.
- Swap, edit, and photo-review dialogs can become accessible full-screen dialogs where appropriate.
- Cart summary respects device safe-area insets.
- Sticky navigation and checkout actions never obscure content, validation messages, or focused inputs.
- Partner order tables become labelled cards; do not force wide desktop tables onto phones.
- Charts, labels, legends, and their text alternatives remain readable.
- Referral links wrap safely, with a separate large copy control.
- Photo selection and review work with mobile file pickers; unsupported formats have a clear fallback.
- All primary flows work with touch, without requiring hover or precise pointer use.

### 768px tablets

- Two-column catalog.
- Adapted hero.
- Planner using a limited-column view or daily tabs.
- Partner metrics in two columns.
- Dialogs and checkout adapt to available width instead of assuming desktop space.

### 1440px desktops

- Asymmetric hero.
- Three/four-column catalog where readable.
- Planner week view within the content width.
- Two-column checkout with sticky summary.
- Partner sidebar and four-column metrics.

### Additional mobile verification

- Support portrait and landscape viewing.
- Test on-screen keyboard behavior for checkout, referral, search, and food-log inputs.
- Focused inputs and their validation remain visible when the keyboard opens.
- Use suitable input types and `inputmode` values for PIN, phone, email, quantity, and nutrition fields.
- Use dynamic viewport sizing and safe-area padding where needed for full-screen dialogs and sticky controls.
- Do not disable pinch zoom.
- Test long meal names, large text, missing images, loading states, and open validation messages.
- Avoid rigid heights that clip content.
- Deliver mobile screenshots and document verification of the complete customer and partner journeys.
- If actual device/browser testing is unavailable, distinguish viewport-emulation results from unverified real-device keyboard behavior.

## 19. File organization

Keep the structure small and understandable:

```text
kedryn-mvp/
  index.html
  README.md
  ASSET_LICENSES.md

  assets/
    images/
    fonts/
    icons/
    fallback-meal.svg

  css/
    tokens.css
    base.css
    components.css
    pages.css

  js/
    app.js
    router.js
    store.js

    data/
      catalog.js
      fixtures.js

    domain/
      money.js
      nutrition.js
      dates.js
      planner.js
      referrals.js

    services/
      mock-api.js

    ui/
      components.js
      dialogs.js
      charts.js

    pages/
      landing.js
      customer.js
      meals.js
      planner.js
      family.js
      checkout.js
      orders.js
      tracker.js
      partner.js
      knowledge.js
      demo.js

  tests/
    domain.test.js
    critical-flows.spec.js

  docs/
    RESEARCH_AND_CLAIMS.md
    DEMO_RULES.md
    DEMO_SCRIPT.md
    QA_REPORT.md
```

Adjust file boundaries modestly if needed. Do not create one enormous JavaScript file or a framework-like abstraction layer. The directory tree is illustrative; use the existing project root rather than creating unnecessary nested project directories.

Use safe DOM APIs. Do not inject user-entered strings through unsanitized `innerHTML`.

Keep all app runtime dependencies local. A development-only browser testing tool is acceptable; it must not become an application runtime dependency.

Document a simple launch command from the project directory containing `index.html`:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Do not require a build step or secret environment file.

## 20. Implementation sequence

1. Read applicable repository instructions and inspect existing files. Preserve unrelated work.
2. Establish design tokens and the semantic, mobile-first app shell.
3. Create catalog, fixtures, fixed clock, shared math, and normalized state.
4. Implement persistence, reset, routing, IDs, and idempotency.
5. Build catalog, meal detail, cart, checkout, and order history.
6. Implement commission creation and partner projections immediately after checkout works.
7. Build the planner against the same catalog and cart contracts.
8. Build tracker normalization, explicit purchased-meal logging, and photo simulation.
9. Build customer home, adult preferences, saved plans, and family flow.
10. Complete the landing page using working shared components and real app actions.
11. Add the ingredient-label showcase and compact wellness content.
12. Polish responsive layouts, imagery, motion, empty states, errors, and accessibility.
13. Verify critical calculations and connected journeys on desktop and mobile.
14. Fix observed failures.
15. Deliver source, documentation, and a candid verification report.

Do not defer shared data consistency or mobile functionality until visual polish. Do not mark the task complete with core interactions unimplemented.

## 21. Acceptance criteria

Use observable behavior and independently calculated expected results. Avoid tests that merely call the implementation helper to calculate its own expected answer.

### Landing and navigation

- A new visitor can identify food ordering as the primary product.
- Every prominent CTA reaches its promised screen/action.
- Customer and partner entry points work without signup.
- Browser back/forward and nested hash refresh work.
- Unknown routes provide a useful recovery action.
- Demo status is visible on every route.

### Search and filters

- Searching “rajma” returns M09.
- Vegan + dinner + exclude soy returns no dairy or soy-containing fixture meals.
- Combining search, price, meal window, and nutrition filters produces the intersection.
- Removing one filter preserves the others.
- An impossible combination produces a usable empty state.
- Sorting is stable.
- M15 cannot be added.
- M18 is unavailable for dinner on October 4.
- Catalog load failure has a working retry action.

### Portions

For M09:

- Standard: ₹209, 500 kcal, 18g protein, 350g.
- Light: ₹156.75, 375 kcal, 13.5g protein, 262.5g.
- Generous: ₹313.50, 750 kcal, 27g protein, 525g.

The detail page, cart, plan, order snapshot, and log use matching quantities.

### Cart and checkout arithmetic

- Two standard M07 items in one dispatch group: merchandise ₹498, delivery ₹40, grand total ₹538, and commission with valid referral ₹49.80.
- Two standard M11 items in one group: merchandise ₹518, delivery ₹0, grand total ₹518, and commission ₹51.80.
- The same items split across different date/windows incur fees separately according to each group.
- Quantity and portion changes update every displayed total.
- Empty cart cannot check out.
- Unsupported PIN cannot check out.
- Invalid referral can be corrected or removed.
- Referral code does not create a discount.
- Failed checkout creates no order or commission.
- Double submission creates one order.
- Successful checkout persists and clears the purchased cart.
- Reload preserves the order and purchase-time prices.

### Planner

- Every filled plan item references a catalog meal.
- Dietary/allergen/ingredient exclusions are honored.
- Unavailable meals are excluded.
- An impossible budget leaves a clearly incomplete plan.
- Nutrition mismatch is visible.
- Locked items survive regeneration.
- Invalidated locks are flagged.
- Swaps and portion edits update price and nutrition.
- Lunch/dinner totals are never labelled full-day totals.
- Adding three selected days preserves dates, slots, portions, and quantities.
- Repeated transfer cannot silently duplicate items.
- Identical inputs and generation counter produce identical output.

### Tracker

- Ordering alone does not alter diary totals.
- Sample M09 photo returns the configured estimate.
- Arbitrary upload is identified as a sample estimate, not detected food.
- Uploaded bytes and blob URLs do not appear in localStorage.
- Cancelling photo review creates no log entry.
- Logging 1.5 standard M09 servings adds 750 kcal and 27g protein.
- Editing it to one serving changes those contributions to 500 kcal and 18g protein.
- Deleting restores the previous daily totals.
- Date changes isolate the correct day.
- Purchase-linked logging prevents duplicate consumption beyond the order quantity.
- Deleting a purchase-linked log restores its loggable quantity.
- Seven-day charts reconcile with diary entries.
- Unsupported and oversized images show recoverable errors.

### Partner connection

- Valid referred checkout creates one attribution and one pending commission.
- The new order appears after switching roles without manual fixture edits.
- Refreshing does not duplicate commission.
- Completing all deliveries moves pending commission to approved without changing its amount.
- Cancelling an eligible pending order voids its commission and removes its eligible revenue.
- Cards, charts, tables, and CSV use the same date scope and reconcile.
- Initial fixture totals equal ₹2,730 eligible sales, ₹91.60 pending, ₹89.60 approved, ₹91.60 paid, and ₹272.80 estimated commission.
- A new referred ₹498 merchandise order increases eligible sales by ₹498 and pending commission by ₹49.80.
- Partner views and CSV contain no nutrition diary, photos, goals, or household data.
- Copy and CSV download work.
- Payout preview neither transfers money nor changes balances.

### Family and supporting features

- Asha and Dev retain separate preferences.
- Dev's selection excludes non-vegan meals.
- Compatible family meals produce one dispatch group.
- Family order does not automatically log either adult's food.
- Saved-plan duplication revalidates new dates.
- Ingredient-label serving math recalculates correctly.
- Wellness content remains visibly a preview.

### Persistence and reset

- Preferences, favourites, cart, saved plans, orders, logs, and commissions survive reload.
- Corrupt/unsupported stored state produces a clear recovery path.
- Storage-disabled mode remains usable in memory.
- Reset restores exact seed IDs, values, dates, histories, and balances.
- Reset does not erase other applications' storage.
- Reset removes temporary uploaded-photo references.

### Responsive and accessibility

- No horizontal page overflow at 360px, 390px, 768px, or 1440px.
- The complete discover → plan → cart → checkout → log → partner-verification journey works on a phone viewport using touch-sized controls.
- Mobile navigation opens, closes, and follows routes correctly.
- Filter drawer, cart, planner, photo-review flow, and partner cards remain usable on mobile.
- Partner tables become readable labelled cards without hiding required financial fields.
- No action depends on hover.
- Portrait and landscape layouts remain usable.
- Sticky navigation and checkout actions respect safe areas and never obscure controls or content.
- When tested on a real device/browser, the on-screen keyboard does not cover focused fields or block form completion; mark this unverified if only viewport emulation is available.
- Form-input text is at least 16px and touch targets are at least 44px.
- Critical journey works by keyboard.
- Dialog focus, Escape, and focus restoration work.
- Status updates are announced.
- Charts have a text alternative.
- Reduced-motion mode remains functional.
- Missing images show the local fallback without layout collapse.
- No dead buttons, broken local assets, uncaught exceptions, or unexplained empty panels.

Capture representative desktop and mobile screenshots and record actual outcomes. If a check cannot run in the environment, identify it as unverified rather than claiming it passed.

## 22. Five-minute presenter script

Place this script in `docs/DEMO_SCRIPT.md`. Ensure the implementation actually supports it.

### 0:00–0:35 — Position the product

Open the landing page.

Say:

> KEDRYN starts with familiar food and makes the details easier to understand. This demo connects choosing meals, scheduling delivery, logging what was eaten, and gym referral performance.

Point to the demo indicator and verify the sample PIN.

### 0:35–1:25 — Build a plan

Select “Build my meal plan.”

Use the prefilled three-day vegetarian lunch-and-dinner plan.

Generate.

Say:

> The planner selects prepared meals from the same catalog we can order. These totals cover lunch and dinner, and the interface shows where the selected targets are missed.

### 1:25–1:55 — Prove recalculation

Swap one lunch meal.

Point out the changed calories, protein, and price.

Lock that meal and regenerate the remaining items, if time permits.

### 1:55–2:35 — Move the plan to checkout

Add the plan to cart.

Show preserved dates, quantities, portions, and delivery groups.

Continue to checkout with fictional details.

Apply `KEDRYN-FORGE`.

Say:

> The referral attributes this order to the gym. It does not create a customer discount in this demonstration.

### 2:35–3:05 — Place the mock order

Select “Simulate payment & place demo order.”

Show confirmation and the persistent order receipt.

Say:

> No payment or order leaves the browser. This order is now part of the shared demo state.

### 3:05–3:45 — Log food explicitly

Use “Log as eaten” on one purchased meal.

Choose the demo diary date, review one serving, and confirm.

Open the tracker and show updated calories/protein.

Say:

> Buying food and eating food are different events. Nutrition totals change only after confirmation.

### 3:45–4:35 — Show the partner connection

Switch to the gym partner demo.

Find the new order and pending commission.

Open the commission explanation and point to eligible merchandise value.

Say:

> This is the same order, not a separate dashboard fixture. Delivery charges are excluded and repeated refreshes do not create additional commission.

### 4:35–5:00 — Prove persistence and reset

Refresh the page to show the new order remains.

Reset the demo and confirm.

Show restored baseline partner totals or the clean customer starting state.

Say:

> Reset restores the exact presentation scenario so this demonstration is repeatable.

### Separate sample-photo demonstration: 45–60 seconds

1. Open tracker.
2. Choose bundled Rajma Rice Bowl photo.
3. Run simulated analysis.
4. Show suggested M09 serving.
5. Change quantity to 1.5.
6. Confirm.
7. Show the 750 kcal and 27g protein contribution.
8. Explain that arbitrary uploaded images receive editable sample estimates rather than actual recognition.
9. Delete the entry or reset before another presentation.

## 23. Required handover

Deliver:

1. Complete HTML, CSS, JavaScript, fixtures, and local assets.
2. `README.md` explaining:
   - Static server setup.
   - Routes and architecture.
   - Customer and partner demo personas.
   - Sample PINs and referral code.
   - Fixed date and India-time assumptions.
   - LocalStorage key and persistence.
   - Photo handling.
   - Reset.
   - Mock service behavior and intentional error controls.
   - Commission and delivery rules.
   - How to run verification.
   - Mobile/responsive behavior and tested viewport sizes.
   - Known limitations.
   - No real payments, AI, orders, authentication, payouts, or message delivery.
3. `docs/RESEARCH_AND_CLAIMS.md`.
4. `docs/DEMO_RULES.md`.
5. `docs/DEMO_SCRIPT.md`.
6. `docs/QA_REPORT.md` with actual pass/fail/unverified results.
7. `ASSET_LICENSES.md`.
8. Meaningful calculation and critical-flow tests.
9. Representative desktop and mobile screenshots, if the environment supports capture.
10. A short final implementation summary identifying completed journeys and any remaining limitations.

The deliverable is complete only when the customer and partner journeys work together, the calculations reconcile, state persists, reset is reliable, and the entire interface remains usable on mobile.

Do not deploy.

# MASTER BUILD PROMPT — END

---

## Genuinely unresolved business decisions

These do not block the demo, but require client confirmation before production:

- Final recipes, portion definitions, validated nutrition, allergens, and cross-contact information.
- Real service areas, delivery windows, cutoffs, charges, pricing, and tax treatment.
- Affiliate eligibility, attribution duration, commission rate, cancellation rules, and payout terms.
- Subscription/credit mechanics and whether family delivery consolidation is operationally supported.
- Approved brand assets and food-photo rights.
- Production handling of customer nutrition data, uploaded photos, and any future AI estimates.
