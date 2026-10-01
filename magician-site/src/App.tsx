import { ArrowDown, ArrowLeft, ArrowUpRight, Check, X } from 'reicon-react'
import { MotionConfig, motion, useReducedMotion } from 'motion/react'
import { cn } from './lib/utils'
import { TOPIC_INDEX_URL, context, examples, how, meta, nav, sources, take, what, when } from './content'
import { Reveal } from './components/Reveal'
import { FlickeringGrid } from './components/ui/flickering-grid'
import { TypingAnimation } from './components/ui/typing-animation'
import { useGridTuning } from './tune/gridTuning'

type SectionHeadProps = { id: string; number: string; title: string; heading: string; even?: boolean }

function SectionHead({ id, number, title, heading, even }: SectionHeadProps) {
  const reduceMotion = useReducedMotion()
  return (
    <header className={cn('section-head', even && 'section-head--even')}>
      <motion.div className="section-number-motion" initial={reduceMotion ? false : { opacity: 0, transform: 'translateY(30px)' }} whileInView={{ opacity: 1, transform: 'translateY(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.23, 1, 0.32, 1] }}>
        <span className="section-number" aria-hidden="true">{number}</span>
      </motion.div>
      <Reveal className="section-title-wrap" delay={0.08}>
        <p className="eyebrow">{title}</p>
        <h2 id={`${id}-heading`}>{heading}</h2>
      </Reveal>
    </header>
  )
}

function ExternalLink({ url, label }: { url: string; label: string }) {
  return (
    <a className="source-link" href={url} target="_blank" rel="noreferrer">
      <span>{label}</span><ArrowUpRight aria-hidden="true" />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  )
}

const shapeClasses = ['shape-circle', 'shape-triangle', 'shape-half', 'shape-square']
// Portrait photos (Disney, Dyson, Polaroid) get narrow slots, landscape ones (Apple) wide. '' = default 4 of 12 columns.
const exampleClasses = ['example-narrow', 'example-wide', '', '', '']

function App() {
  const reduceMotion = useReducedMotion()
  const grid = useGridTuning()
  return (
    <MotionConfig reducedMotion="user">
    <div className="site-wrap">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="progress" aria-hidden="true" />
      <header className="site-header">
        <a className="topic-link" href={TOPIC_INDEX_URL}><ArrowLeft aria-hidden="true" />Topic index</a>
        <nav aria-label="Sections">
          {nav.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
        <p className="header-credit">{meta.author} · {meta.course}</p>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span aria-hidden="true" />{meta.kicker}</p>
            <h1 id="hero-title"><em>The</em>{' '}<strong>Magician</strong></h1>
            <motion.div className="tagline" initial={reduceMotion ? false : { opacity: 0, transform: 'scale(1.25) rotate(-14deg)' }} animate={{ opacity: 1, transform: 'scale(1) rotate(-6deg)' }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', duration: 0.6, bounce: 0.3, delay: 0.55 }}>{meta.tagline}</motion.div>
            <p className="lede">{meta.lede}</p>
            <div className="hero-meta">
              <p>By {meta.author} · {meta.course}</p>
              <a href="#what">Start <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="hero-collage">
            <span className="dots" aria-hidden="true" />
            <span className="ember-orb" aria-hidden="true" />
            <span className="stone-triangle" aria-hidden="true" />
            <img className="conjurer-piece" src={examples.shadow.image.src} width={examples.shadow.image.width} height={examples.shadow.image.height} alt="" loading="lazy" decoding="async" />
            <div className="tarot-frame">
              <img src={meta.image.src} width={meta.image.width} height={meta.image.height} alt={meta.image.alt} fetchPriority="high" decoding="async" />
              <figcaption>{meta.image.caption}</figcaption>
            </div>
          </figure>
        </section>

        <section className="slide section-what" id="what" aria-labelledby="what-heading">
          <SectionHead id="what" number={what.number} title={what.title} heading={what.heading} />
          <div className="two-col prose-layout">
            <div className="body-copy">{what.body.map((p) => <p key={p}>{p}</p>)}</div>
            <dl className="spec-card">
              {what.traits.map((trait) => <div key={trait.label}><dt>{trait.label}</dt><dd className={trait.label === 'Risk' ? 'risk' : ''}>{trait.value}</dd></div>)}
            </dl>
          </div>
          <div className="traits-grid">
            {what.characteristics.map((item, index) => (
              <article className="trait" key={item.name}><span className={shapeClasses[index]} aria-hidden="true" /><h3>{item.name}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="slide" id="when" aria-labelledby="when-heading">
          <SectionHead id="when" number={when.number} title={when.title} heading={when.heading} even />
          <div className="when-grid">
            <div className="labeled-copy"><h3>Audience</h3><p>{when.audience}</p><h3>Purpose</h3><p>{when.purpose}</p></div>
            <div className="fit-list"><h3>Good fit for</h3><ol>{when.fits.map((fit, i) => <li key={fit}><span>{String(i + 1).padStart(2, '0')}</span>{fit}</li>)}</ol></div>
          </div>
          <aside className="avoid-panel"><div className="stripe" aria-hidden="true" /><p className="eyebrow">Skip it when</p><p>{when.avoid}</p></aside>
        </section>

        <section className="slide" id="how" aria-labelledby="how-heading">
          <SectionHead id="how" number={how.number} title={how.title} heading={how.heading} />
          <div className="facets">{how.facets.map((facet) => <article key={facet.name}><h3 aria-label={facet.name}>{reduceMotion ? facet.name : <TypingAnimation aria-hidden="true" duration={70} cursorStyle="line">{facet.name}</TypingAnimation>}</h3><p>{facet.text}</p></article>)}</div>
          <div className="palette-block"><h3>This page's palette</h3><div className="swatches">{how.palette.map((color) => <article key={color.hex} style={{ '--swatch': color.hex } as React.CSSProperties}><span /><h4>{color.name}</h4><code>{color.hex}</code><p>{color.role}</p></article>)}</div></div>
          <div className="wording-grid">
            {how.wording.map((pair, i) => <article key={pair.do}><div><h3><Check aria-hidden="true" />Do</h3><p>{pair.do}</p></div><div><h3><X aria-hidden="true" />Don't</h3><p>{pair.dont}</p></div><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span></article>)}
          </div>
        </section>

        <section className="slide" id="examples" aria-labelledby="examples-heading">
          <SectionHead id="examples" number={examples.number} title={examples.title} heading={examples.heading} even />
          {/* The card (never clipped) watches for visibility and tells its image to reveal. A fully clipped image can't
              reliably detect that itself, and as a lazy image it might never load, so these images load eagerly. */}
          <div className="examples-grid">{examples.items.map((item, i) => <motion.article className={cn('example-card', exampleClasses[i])} key={item.brand} initial={reduceMotion ? false : 'hidden'} whileInView="shown" viewport={{ once: true, margin: '0px 0px -80px 0px' }}><div className="print-frame"><motion.img variants={{ hidden: { clipPath: 'inset(0 0 100% 0)' }, shown: { clipPath: 'inset(0 0 0 0)' } }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : i * 0.06, ease: [0.23, 1, 0.32, 1] }} src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} decoding="async" /></div><p className="detail">{item.detail}</p><h3>{item.brand}</h3><p>{item.text}</p></motion.article>)}</div>
          <article className="shadow-card"><div className="print-frame"><img src={examples.shadow.image.src} width={examples.shadow.image.width} height={examples.shadow.image.height} alt={examples.shadow.image.alt} loading="lazy" decoding="async" /></div><div><p className="detail">{examples.shadow.detail}</p><h3>{examples.shadow.brand}</h3><p>{examples.shadow.text}</p></div></article>
        </section>

        <section className="slide" id="context" aria-labelledby="context-heading">
          <SectionHead id="context" number={context.number} title={context.title} heading={context.heading} />
          <div className="timeline">{context.timeline.map((stop, i) => <Reveal delay={i * 0.07} key={stop.year}><article><h3>{stop.year}</h3><p>{stop.text}</p></article></Reveal>)}</div>
          <p className="modernism-intro">{context.modernismIntro}</p>
          <div className="modernism-grid">{context.modernism.map((item, i) => <article key={item.stance}><span className={shapeClasses[i]} aria-hidden="true" /><h3>{item.stance}</h3><p>{item.text}</p></article>)}</div>
          <article className="approach-panel"><span className="dots" aria-hidden="true" /><h3>{context.approach.title}</h3><p>{context.approach.lead}</p><ol>{context.approach.points.map((point, i) => <li key={point}><span>{i + 1}</span><p>{point}</p></li>)}</ol></article>
        </section>

        <section className="take-slide" id="take" aria-labelledby="take-heading">
          <FlickeringGrid className="take-grid" aria-hidden="true" color="#F0834F" squareSize={grid.squareSize} gridGap={grid.gridGap} flickerChance={grid.flickerChance} maxOpacity={grid.maxOpacity} style={{ '--grid-fade': `${grid.fade}%` } as React.CSSProperties} />
          <div className="take-inner">
            <p className="take-kicker">{take.number} · {take.kicker}</p>
            <blockquote aria-label={take.quote}>{['It is', 'what it', 'is.'].map((line, i) => <motion.span key={line} initial={reduceMotion ? false : { opacity: 0, transform: 'translateY(24px)' }} whileInView={{ opacity: 1, transform: 'translateY(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={reduceMotion ? { duration: 0 } : i === 2 ? { type: 'spring', duration: 0.6, bounce: 0.25, delay: i * 0.09 } : { duration: 0.6, delay: i * 0.09, ease: [0.23, 1, 0.32, 1] }}>{line}</motion.span>)}</blockquote>
            <h2 id="take-heading">{take.heading}</h2>
            <div className="take-body"><p>{take.body[0]}</p><div><p>{take.body[1]}</p><img src={meta.image.src} width={meta.image.width} height={meta.image.height} alt="" loading="lazy" decoding="async" /></div></div>
            <div className="principles">{take.principles.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
            <dl className="choices">{take.choices.map((item) => <div key={item.name}><dt>{item.name}</dt><dd>{item.text}</dd></div>)}</dl>
          </div>
        </section>

        <section className="slide sources-slide" id="sources" aria-labelledby="sources-heading">
          <SectionHead id="sources" number={sources.number} title={sources.title} heading={sources.title} />
          <div className="sources-grid"><div><h3>References</h3><ol>{sources.references.map((item) => <li key={item.url}><ExternalLink {...item} /></li>)}</ol></div><div><h3>Image credits</h3><ul>{sources.credits.map((item) => <li key={item.url}><ExternalLink {...item} /></li>)}</ul></div></div>
        </section>
      </main>

      <footer><a className="footer-index" href={TOPIC_INDEX_URL}><ArrowLeft aria-hidden="true" />Back to the topic index</a><a className="back-top" href="#top">Back to top</a><p>Sample page by {meta.author} for {meta.course}. Images via Wikimedia Commons, credits above.</p></footer>
    </div>
    </MotionConfig>
  )
}

export default App
