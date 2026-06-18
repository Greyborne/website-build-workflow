# Page Blueprints: chaztrickey.com

Version: 0.1 draft
Created: June 14, 2026

## Home Page

**Page URL:** `/`
**Primary user goal:** Understand who Chaz is and decide whether his content is worth following.
**Primary site goal:** Move visitors toward the About page, latest articles, or active platform links.
**Target user state on arrival:** Curious but unfamiliar; likely arriving from social discovery or direct referral.

### User Journey

1. **Arrives thinking:** "Who is this, and why should I listen?"
2. **Needs to feel:** Grounded confidence, not hype.
3. **Key objection to overcome:** This could be another loud opinion site with no substance.
4. **Leaves knowing:** Chaz teaches from real IT experience, clear values, and personal discipline.

### Section Plan

#### Section 1: HomeHero
- **Purpose:** Establish the personal brand promise in one serious, memorable first impression.
- **Placement rationale:** Visitors need identity before content categories.
- **Content summary:**
  - Headline: "Technology, America, and purpose, explained without the noise."
  - Subhead/body: "I am Chaz Trickey: a senior IT architect, a faith-led husband and father, and a teacher at heart."
  - CTA label + destination: "Read Who I Am" -> `/who-i-am`
  - Secondary CTA: "Browse Articles" -> `/articles`
  - Visual element: Portrait or tattoo-inspired American flag/flame detail until portrait is ready.
- **CMS fields:** heading, subheading, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, heroImage, heroImageAlt
- **Responsive notes:** Mobile stacks text above image; desktop uses asymmetric 7/5 grid.
- **Anti-slop check:** Not a centered gradient hero; identity and editorial framing drive the layout.

#### Section 2: ContentLanes
- **Purpose:** Show the three content lanes as one coherent voice.
- **Placement rationale:** After trust framing, visitors need to know what kind of content they will find.
- **Content summary:** Tech Made Simple, The State of Things, By Design.
- **CMS fields:** lanes array with title, description, ctaLabel, ctaUrl, category relation
- **Responsive notes:** Mobile stacks lanes; desktop uses staggered cards with different vertical offsets.
- **Anti-slop check:** Avoid identical icon feature cards; use editorial lane treatments.

#### Section 3: LatestArticles
- **Purpose:** Make the site feel alive even while the content library grows.
- **Placement rationale:** Once the lanes are understood, visitors can sample the work.
- **Content summary:** Featured latest article plus compact recent list.
- **CMS fields:** heading, featuredArticle, articleLimit, selectedCategories
- **Responsive notes:** Featured first on mobile; split layout on desktop.
- **Anti-slop check:** Publication list, not generic blog cards.

#### Section 4: PlatformStatus
- **Purpose:** Give visitors clear follow options without pretending unfinished platforms are active.
- **Placement rationale:** Comes after content value is established.
- **Content summary:** Facebook active, YouTube/Rumble/TikTok coming soon.
- **CMS fields:** heading, platforms array
- **Responsive notes:** Compact stacked rows on mobile; rail/grid on desktop.
- **Anti-slop check:** No generic social icon pile; each platform has status context.

#### Section 5: CredentialProof
- **Purpose:** Reinforce credibility through facts, not inflated claims.
- **Placement rationale:** Proof lands better after the visitor understands the voice and topics.
- **Content summary:** 20+ years IT, certifications, senior role, 250-lb transformation as discipline proof.
- **CMS fields:** heading, credentials array
- **Responsive notes:** Groups collapse into readable blocks on mobile.
- **Anti-slop check:** Not a stats bar; every proof point has context.

### Page SEO

- **Title:** `Chaz Trickey | Technology, America, and Purpose`
- **Meta description:** `The official home of Chaz Trickey: plain-spoken tech education, grounded civic commentary, and faith-led family perspective.`
- **Primary keyword target:** Chaz Trickey
- **Structured data type:** Person, WebSite

### What This Page Does Not Have

- No testimonial carousel: no testimonials exist yet.
- No newsletter signup: intentionally deferred.
- No generic "why choose me" section: credibility is handled through story and proof.

## Who I Am Page

**Page URL:** `/who-i-am`
**Primary user goal:** Decide whether Chaz is credible and trustworthy enough to follow.
**Primary site goal:** Build personal connection and send visitors to articles/follow links.
**Target user state on arrival:** Evaluating the person behind the posts.

### Section Plan

#### Section 1: OriginStory
- **Purpose:** Explain the person behind the voice.
- **Placement rationale:** The page exists to answer "Who is Chaz?"
- **Content summary:** Direct first-person introduction with faith, family, IT, and teaching instinct.
- **CMS fields:** heading, body, portrait, portraitAlt
- **Responsive notes:** Prose-first on mobile; portrait/sidebar on desktop.
- **Anti-slop check:** Not a default timeline; the story is thematic and personal.

#### Section 2: CredentialProof
- **Purpose:** Give concrete reasons to trust technical content.
- **Placement rationale:** After the personal opening, credentials become evidence rather than bragging.
- **Content summary:** MCSE, MCSA, Azure, CompTIA, senior IT/SQL architect, 20+ years.
- **CMS fields:** credentials array
- **Responsive notes:** Group by category.
- **Anti-slop check:** Avoid "years of experience" without specifics.

#### Section 3: TransformationNote
- **Purpose:** Show discipline and long-term commitment through the weight-loss story.
- **Placement rationale:** Works after professional credibility because it is character evidence, not the main pitch.
- **Content summary:** 435 lbs to 185-190 over 10 years, maintained for 1+ year.
- **CMS fields:** heading, body, optionalImage
- **Responsive notes:** Prose with one highlighted pull quote.
- **Anti-slop check:** Not framed as a fitness brand or self-help funnel.

#### Section 4: PlatformStatus
- **Purpose:** Give a next step for readers who now trust the person.
- **Placement rationale:** Follows the relationship-building content.
- **Content summary:** Follow links and coming-soon channels.
- **CMS fields:** platforms array
- **Responsive notes:** Same as home.
- **Anti-slop check:** Specific statuses, no fake urgency.

### Page SEO

- **Title:** `Who Is Chaz Trickey? | chaztrickey.com`
- **Meta description:** `Meet Chaz Trickey: senior IT architect, teacher at heart, faith-led family man, and creator of plain-spoken tech and civic commentary.`
- **Primary keyword target:** who is Chaz Trickey
- **Structured data type:** Person

## Articles Page

**Page URL:** `/articles`
**Primary user goal:** Find content by topic.
**Primary site goal:** Encourage reading and return visits.
**Target user state on arrival:** Topic-driven; they may want tech, civic commentary, or faith/family content.

### Section Plan

#### Section 1: ArticlesHeader
- **Purpose:** Set expectations for the three content categories.
- **Placement rationale:** Visitors need orientation before filtering.
- **Content summary:** "Read by lane, not by algorithm."
- **CMS fields:** heading, intro
- **Responsive notes:** Compact, text-forward.
- **Anti-slop check:** Not a generic blog hero.

#### Section 2: ArticleFilters
- **Purpose:** Let users select Tech Made Simple, The State of Things, or By Design.
- **Placement rationale:** Filtering is the main task on this page.
- **Content summary:** Category tabs with article counts.
- **CMS fields:** categories relation
- **Responsive notes:** Scrollable segmented control on mobile.
- **Anti-slop check:** Functional control, not decorative tags.

#### Section 3: ArticleList
- **Purpose:** Display article results clearly.
- **Placement rationale:** Main content after filters.
- **Content summary:** Article title, excerpt, category, reading time, publish date.
- **CMS fields:** Articles collection.
- **Responsive notes:** Single-column list on mobile; featured/list split when enough articles exist.
- **Anti-slop check:** Avoid uniform image card grid unless articles have meaningful images.

### Page SEO

- **Title:** `Articles | Chaz Trickey`
- **Meta description:** `Read Chaz Trickey's latest writing on everyday technology, American civic life, faith, family, and purpose.`
- **Primary keyword target:** Chaz Trickey articles
- **Structured data type:** CollectionPage

## Follow Page

**Page URL:** `/follow`
**Primary user goal:** Find where to follow Chaz or send a message.
**Primary site goal:** Route visitors to active platforms and capture direct contact.
**Target user state on arrival:** Ready to connect.

### Section Plan

#### Section 1: ContactIntro
- **Purpose:** Clearly explain the best ways to follow or contact Chaz.
- **Placement rationale:** This page should be functional immediately.
- **Content summary:** Active Facebook link, planned platforms, simple contact invitation.
- **CMS fields:** heading, intro, platforms
- **Responsive notes:** Platform list first, form second on mobile.
- **Anti-slop check:** No "we'd love to hear from you"; use direct language.

#### Section 2: ContactForm
- **Purpose:** Let visitors send direct messages.
- **Placement rationale:** Secondary to following but still available.
- **Content summary:** Name, email, subject, message.
- **CMS fields:** ContactSubmissions collection.
- **Responsive notes:** Full-width inputs on mobile.
- **Anti-slop check:** Form copy must set expectations about response, not generic warmth.

### Page SEO

- **Title:** `Follow Chaz Trickey | chaztrickey.com`
- **Meta description:** `Follow Chaz Trickey's technology education, civic commentary, and faith-led family perspective across active and upcoming platforms.`
- **Primary keyword target:** follow Chaz Trickey
- **Structured data type:** ContactPage

## Privacy Policy Page

**Page URL:** `/privacy`
**Primary user goal:** Understand tracking, cookies, and contact form handling.
**Primary site goal:** Meet legal expectations for GA4 and contact forms.
**Target user state on arrival:** Compliance or trust-checking.

### Section Plan

#### Section 1: LegalContent
- **Purpose:** Explain privacy practices plainly.
- **Placement rationale:** Legal pages should be direct and readable.
- **Content summary:** Analytics, cookies, contact form data, external platform links, update date.
- **CMS fields:** title, body, updatedAt
- **Responsive notes:** Prose only.
- **Anti-slop check:** No decorative sections.

### Page SEO

- **Title:** `Privacy Policy | Chaz Trickey`
- **Meta description:** `Privacy policy for chaztrickey.com, including contact form data, analytics, cookies, and external platform links.`
- **Primary keyword target:** chaztrickey.com privacy policy
- **Structured data type:** WebPage

