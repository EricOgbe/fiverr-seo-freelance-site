(() => {
  'use strict';

  const STORAGE_KEY = 'searchclarity-local-seo-checklist-v1';

  const categories = [
    { id: 'gbp', title: 'Google Business Profile', icon: 'GBP', intro: 'Review the accuracy, completeness and usefulness of your Google Business Profile.', checks: [
      ['Your profile is claimed and verified', 'Confirm that you can manage the profile and that Google has verified the business.', 'High', 'Open Google Business Profile and check that you have owner or manager access. Complete Google’s verification process if it is still pending.', 'If you cannot manage the listing, request access from the current owner or follow Google’s verification steps.'],
      ['Your business name follows real-world branding', 'The name reflects the business name used on signage and official materials, without added keywords or promotional text.', 'High', 'Compare the profile name with your storefront, website branding and business materials.', 'Use the real-world business name. Do not add locations, services or keywords unless they are genuinely part of the business name.'],
      ['The primary business category is accurate', 'The primary category describes the main activity customers hire or visit you for.', 'High', 'Review the category in your profile settings and compare it with the main service or product offered.', 'Choose the most specific accurate primary category available. Add relevant secondary categories only where they genuinely apply.'],
      ['Address or service area is configured correctly', 'The address is accurate for a customer-facing location, or service areas reflect where you actually operate.', 'High', 'Check the address pin and service areas against your real operating arrangements.', 'Correct the address or service area. Do not show a residential address to customers if the business is not staffed there during stated hours.'],
      ['Phone number and website URL are correct', 'Customers can reach the business and land on the most relevant page.', 'High', 'Click the phone and website links on the live profile and test them on a mobile device.', 'Replace outdated details and use a relevant landing page rather than an unrelated homepage where appropriate.'],
      ['Opening hours and special hours are up to date', 'Regular hours, holidays and temporary closures accurately reflect availability.', 'Medium', 'Compare profile hours with actual operating hours, including upcoming holidays.', 'Update regular and special hours promptly whenever availability changes.'],
      ['Services, products and business description are complete', 'The profile explains what the business offers in clear, customer-focused language.', 'Medium', 'Review the services or products section and business description for accuracy and useful detail.', 'Add the services customers can actually book or buy. Write a concise factual description without keyword stuffing.'],
      ['Recent, genuine photos represent the business', 'Photos help customers understand the location, team, products or work.', 'Medium', 'Review the photos visible on the profile for quality, relevance and freshness.', 'Add authentic, high-quality images that accurately represent the business. Avoid misleading stock imagery.']
    ]},
    { id: 'website', title: 'Website fundamentals', icon: 'WEB', intro: 'Make sure customers can understand, trust and contact your business.', checks: [
      ['The website loads securely over HTTPS', 'The preferred website version uses a valid HTTPS certificate without browser security warnings.', 'High', 'Visit the website using https:// and check for certificate warnings or mixed-content errors.', 'Install or renew a valid TLS certificate and update internal links and redirects to HTTPS.'],
      ['The business name and contact details are easy to find', 'Visitors can quickly identify the business and find a phone number, address or contact method.', 'High', 'Check the header, footer and contact page on desktop and mobile.', 'Display consistent business details in a prominent, accessible location.'],
      ['The website clearly explains what the business does', 'The homepage communicates the main service or product and who it serves.', 'High', 'Ask someone unfamiliar with the business to identify its offer from the first screen of the homepage.', 'Use a specific headline and supporting copy that describe the service, audience and location where relevant.'],
      ['The website works well on mobile devices', 'Text, navigation, forms and buttons are usable without horizontal scrolling or awkward zooming.', 'High', 'Test key pages on a real phone or use Chrome DevTools device emulation.', 'Fix viewport settings, narrow layouts, small tap targets, overflowing elements and difficult forms.'],
      ['Important pages are reachable through navigation', 'Users can find key service, location, about and contact pages without relying on search.', 'Medium', 'Use the main navigation and footer to locate the pages a customer needs.', 'Add clear navigation links and relevant contextual links between related pages.'],
      ['The website has a useful contact or booking path', 'Visitors can take the next step without unnecessary friction.', 'High', 'Complete a test enquiry or booking on mobile and desktop, where possible.', 'Fix broken forms, unclear calls to action, missing confirmation messages and unnecessary form fields.'],
      ['The business has a dedicated page for each important service', 'Core services have useful pages that explain the offer, process and customer questions.', 'Medium', 'Compare the services listed by the business with the pages available on the website.', 'Create genuinely useful pages for distinct services. Avoid creating thin pages that differ only by a swapped keyword.'],
      ['The website content is accurate and maintained', 'Prices, service descriptions, staff details, locations and other important claims are current.', 'Medium', 'Review important pages and compare their information with the business’s current operations.', 'Correct outdated information and assign someone to review key pages periodically.']
    ]},
    { id: 'onpage', title: 'On-page SEO and local relevance', icon: 'SEO', intro: 'Help search engines and visitors understand which searches and locations your pages serve.', checks: [
      ['The homepage has a unique, descriptive title tag', 'The title accurately describes the business and its main offering.', 'High', 'Inspect the page source or use an SEO browser extension to review the title element.', 'Write a concise, distinct title that describes the business. Include a location only where it helps users understand the service area.'],
      ['Important pages have unique title tags', 'Each key page has a title that reflects its specific topic rather than repeating the same site-wide title.', 'High', 'Crawl the site or inspect the title elements on important service and location pages.', 'Write descriptive titles for each important URL and remove accidental duplicates.'],
      ['The main heading clearly describes each page', 'The primary page heading communicates the page’s subject to visitors.', 'Medium', 'Review the visible heading near the top of each key page and inspect its heading structure.', 'Use a clear, descriptive main heading. A page does not need multiple H1 elements to rank.'],
      ['Page content matches the search intent it targets', 'The page answers the questions and needs of the people likely to land on it.', 'High', 'Compare the page with the actual service offered and the types of results shown for relevant searches.', 'Improve the page with accurate service details, process information, suitability, pricing context and useful answers.'],
      ['Location information is specific and truthful', 'The site clearly describes the areas served without implying a physical presence where none exists.', 'High', 'Check service-area pages, contact details and location claims against real business operations.', 'Explain the actual service area. Do not create doorway pages or claim offices at addresses where the business is not genuinely present.'],
      ['Images have descriptive alternative text where needed', 'Meaningful images have useful alt text; decorative images are handled appropriately.', 'Low', 'Inspect image markup or use a browser accessibility inspection tool.', 'Describe the image’s purpose in concise alt text. Use empty alt text for decorative images; do not stuff keywords.'],
      ['Internal links connect related pages', 'Important pages receive useful contextual links from relevant pages on the site.', 'Medium', 'Follow links from the homepage, service pages and helpful articles to key conversion pages.', 'Add natural, descriptive internal links and ensure important pages are not isolated.'],
      ['Page copy is original, useful and specific to the business', 'Content reflects real expertise, processes, examples or details rather than generic location-swapped text.', 'High', 'Compare pages for substantial duplication and check whether the content offers information only this business can provide.', 'Add first-hand details, original images, clear explanations and genuine answers. Consolidate thin or overlapping pages.']
    ]},
    { id: 'technical', title: 'Technical SEO', icon: 'TECH', intro: 'Check whether search engines can access, understand and index the pages that matter.', checks: [
      ['Important pages return a successful HTTP status', 'Key pages load normally rather than returning errors or unexpected redirects.', 'High', 'Visit important URLs and use a crawler or HTTP status checker to inspect their response codes.', 'Fix server errors, broken URLs and redirect chains. Redirect permanently moved pages to their closest relevant replacements.'],
      ['Important pages are not accidentally blocked by robots.txt', 'Robots rules do not prevent crawling of content that should be discovered.', 'High', 'Review /robots.txt and test important URLs with Google Search Console’s URL Inspection where available.', 'Remove unintended disallow rules. Remember that robots.txt blocking is not the same as a noindex directive.'],
      ['Important pages are indexable', 'Pages intended to appear in search are not blocked by noindex directives or other indexing restrictions.', 'High', 'Inspect meta robots tags, X-Robots-Tag headers and the URL Inspection report in Search Console.', 'Remove unintended noindex directives and verify that the page is accessible to Googlebot.'],
      ['Canonical URLs point to the preferred page version', 'Canonical tags are consistent with the preferred URL and do not point important pages elsewhere incorrectly.', 'High', 'Inspect rel=canonical on important pages and compare it with redirects, internal links and sitemap URLs.', 'Use a self-referencing canonical on unique indexable pages where appropriate. Resolve conflicting canonical signals.'],
      ['The XML sitemap is valid and accessible', 'The sitemap loads, contains canonical indexable URLs and is submitted in Search Console.', 'Medium', 'Open the sitemap URL and inspect it for errors, non-canonical URLs, redirects and noindex pages.', 'Generate a valid XML sitemap containing preferred, indexable URLs and submit it through Search Console.'],
      ['The site uses a consistent preferred hostname and protocol', 'HTTP/HTTPS and www/non-www variants resolve consistently to one preferred version.', 'High', 'Test common hostname and protocol variations and check their final destinations.', 'Choose one preferred version and use permanent redirects. Keep canonicals, internal links and sitemap URLs consistent.'],
      ['There are no important broken internal links', 'Navigation and contextual links do not lead to missing pages or irrelevant destinations.', 'Medium', 'Crawl the website and review internal links returning 4xx or 5xx responses.', 'Update links to valid destinations or restore/redirect pages where appropriate.'],
      ['Core Web Vitals are monitored', 'The business reviews real-user performance data where available and understands the key metrics.', 'Medium', 'Check Search Console’s Core Web Vitals report and PageSpeed Insights for representative URLs.', 'Investigate poor LCP, INP or CLS results using field and lab diagnostics. Prioritize changes based on real-user impact.'],
      ['Structured data is accurate and eligible for its intended use', 'Relevant structured data describes visible page content and follows current Google guidelines.', 'Medium', 'Test relevant pages with Google’s Rich Results Test and Schema.org Validator.', 'Correct invalid properties and remove misleading or unsupported markup. Structured data does not guarantee rich results.']
    ]},
    { id: 'reviews', title: 'Reviews and reputation', icon: 'REV', intro: 'Build trust through genuine customer feedback and thoughtful responses.', checks: [
      ['Customers have an easy, neutral way to leave a review', 'The business makes it straightforward for customers to find its review profile without offering incentives.', 'Medium', 'Check whether staff can share the correct review link after a genuine customer interaction.', 'Use Google’s review link or QR code. Never buy reviews, gate reviews or offer rewards for positive feedback.'],
      ['Recent reviews reflect ongoing customer experience', 'The profile has a natural pattern of recent feedback rather than relying entirely on old reviews.', 'Medium', 'Review the dates and content of recent feedback alongside the business’s actual activity.', 'Ask all customers neutrally for honest feedback as part of a consistent service process.'],
      ['Reviews are monitored and answered professionally', 'The business responds appropriately to positive and negative feedback.', 'Medium', 'Review recent customer feedback and the business’s replies.', 'Respond politely, specifically and without disclosing private customer information. Take detailed disputes offline.'],
      ['The website displays testimonials accurately', 'Any testimonials shown are genuine, authorized and presented without misleading edits.', 'Low', 'Check testimonial sources, wording and permissions.', 'Use authentic customer feedback with permission. Do not fabricate reviews or imply that selected testimonials are representative of all customers.'],
      ['Business details and reputation are consistent across key profiles', 'The business is represented accurately on relevant platforms and directories.', 'Medium', 'Review the most important industry, social and local profiles for outdated details or misleading claims.', 'Update key profiles and correct significant inconsistencies. Focus on platforms customers actually use.']
    ]},
    { id: 'authority', title: 'Local links and citations', icon: 'LINK', intro: 'Make it easier for people and relevant organizations to discover and reference the business.', checks: [
      ['The business is listed on relevant, reputable directories', 'Listings exist where customers in the industry or area genuinely look for providers.', 'Medium', 'Search for the business name and review relevant trade, professional and local directories.', 'Prioritize reputable, relevant directories. Avoid bulk submissions to low-quality listing networks.'],
      ['Core business details are consistent on important listings', 'Name, address, phone number and website details are accurate across key references.', 'High', 'Compare important listings against the business’s current official details.', 'Correct meaningful discrepancies, especially outdated phone numbers, addresses and website URLs.'],
      ['The business earns links from relevant local organizations', 'Relevant community groups, partners, suppliers or associations reference the business when useful.', 'Medium', 'Review referring domains in Search Console or a backlink tool and identify legitimate local relationships.', 'Contribute something valuable, sponsor relevant community activity transparently or provide a useful resource. Do not buy manipulative links.'],
      ['The website has useful resources worth referencing', 'The site offers original information, tools, guides or data that help its audience.', 'Medium', 'Ask whether an independent blogger, journalist or local organization would find a page genuinely useful to cite.', 'Create original research, practical templates, helpful calculators or well-maintained guides. Promote them to relevant publishers.'],
      ['Backlink quality is reviewed periodically', 'The business monitors its link profile for unusual patterns without assuming every low-quality link is harmful.', 'Low', 'Review referring domains and investigate clear signs of paid link schemes, hacked pages or manipulative campaigns.', 'Avoid manipulative link acquisition. Do not disavow links solely because a third-party tool labels them toxic.'],
      ['Local partnerships and mentions are represented accurately', 'Relevant partnerships, memberships and community involvement are real and verifiable.', 'Low', 'Check partner pages, membership listings and community references for accuracy.', 'Keep public partner information current and seek legitimate editorial mentions where there is a real relationship.']
    ]},
    { id: 'measurement', title: 'Tracking and measurement', icon: 'DATA', intro: 'Measure whether local search activity leads to useful visits, enquiries and customers.', checks: [
      ['Google Search Console is verified', 'The business can access Search Console data for the correct website property.', 'High', 'Sign in to Search Console and confirm the correct domain or URL-prefix property is verified.', 'Verify the appropriate property and submit the sitemap. Review indexing and performance reports regularly.'],
      ['Google Analytics or another privacy-compliant analytics tool is configured', 'The site has a measurement setup that reflects its needs and applicable privacy obligations.', 'Medium', 'Check whether analytics receives expected page views and whether consent settings behave correctly.', 'Configure a suitable analytics platform and implement consent controls in line with applicable privacy requirements.'],
      ['Important enquiry actions are measurable', 'Calls, form submissions, bookings or purchases can be measured where technically and legally appropriate.', 'High', 'Submit a test form or booking and verify that the intended conversion event is recorded once.', 'Configure reliable conversion events and test them. Avoid counting page views as leads unless that is genuinely the desired action.'],
      ['Organic search performance is reviewed', 'The business monitors relevant search queries, pages, clicks and impressions over time.', 'Medium', 'Review Search Console performance data and compare periods with similar seasonality where possible.', 'Track meaningful trends, investigate page/query changes and avoid drawing conclusions from very small data samples.'],
      ['Local leads are connected to business outcomes where possible', 'The business can distinguish useful enquiries from irrelevant traffic and understand lead quality.', 'Medium', 'Ask how enquiries are recorded and whether their source and outcome can be identified.', 'Use consistent lead tracking or CRM fields and respect privacy obligations. Assess qualified leads, not just traffic volume.'],
      ['A regular review process and baseline are documented', 'The business records current performance and revisits key measures consistently.', 'Low', 'Look for a dated baseline of visibility, enquiries and important technical checks.', 'Record a baseline and review it monthly or quarterly. Annotate major website changes, campaigns and seasonal factors.']
    ]}
  ];

  const allChecks = categories.flatMap(category => category.checks.map((check, index) => ({
    id: `${category.id}-${index + 1}`, categoryId: category.id, title: check[0],
    description: check[1], priority: check[2], how: check[3], fix: check[4]
  })));

  const state = loadState();
  const categoryList = document.getElementById('category-list');
  const searchInput = document.getElementById('search-checks');
  const statusFilter = document.getElementById('status-filter');

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return saved && typeof saved === 'object' ? saved : {};
    } catch (_) { return {}; }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function statusOf(id) { return ['pass', 'fail', 'na'].includes(state[id]) ? state[id] : 'unchecked'; }

  function render() {
    const query = (searchInput.value || '').trim().toLowerCase();
    const filter = statusFilter.value;
    categoryList.innerHTML = '';

    let visibleCount = 0;
    categories.forEach((category, categoryIndex) => {
      const checks = category.checks.map((item, i) => ({
        id: `${category.id}-${i + 1}`, item, number: allChecks.findIndex(c => c.id === `${category.id}-${i + 1}`) + 1
      })).filter(({id, item}) => {
        const status = statusOf(id);
        const matchesQuery = !query || item[0].toLowerCase().includes(query) || item[1].toLowerCase().includes(query);
        const matchesStatus = filter === 'all' || filter === status;
        return matchesQuery && matchesStatus;
      });
      if (!checks.length) return;
      visibleCount += checks.length;

      const totalDone = category.checks.filter((_, i) => statusOf(`${category.id}-${i + 1}`) !== 'unchecked').length;
      const details = document.createElement('details');
      details.className = 'category';
      details.open = Boolean(query || filter !== 'all') || categoryIndex === 0;
      const summary = document.createElement('summary');
      summary.className = 'category-head';
      summary.innerHTML = `<span class="category-icon" aria-hidden="true">${category.icon}</span><span class="category-title"><strong>${escapeHtml(category.title)}</strong><small>${escapeHtml(category.intro)}</small></span><span class="category-progress"><b>${totalDone}/${category.checks.length}</b> reviewed</span>`;
      details.appendChild(summary);

      const items = document.createElement('div');
      items.className = 'check-items';
      checks.forEach(({id, item, number}) => {
        const [title, description, priority, how, fix] = item;
        const status = statusOf(id);
        const article = document.createElement('article');
        article.className = 'check-item';
        article.innerHTML = `
          <div class="check-main">
            <span class="check-number">${String(number).padStart(2, '0')}</span>
            <div class="check-content">
              <div class="check-title">${escapeHtml(title)} <span class="priority priority-${priority.toLowerCase()}">${priority} priority</span></div>
              <p class="check-desc">${escapeHtml(description)}</p>
            </div>
          </div>
          <div class="check-controls" role="group" aria-label="Status for ${escapeHtml(title)}">
            <button class="status-btn" type="button" data-id="${id}" data-status="pass" aria-pressed="${status === 'pass'}">✓ Passed</button>
            <button class="status-btn" type="button" data-id="${id}" data-status="fail" aria-pressed="${status === 'fail'}">! Needs attention</button>
            <button class="status-btn" type="button" data-id="${id}" data-status="na" aria-pressed="${status === 'na'}">— Not applicable</button>
          </div>
          <button class="how-toggle" type="button" aria-expanded="false" aria-controls="help-${id}">How to check and fix</button>
          <div class="check-help" id="help-${id}" hidden>
            <p><strong>How to check:</strong> ${escapeHtml(how)}</p>
            <p><strong>Recommended action:</strong> ${escapeHtml(fix)}</p>
          </div>`;
        items.appendChild(article);
      });
      details.appendChild(items);
      categoryList.appendChild(details);
    });

    if (!visibleCount) categoryList.innerHTML = '<div class="empty-state">No checks match your search. Try another term or change the status filter.</div>';
    updateDashboard();
  }

  function updateDashboard() {
    const counts = {pass: 0, fail: 0, na: 0, unchecked: 0};
    allChecks.forEach(check => counts[statusOf(check.id)]++);
    const reviewed = counts.pass + counts.fail + counts.na;
    const completion = Math.round((reviewed / allChecks.length) * 100);
    const highIssues = allChecks.filter(check => check.priority === 'High' && statusOf(check.id) === 'fail').length;

    document.getElementById('completion-value').textContent = `${completion}%`;
    document.getElementById('passed-count').textContent = counts.pass;
    document.getElementById('attention-count').textContent = counts.fail;
    document.getElementById('na-count').textContent = counts.na;
    document.getElementById('unchecked-count').textContent = counts.unchecked;
    document.getElementById('high-issues').textContent = highIssues;
    document.getElementById('progress-fill').style.width = `${completion}%`;
    const progress = document.getElementById('overall-progress');
    progress.setAttribute('aria-valuenow', String(completion));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }

  categoryList.addEventListener('click', event => {
    const statusButton = event.target.closest('.status-btn');
    if (statusButton) {
      const id = statusButton.dataset.id;
      const next = statusButton.dataset.status;
      if (state[id] === next) delete state[id]; else state[id] = next;
      saveState();
      render();
      return;
    }
    const helpButton = event.target.closest('.how-toggle');
    if (helpButton) {
      const panel = document.getElementById(helpButton.getAttribute('aria-controls'));
      const isOpen = helpButton.getAttribute('aria-expanded') === 'true';
      helpButton.setAttribute('aria-expanded', String(!isOpen));
      helpButton.textContent = isOpen ? 'How to check and fix' : 'Hide guidance';
      panel.hidden = isOpen;
    }
  });

  searchInput.addEventListener('input', render);
  statusFilter.addEventListener('change', render);

  function printReport() {
    // Expand categories so the print/PDF report includes the complete audit.
    document.querySelectorAll('.category').forEach(category => { category.open = true; });
    document.querySelectorAll('.check-help').forEach(panel => { panel.hidden = false; });
    window.print();
  }

  document.getElementById('print-report').addEventListener('click', printReport);
  document.getElementById('print-report-bottom').addEventListener('click', printReport);
  document.getElementById('reset-audit').addEventListener('click', () => {
    if (!window.confirm('Reset all 50 checklist statuses on this device? This cannot be undone.')) return;
    Object.keys(state).forEach(key => delete state[key]);
    saveState();
    render();
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
    const desktop = window.matchMedia('(min-width: 701px)');
    const resetForDesktop = event => { if (event.matches) closeMenu(); };
    if (desktop.addEventListener) desktop.addEventListener('change', resetForDesktop);
    else if (desktop.addListener) desktop.addListener(resetForDesktop);
  }

  render();
})();