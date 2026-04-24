import './App.css'

const capabilities = [
  {
    title: 'Deep reasoning',
    copy: 'Maps vague goals into clear plans, evaluates tradeoffs, and keeps complex work coherent across many steps.',
    stat: '01',
    detail: 'Plans',
  },
  {
    title: 'Production coding',
    copy: 'Designs, debugs, refactors, and explains software with attention to architecture, tests, and maintainability.',
    stat: '02',
    detail: 'Builds',
  },
  {
    title: 'Creative direction',
    copy: 'Turns raw ideas into polished product narratives, campaigns, interfaces, and brand systems.',
    stat: '03',
    detail: 'Shapes',
  },
  {
    title: 'Research synthesis',
    copy: 'Condenses dense material into useful briefings, decisions, and next actions without losing nuance.',
    stat: '04',
    detail: 'Synthesizes',
  },
  {
    title: 'Multimodal thinking',
    copy: 'Connects text, visuals, documents, and interaction patterns into one understandable workspace.',
    stat: '05',
    detail: 'Connects',
  },
  {
    title: 'Workflow automation',
    copy: 'Coordinates tools, files, data, and repetitive tasks so teams can move from intent to execution faster.',
    stat: '06',
    detail: 'Orchestrates',
  },
]

const workflowSteps = [
  'Understand the mission',
  'Explore constraints',
  'Design the path',
  'Build the result',
  'Verify the outcome',
]

const metrics = [
  { label: 'Strategic clarity', value: '98', width: '98%' },
  { label: 'Code fluency', value: '94', width: '94%' },
  { label: 'Creative range', value: '96', width: '96%' },
]

const heroStats = [
  { value: '5.5x', label: 'faster path from prompt to product' },
  { value: '128k', label: 'context for ambitious workflows' },
  { value: '24/7', label: 'partner for focused execution' },
]

const featureBands = [
  'Long-horizon planning',
  'Tool-aware execution',
  'Design critique',
  'Context retention',
  'Reliable iteration',
  'Product storytelling',
]

function App() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ChatGPT 5.5 showcase home">
          <span className="brand-mark">G</span>
          <span>GPT 5.5</span>
        </a>
        <div className="nav-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <a href="#vision">Vision</a>
        </div>
        <a className="nav-cta" href="#launch">
          Explore
        </a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">OpenAI frontier model showcase</p>
          <h1>
            Intelligence with the gravity to move ideas into orbit.
          </h1>
          <p className="hero-lede">
            A cinematic landing page concept for ChatGPT 5.5, where reasoning,
            coding, creativity, and workflow orchestration feel like one
            luminous command center.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#capabilities">
              See capabilities
            </a>
            <a className="button secondary" href="#workflow">
              View workflow
            </a>
          </div>
          <div className="hero-stats" aria-label="Model highlights">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="AI capability interface preview">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="beam beam-one"></div>
          <div className="beam beam-two"></div>
          <div className="command-card glass-card">
            <div className="card-topline">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="prompt-label">Prompt</p>
            <h2>Turn a loose idea into a launch-ready product universe.</h2>
            <div className="response-stack">
              <div className="response-row wide"></div>
              <div className="response-row"></div>
              <div className="response-row short"></div>
            </div>
            <div className="console-panel">
              <span>reasoning.trace</span>
              <p>Strategy, interface, code, and launch story aligned.</p>
            </div>
          </div>
          <div className="insight-card glass-card">
            <span>Live synthesis</span>
            <strong>12 connected decisions</strong>
          </div>
          <div className="model-chip">Reasoning + Design + Code</div>
          <div className="signal-card glass-card">
            <span>Context lock</span>
            <strong>99%</strong>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Core strengths">
        <div>
          {[...featureBands, ...featureBands].map((feature, index) => (
            <span key={`${feature}-${index}`}>{feature}</span>
          ))}
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="section-heading">
          <p className="eyebrow">Capability surface</p>
          <h2>Power that shows up as thoughtful execution.</h2>
          <p>
            The design presents GPT as a practical creative partner: strategic
            enough to plan, technical enough to build, and polished enough to
            communicate.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <div className="capability-card-top">
                <span>{item.stat}</span>
                <em>{item.detail}</em>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-grid section" id="workflow">
        <div className="workflow-panel panel">
          <p className="eyebrow">From prompt to product</p>
          <h2>One model, many modes of work.</h2>
          <div className="timeline">
            {workflowSteps.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="metrics-panel panel">
          <p className="eyebrow">Interface language</p>
          <h2>Make intelligence visible.</h2>
          <p>
            Clean data panels, calm motion, and precise spacing turn abstract
            capability into something people can understand at a glance.
          </p>
          <div className="signal-grid" aria-label="Experience principles">
            <span>Legible</span>
            <span>Fast</span>
            <span>Composed</span>
            <span>Adaptive</span>
          </div>
          <div className="metric-list">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <div>
                  <span>{metric.label}</span>
                  <strong>{metric.value}%</strong>
                </div>
                <div className="meter">
                  <span style={{ width: metric.width }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section section" id="vision">
        <div>
          <p className="eyebrow">Design thesis</p>
          <h2>Advanced AI should feel powerful, legible, and composed.</h2>
        </div>
        <p>
          This concept avoids noisy sci-fi tropes and uses a restrained visual
          system: luminous accents, editorial typography, structured cards, and
          responsive layouts that keep the experience sharp on every screen.
        </p>
      </section>

      <section className="closing-cta" id="launch">
        <p className="eyebrow">What will you build next?</p>
        <h2>Give the model a goal. Let the interface reveal the leap.</h2>
        <p>
          From a single spark to a finished artifact, the page now frames GPT
          5.5 as an engine for beautifully coordinated work.
        </p>
        <a className="button primary" href="#top">
          Return to top
        </a>
      </section>
    </main>
  )
}

export default App
