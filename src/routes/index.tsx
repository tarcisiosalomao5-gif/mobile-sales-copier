import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-lucifer.png";
import luciferLogo from "@/assets/lucifer-logo.png";
import luciferLogoHorizontal from "@/assets/lucifer-logo-horizontal.png";
import blocoQuerubins from "@/assets/bloco-querubins.png";
import blocoDemonios from "@/assets/bloco-demonios.png";
import blocoLucifer from "@/assets/bloco-lucifer.png";
import blocoTronos from "@/assets/bloco-tronos.png";
import blocoSerafins from "@/assets/bloco-serafins.png";
import tarcisioFoto from "@/assets/tarcisio.jpg";
import {
  Calendar,
  Clock,
  Check,
  X,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { Minus, Plus, ShieldCheck, Award, Lock } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Imersão A Queda de Lúcifer — 2 noites de estudo bíblico ao vivo" },
      {
        name: "description",
        content:
          "2 noites comigo, ao vivo, com a Bíblia na mão. A história da queda de Lúcifer versículo por versículo, do jeito que está escrito.",
      },
    ],
  }),
});

const ctaBtn =
  "cta-premium inline-flex w-full items-center justify-center rounded-md px-5 py-4 text-base font-extrabold tracking-wide text-[var(--cta-foreground)] transition-transform";

const ctaBtnSmall =
  "cta-premium inline-flex w-full items-center justify-center rounded-md px-5 py-[14px] text-[14px] font-extrabold tracking-wide text-[var(--cta-foreground)] transition-transform md:px-[22px] md:py-6 md:text-base";

function HighlightOrange({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-primary px-2 py-0.5 text-primary-foreground">
      {children}
    </span>
  );
}

function MarqueeBar() {
  const item = "IMERSÃO • A QUEDA DE LÚCIFER";
  return (
    <div className="overflow-hidden py-3 text-white" style={{ background: "var(--flame)" }}>
      <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="mx-6 text-sm font-black italic tracking-wider"
          >
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
}

function StickyVagas() {
  return (
      <div
      className="fixed inset-x-0 bottom-0 z-50 px-[14px] pt-[6px] pb-2 text-white md:px-[18px] md:py-3"
      style={{ background: "var(--blood)" }}
    >
      <p className="text-center text-[11px] font-bold tracking-wide md:text-xs">
        VAGAS DESTE LOTE JÁ VENDIDAS:
      </p>
      <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-white/40 md:h-3">
        <div className="progress-fill flex h-full w-[87%] items-center justify-end rounded-full bg-black/70 pr-2">
          <span className="text-[10px] font-bold italic text-white">87%</span>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background pb-16 text-foreground">
      {/* HERO */}
      <section className="relative bg-[var(--dark-section)]">
        <div className="relative">
          <img
            src={heroImg}
            alt="A queda de Lúcifer — anjo caindo dos céus"
            width={1920}
            height={1080}
            className="hero-image-img hero-image-anim mx-auto block h-[280px] max-h-[280px] w-full object-cover md:h-[50vh] md:min-h-[360px] md:max-h-[480px]"
            style={{ objectPosition: "center 30%" }}
          />
          {/* fade pra cream */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--background))",
            }}
          />
        </div>
      </section>

      <section className="hero-copy relative z-0 px-5 text-center">
        {/* 1. Logo sobreposto */}
        <header className="brand brand-hero hero-anim-1 relative px-5 text-center md:-mt-[70px] md:mb-0">
          <img
            src={luciferLogo}
            alt="A Queda de Lúcifer — Imersão Bíblica"
            className="brand-logo mx-auto block h-auto w-full md:max-w-[460px]"
            style={{ background: "transparent" }}
          />
        </header>

        {/* 2. Date box */}
        <div className="hero-date-box hero-anim-2 mx-auto flex max-w-sm items-center justify-center gap-3 rounded-md border border-border bg-card px-[14px] py-[10px] text-[13px] font-semibold md:my-5 md:px-[18px] md:py-4 md:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" /> 26 e 27 de Maio
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 20h às 22h30
          </span>
        </div>

        {/* 3. Headline */}
        <h1 className="hero-headline hero-anim-3 mx-auto max-w-sm md:mb-6 md:mt-5 md:text-[2rem] md:leading-[1.18]">
          Em 2 noites você vai descobrir tudo o que a Bíblia diz sobre{" "}
          <span className="hero-lead-mark">a queda de Lúcifer</span>{" "}
          e sobre o mundo espiritual.
        </h1>

        {/* 4-5. Lead com grifo inline + continuação */}
        <p className="hero-lead-combined hero-anim-4 mx-auto max-w-sm md:text-[15.5px] md:leading-snug">
          <span className="hero-lead-mark">Aprenda ao vivo sobre a queda de Lúcifer</span>{" "}
          versículo por versículo. Entenda sobre o mundo espiritual e sobre o que realmente a Bíblia diz sobre isso.
        </p>

        {/* 6. Botão */}
        <div className="hero-anim-6 mx-5 max-w-sm md:mx-auto md:mt-[28px]">
          <a
            href="#inscricao"
            className={ctaBtnSmall}
          >
            QUERO GARANTIR MINHA VAGA
          </a>
        </div>

        {/* 7. Checks */}
        <ul className="hero-anim-7 mx-auto mt-[20px] max-w-sm space-y-[5px] rounded-xl p-[18px] text-left text-[14px] font-bold md:mt-[32px] md:space-y-2 md:p-[26px] md:text-sm">
          {[
            "2 noites ao vivo, comigo, com a Bíblia na mão",
            "Você vai saber quem é Lúcifer e como foi sua queda segundo a Bíblia",
            "Conhecimento que você passa pros seus filhos, pra sua igreja, pro seu grupo",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={3} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* VIRADA DE CHAVE */}
      <section className="px-5 pt-14 text-center">
        <span className="badge-3d-light">
          POR QUE EU PRECISO APRENDER SOBRE ISSO?
        </span>
        <h2 className="sec-h2 mx-auto mt-6 max-w-sm text-[26px] font-extrabold leading-tight">
          Tem coisa sobre Lúcifer na Bíblia que{" "}
          <em className="not-italic" style={{ color: "var(--blood)" }}>
            você nunca ouviu na sua igreja inteira.
          </em>
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-left text-[14px] leading-relaxed">
          Você já ouviu mil coisas sobre Lúcifer. Que ele era anjo. Que ele caiu. Que
          ele virou Satanás. Que ele queria ser igual a Deus. Só que olha que loucura:
          muita coisa que você ouviu sobre ele{" "}
          <strong>não tá em lugar nenhum da Bíblia.</strong> Tá em filme. Tá em série.
          Tá em vídeo de TikTok. Tá na boca de pastor que fala mais o que ele ACHA do
          que o que tá escrito.
        </p>

        <div
          className="quote mx-auto mt-6 max-w-sm rounded-xl p-5 text-left text-[15px] leading-snug text-white"
          style={{ background: "var(--blood)" }}
        >
          "Hoje a gente sabe mais sobre Lúcifer por filme da Netflix do que pela
          própria Bíblia. EU TO MENTINDO?"
        </div>

        <p className="mx-auto mt-6 max-w-sm text-left text-[14px] leading-relaxed">
          E o pior. O que tá DE FATO escrito na Bíblia sobre ele é mil vezes mais doido
          do que qualquer filme que você já viu. Tem capítulo inteiro de Isaías que quase
          ninguém estuda direito. Tem Ezequiel 28 que você provavelmente nunca leu com
          atenção. Tem Apocalipse 12 que é absurdo de profundo. E ninguém te leva por
          isso. Ninguém senta com você, abre o texto e te explica versículo por versículo.
        </p>

        <div className="mx-auto mt-8 max-w-sm space-y-2">
          <p className="text-[15px] font-bold" style={{ color: "var(--ember-deep)" }}>
            Achismo te deixa na névoa.
          </p>
          <p className="text-[15px] font-bold" style={{ color: "var(--blood)" }}>
            Bíblia te dá clareza.
          </p>
        </div>

        <h3 className="sec-h2 mx-auto mt-8 max-w-sm text-[22px] font-extrabold leading-tight">
          E se você pudesse entender tudo isso em{" "}
          <em className="not-italic" style={{ color: "var(--blood)" }}>2 noites?</em>
        </h3>
      </section>

      {/* HOJE × DEPOIS */}
      <section className="px-5 pt-12">
        <div className="rounded-2xl border-2 bg-card p-6" style={{ borderColor: "var(--blood)" }}>
          <div
            className="-mt-10 mb-4 inline-block px-4 py-2 text-sm font-extrabold tracking-wide text-white"
            style={{ background: "var(--blood)" }}
          >
            HOJE
          </div>
          <ul className="space-y-3 text-sm font-bold">
            {[
              "Você ouve falar de Lúcifer mas não sabe a história dele de verdade",
              "Mistura o que tá na Bíblia com o que tá em filme",
              "Tem mais medo de Satanás do que confiança em Deus",
              "Engole pregação que mais inventa do que prega",
              "Não sabe a diferença entre anjo, querubim, serafim e trono",
              "Nunca leu Isaías 14, Ezequiel 28 ou Apocalipse 12 com atenção",
              "Vê filme de tema espiritual e não sabe o que é Bíblia e o que é roteiro",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0" strokeWidth={3} style={{ color: "var(--blood)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-primary/40 bg-card p-6">
          <div className="-mt-10 mb-4 inline-block bg-primary px-4 py-2 text-sm font-extrabold tracking-wide text-primary-foreground">
            DEPOIS DAS 2 NOITES
          </div>
          <ul className="space-y-3 text-sm font-bold">
            {[
              "Você SABE quem é Lúcifer e como ele caiu pelo texto bíblico",
              "A queda versículo por versículo (Isaías 14, Ezequiel 28, Apocalipse 12)",
              "O mundo espiritual mapeado: anjo, querubim, serafim, trono, principado",
              "Filtro pra distinguir pregação séria de espiritualismo barato",
              "Vê filme/série e SABE o que é Bíblia e o que é invenção",
              "Conhecimento que você passa pros seus filhos, pra sua igreja, pra sua família",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-6 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            QUERO SABER A VERDADE
          </a>
        </div>
      </section>

      {/* DARK — 4 BLOCOS */}
      <section className="mt-12 bg-[var(--dark-section)] px-5 py-12 text-[var(--dark-section-foreground)]">
        <div className="text-center">
          <span className="badge-3d-dark">
            O QUE VAMOS ESTUDAR
          </span>
          <h2 className="sec-h2 mt-6 text-3xl font-extrabold leading-tight">
            Os 4 blocos da
            <br />
            <em className="not-italic text-primary">Imersão na Prática.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed">
            Nada de conteúdo solto. Você vai sair das 2 noites com a Bíblia na mão
            entendendo o mundo espiritual e a queda de Lúcifer do jeito que tá escrito.
            Da estrutura do céu até a guerra que você trava todo dia sem nem saber.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {[
            {
              n: "Bloco 01 / Hierarquia",
              t: "Anjos, querubins, serafins e tronos.",
              img: blocoQuerubins,
              alt: "Querubim com quatro faces — hierarquia angelical",
              d: "Antes da queda, você precisa entender o céu. Quem é anjo, quem é querubim, quem é serafim, quem é trono. Como a Bíblia descreve cada um. E pq isso muda TUDO o que você pensa que sabe.",
              refs: "Is 6 · Ez 1 · Ap 4–5",
            },
            {
              n: "Bloco 02 / Reino das trevas",
              t: "Principados, potestades, dominações.",
              img: blocoDemonios,
              alt: "Reino das trevas — principados e potestades",
              d: "O que tá escrito sobre a estrutura do mal e como ela opera AGORA. Sem ficção, sem decreto vazio, sem espetáculo. O texto bíblico, lido como ele é.",
              refs: "Ef 6 · Cl 2 · Dn 10",
            },
            {
              n: "Bloco 03 / A queda",
              t: "Quem Lúcifer era. Como ele caiu.",
              img: blocoLucifer,
              alt: "A queda de Lúcifer — anjo caindo no abismo",
              d: "Aqui é o coração da imersão. Quem Lúcifer era. Como ele caiu. Por que ele caiu. Isaías 14, Ezequiel 28, Apocalipse 12 versículo por versículo. A história escondida que quase ninguém te conta.",
              refs: "Is 14 · Ez 28 · Ap 12",
            },
            {
              n: "Bloco 04 / Guerra espiritual",
              t: "A guerra que continua até hoje.",
              img: blocoTronos,
              alt: "Guerra espiritual — tronos celestiais",
              d: "A queda de Lúcifer não acabou em Lúcifer. A guerra continua. E ela tá acontecendo na sua vida AGORA. A armadura de Deus, a oração, a Palavra. Como agir biblicamente. Sem fórmula mágica, sem decreto vazio.",
              refs: "Ef 6 · Tg 4 · 1Pe 5",
            },
          ].map(({ n, t, d, img, alt, refs }) => (
            <div
              key={n}
              className="rounded-2xl border border-primary/30 bg-black/30 p-5"
            >
              <div className="flex h-44 items-center justify-center rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="bloco-img-anim h-40 w-auto object-contain"
                  style={{ filter: "drop-shadow(0 6px 18px rgba(184, 149, 106, 0.25))" }}
                />
              </div>
              <p className="mt-4 text-xs font-bold italic tracking-wider text-primary">
                {n}
              </p>
              <h3 className="sec-h2 mt-1 border-b-2 border-primary/60 pb-2 text-xl font-extrabold leading-tight">
                {t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{d}</p>
              <p className="bloco-refs mt-3 text-sm" style={{ color: "var(--ember-soft)" }}>
                {refs}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-primary/30 bg-black/30 p-5">
            <div className="flex items-start gap-4">
              <HelpCircle className="h-12 w-12 flex-shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold italic tracking-wider text-primary">
                  Tira-dúvidas ao vivo
                </p>
                <h3 className="sec-h2 mt-1 text-lg font-extrabold text-white">
                  Sessão aberta de perguntas e respostas em tempo real, nas duas noites.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* GLOSSARY */}
        <div className="mt-14 text-center">
          <h2 className="sec-h2 text-3xl font-extrabold leading-tight">
            Conheça os termos{" "}
            <em className="not-italic text-primary">de uma vez por todas.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm">
            Os termos bíblicos que você vai estudar durante a imersão. E que
            provavelmente você NUNCA estudou com profundidade.
          </p>
          <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-4">
            {[
              { l: "Querubins", r: "Ez 1 · Gn 3", img: blocoQuerubins, alt: "Querubins" },
              { l: "Serafins", r: "Is 6", img: blocoSerafins, alt: "Serafins" },
              { l: "Tronos", r: "Cl 1", img: blocoTronos, alt: "Tronos" },
              { l: "Principados", r: "Ef 6 · Cl 2", img: blocoDemonios, alt: "Principados" },
              { l: "Lúcifer", r: "Is 14 · Ez 28", img: blocoLucifer, alt: "Lúcifer" },
              { l: "Demônios", r: "Mc 5 · Mt 12", img: blocoDemonios, alt: "Demônios" },
            ].map(({ l, r, img, alt }) => (
              <div
                key={l}
                className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/15 to-transparent p-5 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden">
                  <img
                    src={img}
                    alt={alt}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div className="mx-auto my-3 h-0.5 w-6 bg-primary" />
                <p className="text-sm font-extrabold">{l}</p>
                <p className="termo-ref mt-1 text-xs" style={{ color: "var(--ember-soft)" }}>
                  {r}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-sm" id="inscricao">
            <a href="#" className={ctaBtn}>
              QUERO GARANTIR MEU INGRESSO
            </a>
          </div>
        </div>
      </section>

      <MarqueeBar />

      {/* PARA QUEM É */}
      <section className="px-5 pt-12 text-center">
        <span className="badge-3d-light">
          PARA QUEM É
        </span>
        <h2 className="sec-h2 mt-6 text-3xl font-extrabold leading-tight">
          Essa imersão é{" "}
          <em className="not-italic text-primary">pra você</em> se:
        </h2>

        <div className="mt-8 space-y-4 text-left">
          {[
            {
              n: "01",
              t: "✓ Você lê a Bíblia e quer ir além",
              d: "A meta não é só conhecer mais histórias. É finalmente entender o mundo espiritual com profundidade. O que tá escrito de verdade sobre o invisível. Sem espiritualismo, sem ficção, sem opinião disfarçada de revelação.",
            },
            {
              n: "02",
              t: "✓ Você é líder ou dá aula na igreja",
              d: "A meta não é só repassar conteúdo. É ter base bíblica de verdade pra ensinar com autoridade sobre anjo, demônio e a queda de Lúcifer. Versículo na mão. Sem ter que improvisar quando alguém pergunta.",
            },
            {
              n: "03",
              t: "✓ Você tem filhos e quer proteger eles",
              d: "A meta não é só evitar que eles vejam coisa errada. É dar pros seus filhos uma base bíblica clara sobre o invisível, num mundo que mistura tudo e não explica nada direito.",
            },
            {
              n: "04",
              t: "✓ Você estuda a Bíblia sozinho e trava",
              d: "A meta não é só ler mais. É ter clareza nos temas que parecem confusos quando você abre Isaías, Ezequiel ou Apocalipse e fica sem direção. Esses 3 livros principalmente.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border-2 border-primary/40 bg-card p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-black italic" style={{ color: "var(--ember-deep)" }}>
                  {b.n}
                </span>
                <h3 className="sec-h2 mt-1 text-base font-extrabold leading-tight">{b.t}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>

        {/* DARK closing card */}
        <div className="mt-8 rounded-2xl bg-[var(--dark-section)] p-6 text-left text-white">
          <h3 className="sec-h2 text-xl font-extrabold leading-tight">
            Você ouve pregação mas nunca{" "}
            <em className="not-italic" style={{ color: "var(--ember-soft)" }}>
              estudou de verdade
            </em>{" "}
            o que a Bíblia diz.
          </h3>
          <p className="mt-4 inline-block px-2 py-1 text-sm font-bold text-white" style={{ background: "var(--blood)" }}>
            O objetivo não é só ouvir mais.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            É parar de engolir achismo. É usar 2 noites pra mudar de posição de vez.
            Você não tem 5 horas pra eu te mostrar o que a Bíblia ensina de verdade
            sobre o invisível e a queda de Lúcifer?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            QUERO GARANTIR MINHA VAGA
          </a>
        </div>
      </section>

      {/* NÃO É PARA VOCÊ */}
      <section className="px-5 pt-12 text-center">
        <div className="rounded-2xl border border-border bg-card p-6 text-left">
          <p className="text-xs font-bold italic tracking-wider" style={{ color: "var(--ember-deep)" }}>
            Sinceridade
          </p>
          <h2 className="sec-h2 mt-2 text-lg font-extrabold">
            Essa imersão{" "}
            <em className="not-italic" style={{ color: "var(--blood)" }}>não é pra você</em> se:
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Você quer assistir sem abrir a Bíblia junto",
              "Você espera ouvir confirmação de achismo",
              "Você quer experiência mística sem texto bíblico",
              "Você não quer ler versículo",
              "Você acredita só no que sentiu",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0" strokeWidth={3} style={{ color: "var(--blood)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-8 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            ESSA IMERSÃO É PRA MIM
          </a>
        </div>
      </section>

      {/* OFERTA / PRICING */}
      <section className="mt-12 bg-[var(--dark-section)] px-5 py-12 text-[var(--dark-section-foreground)]">
        <div className="text-center">
          <header className="offer-brand relative mb-7 px-5 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[120%] w-[110%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 70% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.18) 60%, rgba(255,255,255,0) 80%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src={luciferLogoHorizontal}
              alt="A Queda de Lúcifer — Imersão Bíblica"
              className="brand-logo offer-logo relative z-10 mx-auto mb-6 block h-auto w-full max-w-[420px] md:max-w-[560px]"
              style={{
                background: "transparent",
                filter:
                  "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))",
              }}
            />
          </header>

          <div className="mx-auto mt-6 inline-block">
            <span className="badge-3d-dark">
              LOTE COM VALOR PROMOCIONAL
            </span>
          </div>

          <ul className="mx-auto mt-6 max-w-xs space-y-3 text-left text-sm font-bold italic">
            {[
              "2 noites de imersão bíblica ao vivo (26 e 27 de Maio · 20h às 22h30)",
              "A queda de Lúcifer versículo por versículo (Is 14 · Ez 28 · Ap 12)",
              "O mundo espiritual: anjos, querubins, serafins, tronos, principados",
              "Tira-dúvidas ao vivo nas duas noites",
              "Acesso à gravação por 7 dias após o evento",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center bg-primary">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={4} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 rounded-2xl border border-primary/30 bg-black/40 p-6">
            <p className="text-sm font-semibold text-white/90">
              DE <s className="text-white/60 decoration-primary">R$97</s> POR APENAS
            </p>
            <p className="mt-3 text-7xl font-black italic text-primary">
              <span className="align-top text-3xl">R$</span>19<span className="text-3xl">,90</span>
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <a href="#inscricao" className={ctaBtn}>
                QUERO GARANTIR MINHA VAGA!
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-5 text-[11px] font-bold text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> COMPRA SEGURA
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" /> SATISFAÇÃO GARANTIDA
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-primary" /> PRIVACIDADE PROTEGIDA
              </span>
            </div>
          </div>
        </div>

        {/* GARANTIA */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-black italic text-primary">
            GARANTIA INCONDICIONAL
            <br />
            DE 7 DIAS · RISCO ZERO
          </h3>
          <div className="mx-auto mt-8 flex h-44 w-44 items-center justify-center rounded-full border-[6px] border-dashed border-white/40 bg-gradient-to-b from-white/10 to-white/5">
            <div className="text-center">
              <p className="text-5xl font-black text-white">7</p>
              <p className="text-[11px] font-bold tracking-widest text-white/80">
                DIAS DE
                <br />
                GARANTIA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section className="px-5 pt-12">
        <div className="mx-auto max-w-sm text-center">
          <span className="badge-3d-light">
            QUEM VAI CONDUZIR A IMERSÃO
          </span>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-primary/40 bg-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="mentor-name text-2xl font-black italic text-primary">
                TARCÍSIO SALOMÃO
              </h3>
              <span className="mt-2 inline-block bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                @tarcisio
              </span>
            </div>
            <img
              src={tarcisioFoto}
              alt="Tarcísio Salomão"
              className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-primary/40 object-cover"
            />
          </div>
          <hr className="my-5 border-border" />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Tarcísio Salomão é criador de conteúdo bíblico com mais de 2 milhões
              de seguidores entre Instagram e TikTok. Construiu uma das maiores
              audiências cristãs do Brasil ensinando o que tá escrito,
              sem espiritualismo barato.
            </p>
            <p>
              Já criou o Manual Bíblico de Salomão, o PCR (apologética cristã)
              e o Curso de Jejum, com milhares de cristãos formados na Palavra.
            </p>
            <p>
              O método é direto: Bíblia na mão, versículo por versículo,
              sem opinião disfarçada de revelação. Tarcísio não ensina o que ele
              acha. Ensina o que tá escrito.
            </p>
            <p className="mentor-quote font-bold text-primary">
              "Eu não te ensino o que eu acho. Eu te ensino o que está escrito."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pt-12">
        <h2 className="text-center text-2xl font-extrabold">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="mx-auto mt-6 max-w-md space-y-3">
          <Faq />
        </div>

        <div className="mx-auto mt-10 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            QUERO GARANTIR MEU INGRESSO
          </a>
        </div>

        <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-md border border-border bg-card px-4 py-3 text-xs font-bold tracking-wide">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" /> 26 E 27 DE MAIO
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 20H ÀS 22H30
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" /> ONLINE
          </span>
        </div>
      </section>

      <StickyVagas />
    </main>
  );
}

function Faq() {
  const items = [
    {
      q: "O evento é ao vivo ou gravado?",
      a: "100% ao vivo, nas duas noites (26 e 27 de Maio, 20h às 22h30). Após o evento, você terá acesso à gravação por 7 dias.",
    },
    {
      q: "Preciso ter conhecimento prévio da Bíblia?",
      a: "Não. A imersão foi pensada pra qualquer pessoa, do iniciante ao estudioso. A gente lê e explica versículo por versículo. Você só precisa estar com a Bíblia na mão.",
    },
    {
      q: "Como vou assistir?",
      a: "O acesso é 100% online, ao vivo. Você recebe o link de acesso por e-mail logo após confirmar a inscrição.",
    },
    {
      q: "Qual tradução da Bíblia devo usar?",
      a: "Qualquer tradução fiel funciona (ARA, ACF, NVI, NAA). O importante é estar com ela na mão pra acompanhar versículo por versículo.",
    },
    {
      q: "Tem garantia?",
      a: "Sim, 7 dias de garantia incondicional. Se a imersão não fizer sentido pra você, devolvemos 100% do valor. Risco zero.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-3 rounded-md bg-primary px-4 py-3 text-left text-sm font-bold text-primary-foreground"
            >
              {isOpen ? (
                <Minus className="h-4 w-4 flex-shrink-0" strokeWidth={3} />
              ) : (
                <Plus className="h-4 w-4 flex-shrink-0" strokeWidth={3} />
              )}
              <span>{it.q}</span>
            </button>
            {isOpen && (
              <p className="px-4 py-4 text-sm leading-relaxed">{it.a}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
