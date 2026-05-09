import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-claude.jpg";
import {
  Calendar,
  Clock,
  Check,
  X,
  Sparkles,
  Users,
  Crown,
  Flame,
  BookOpen,
  Swords,
  ScrollText,
  Eye,
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
  "inline-flex w-full items-center justify-center rounded-md bg-[var(--cta)] px-5 py-4 text-base font-extrabold tracking-wide text-[var(--cta-foreground)] shadow-lg shadow-black/10 transition-transform active:scale-[0.98]";

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
      className="fixed inset-x-0 bottom-0 z-50 px-4 py-2 text-white md:px-[18px] md:py-3"
      style={{ background: "var(--blood)" }}
    >
      <p className="text-center text-[11px] font-bold tracking-wide md:text-xs">
        VAGAS DESTE LOTE JÁ VENDIDAS:
      </p>
      <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-white/40 md:h-3">
        <div className="flex h-full w-[87%] items-center justify-end rounded-full bg-black/70 pr-2">
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
            alt="Missão Claude Code"
            width={1024}
            height={1024}
            className="mx-auto block h-[42vh] min-h-[320px] max-h-[380px] w-full object-cover object-top md:h-[80vh] md:min-h-[580px] md:max-h-none"
            style={{ objectPosition: "50% 18%" }}
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
        <div
          className="brand relative z-10 mx-auto -mt-[50px] py-3 md:-mt-[110px] md:py-6"
          style={{ position: "relative" }}
        >
          <div className="brand-title flex items-center justify-center gap-2 text-[1.75rem] font-black leading-none tracking-tight md:text-[2rem]" style={{ color: "var(--blood)" }}>
            <Flame className="h-9 w-9 md:h-11 md:w-11" style={{ color: "var(--blood)" }} />
            <span>LÚCIFER</span>
          </div>
          <p className="mt-1 text-[10px] font-bold tracking-[0.38em]" style={{ color: "var(--ember-deep)" }}>
            A QUEDA · IMERSÃO BÍBLICA
          </p>
        </div>

        {/* 2. Date box */}
        <div className="mx-auto my-[10px] flex max-w-sm items-center justify-center gap-3 rounded-md border border-border bg-card px-[14px] py-[10px] text-[13px] font-semibold md:my-5 md:px-[18px] md:py-4 md:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" /> 2 noites ao vivo
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 20h às 22h
          </span>
        </div>

        {/* 3. Headline */}
        <h1 className="sec-h2 mx-auto mb-3 max-w-sm text-[22px] font-extrabold leading-[1.18] md:mb-6 md:mt-5 md:text-[1.875rem] md:leading-[1.22]">
          Em 2 noites vc vai descobrir a história sobre{" "}
          <em className="not-italic" style={{ color: "var(--blood)" }}>a queda de Lúcifer</em>{" "}
          que quase ninguém sabe direito. Ela tá toda na Bíblia, mas por que vc nunca ouviu?
        </h1>

        {/* 4. Tag laranja */}
        <div className="mb-[10px] md:mb-0 md:mt-[18px]">
          <span className="inline-block px-[14px] py-[7px] text-[13px] font-bold tracking-wide text-white md:px-[18px] md:py-[10px]" style={{ background: "var(--flame)" }}>
            2 noites de estudo bíblico ao vivo
          </span>
        </div>

        {/* 5. Parágrafo */}
        <p className="mx-auto mb-[18px] max-w-sm text-[14px] leading-[1.5] md:mb-0 md:mt-[14px] md:text-[15.5px] md:leading-snug">
          2 noites comigo, ao vivo, com a Bíblia na mão. Eu vou te contar a história
          da queda de Lúcifer versículo por versículo. E pra vc entender mesmo, vou
          te ensinar o mundo espiritual de um jeito que vc nunca ouviu antes. Anjo,
          querubim, serafim, trono, principado. Tudo o que tá escrito sobre o mundo
          invisível. Sem invenção. Só Bíblia.
        </p>

        {/* 6. Botão */}
        <div className="mx-auto max-w-sm md:mt-[28px]">
          <a
            href="#inscricao"
            className="inline-flex w-full items-center justify-center rounded-md bg-[var(--cta)] px-[22px] py-4 text-[15px] font-extrabold tracking-wide text-[var(--cta-foreground)] shadow-lg shadow-black/10 transition-transform active:scale-[0.98] md:px-[22px] md:py-6 md:text-base"
          >
            QUERO GARANTIR MINHA VAGA
          </a>
        </div>

        {/* 7. Checks */}
        <ul className="mx-auto mt-[20px] max-w-sm space-y-[5px] rounded-xl p-[18px] text-left text-[14px] font-bold md:mt-[32px] md:space-y-2 md:p-[26px] md:text-sm">
          {[
            "2 noites ao vivo, comigo, com a Bíblia na mão",
            "Vc vai SABER quem é Lúcifer e como ele caiu pelo texto bíblico",
            "Conhecimento que vc passa pros seus filhos, pra sua igreja, pro seu grupo",
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
        <span className="inline-block rounded-full border border-primary/60 px-5 py-2 text-xs font-bold italic text-primary">
          A virada de chave
        </span>
        <h2 className="sec-h2 mx-auto mt-6 max-w-sm text-[26px] font-extrabold leading-tight">
          Tem coisa sobre Lúcifer na Bíblia que{" "}
          <em className="not-italic" style={{ color: "var(--blood)" }}>
            vc nunca ouviu na sua igreja inteira.
          </em>
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-left text-[14px] leading-relaxed">
          Vc já ouviu mil coisas sobre Lúcifer. Que ele era anjo. Que ele caiu. Que
          ele virou Satanás. Que ele queria ser igual a Deus. Só que olha que loucura:
          muita coisa que vc ouviu sobre ele{" "}
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
          do que qualquer filme que vc já viu. Tem capítulo inteiro de Isaías que quase
          ninguém estuda direito. Tem Ezequiel 28 que vc provavelmente nunca leu com
          atenção. Tem Apocalipse 12 que é absurdo de profundo. E ninguém te leva por
          isso. Ninguém senta com vc, abre o texto e te explica versículo por versículo.
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
          E se vc pudesse entender tudo isso em{" "}
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
              "Vc ouve falar de Lúcifer mas não sabe a história dele de verdade",
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
              "Vc SABE quem é Lúcifer e como ele caiu pelo texto bíblico",
              "A queda versículo por versículo (Isaías 14, Ezequiel 28, Apocalipse 12)",
              "O mundo espiritual mapeado: anjo, querubim, serafim, trono, principado",
              "Filtro pra distinguir pregação séria de espiritualismo barato",
              "Vê filme/série e SABE o que é Bíblia e o que é invenção",
              "Conhecimento que vc passa pros seus filhos, pra sua igreja, pra sua família",
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
          <span className="inline-block rounded-full border border-primary/60 px-5 py-2 text-xs font-bold italic text-primary">
            O que vamos estudar
          </span>
          <h2 className="sec-h2 mt-6 text-3xl font-extrabold leading-tight">
            Os 4 blocos da
            <br />
            <em className="not-italic text-primary">Imersão na Prática.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed">
            Nada de conteúdo solto. Vc vai sair das 2 noites com a Bíblia na mão
            entendendo o mundo espiritual e a queda de Lúcifer do jeito que tá escrito.
            Da estrutura do céu até a guerra que vc trava todo dia sem nem saber.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {[
            {
              n: "Bloco 01 / Hierarquia",
              t: "Anjos, querubins, serafins e tronos.",
              icon: Crown,
              d: "Antes da queda, vc precisa entender o céu. Quem é anjo, quem é querubim, quem é serafim, quem é trono. Como a Bíblia descreve cada um. E pq isso muda TUDO o que vc pensa que sabe.",
              refs: "Is 6 · Ez 1 · Ap 4–5",
            },
            {
              n: "Bloco 02 / Reino das trevas",
              t: "Principados, potestades, dominações.",
              icon: Eye,
              d: "O que tá escrito sobre a estrutura do mal e como ela opera AGORA. Sem ficção, sem decreto vazio, sem espetáculo. O texto bíblico, lido como ele é.",
              refs: "Ef 6 · Cl 2 · Dn 10",
            },
            {
              n: "Bloco 03 / A queda",
              t: "Quem Lúcifer era. Como ele caiu.",
              icon: Flame,
              d: "Aqui é o coração da imersão. Quem Lúcifer era. Como ele caiu. Por que ele caiu. Isaías 14, Ezequiel 28, Apocalipse 12 versículo por versículo. A história escondida que quase ninguém te conta.",
              refs: "Is 14 · Ez 28 · Ap 12",
            },
            {
              n: "Bloco 04 / Guerra espiritual",
              t: "A guerra que continua até hoje.",
              icon: Swords,
              d: "A queda de Lúcifer não acabou em Lúcifer. A guerra continua. E ela tá acontecendo na sua vida AGORA. A armadura de Deus, a oração, a Palavra. Como agir biblicamente. Sem fórmula mágica, sem decreto vazio.",
              refs: "Ef 6 · Tg 4 · 1Pe 5",
            },
          ].map(({ n, t, d, icon: Icon, refs }) => (
            <div
              key={n}
              className="rounded-2xl border border-primary/30 bg-black/30 p-5"
            >
              <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-transparent">
                <Icon className="h-14 w-14 text-primary" strokeWidth={1.2} />
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
            Os termos bíblicos que vc vai estudar durante a imersão. E que
            provavelmente vc NUNCA estudou com profundidade.
          </p>
          <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-4">
            {[
              { l: "Querubins", r: "Ez 1 · Gn 3", i: Crown },
              { l: "Serafins", r: "Is 6", i: Flame },
              { l: "Tronos", r: "Cl 1", i: Sparkles },
              { l: "Principados", r: "Ef 6 · Cl 2", i: Eye },
              { l: "Lúcifer", r: "Is 14 · Ez 28", i: Swords },
              { l: "Demônios", r: "Mc 5 · Mt 12", i: ScrollText },
            ].map(({ l, r, i: Icon }) => (
              <div
                key={l}
                className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/15 to-transparent p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
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
        <span className="inline-block rounded-full border border-primary/60 px-5 py-2 text-xs font-bold italic">
          Para quem é
        </span>
        <h2 className="sec-h2 mt-6 text-3xl font-extrabold leading-tight">
          Essa imersão é{" "}
          <em className="not-italic text-primary">pra vc</em> se:
        </h2>

        <div className="mt-8 space-y-4 text-left">
          {[
            {
              n: "01",
              t: "✓ Vc lê a Bíblia e quer ir além",
              d: "A meta não é só conhecer mais histórias. É finalmente entender o mundo espiritual com profundidade. O que tá escrito de verdade sobre o invisível. Sem espiritualismo, sem ficção, sem opinião disfarçada de revelação.",
            },
            {
              n: "02",
              t: "✓ Vc é líder ou dá aula na igreja",
              d: "A meta não é só repassar conteúdo. É ter base bíblica de verdade pra ensinar com autoridade sobre anjo, demônio e a queda de Lúcifer. Versículo na mão. Sem ter que improvisar quando alguém pergunta.",
            },
            {
              n: "03",
              t: "✓ Vc tem filhos e quer proteger eles",
              d: "A meta não é só evitar que eles vejam coisa errada. É dar pros seus filhos uma base bíblica clara sobre o invisível, num mundo que mistura tudo e não explica nada direito.",
            },
            {
              n: "04",
              t: "✓ Vc estuda a Bíblia sozinho e trava",
              d: "A meta não é só ler mais. É ter clareza nos temas que parecem confusos quando vc abre Isaías, Ezequiel ou Apocalipse e fica sem direção. Esses 3 livros principalmente.",
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
            Vc ouve pregação mas nunca{" "}
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
            Vc não tem 5 horas pra eu te mostrar o que a Bíblia ensina de verdade
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
            <em className="not-italic" style={{ color: "var(--blood)" }}>não é pra vc</em> se:
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Vc quer assistir sem abrir a Bíblia junto",
              "Vc espera ouvir confirmação de achismo",
              "Vc quer experiência mística sem texto bíblico",
              "Vc não quer ler versículo",
              "Vc acredita só no que sentiu",
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
          <p className="text-sm font-semibold tracking-[0.3em] text-white/70">
            MISSÃO
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 text-4xl font-black leading-none tracking-tight">
            <Sparkles className="h-10 w-10 text-primary" />
            <span className="text-white">Claude</span>
          </div>
          <p className="mt-1 text-xs font-bold tracking-[0.5em] text-primary">
            CODE
          </p>

          <div className="mx-auto mt-6 inline-block rounded-full border border-primary/60 px-6 py-2 text-sm font-bold italic text-primary">
            LOTE COM VALOR PROMOCIONAL
          </div>

          <ul className="mx-auto mt-6 max-w-xs space-y-3 text-left text-sm font-bold italic">
            {[
              "1 Dia de imersão prática ao vivo",
              "Diagnóstico, Criação, Orquestração e Multiplicação",
              "Implementação guiada",
              "Q&A em tempo real durante o evento",
              "Acesso ao grupo exclusivo de participantes",
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
              DE <s className="text-white/60 decoration-primary">R$497</s> POR APENAS
            </p>
            <p className="mt-3 text-7xl font-black italic text-primary">
              <span className="align-top text-3xl">R$</span>37
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
        <div className="mx-auto max-w-sm rounded-full border border-primary/60 px-6 py-3 text-center text-xs font-bold italic">
          QUEM VAI CONDUZIR A IMERSÃO
        </div>

        <div className="mt-8 rounded-2xl border-2 border-primary/40 bg-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black italic text-primary">
                TIAGO LEMOS
              </h3>
              <span className="mt-2 inline-block bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                @tiagolemosx
              </span>
            </div>
            <div className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-primary/40 bg-muted" />
          </div>
          <hr className="my-5 border-border" />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Tiago Lemos é fundador do Mestres da IA, o ecossistema completo
              de treinamentos e ferramentas de inteligência artificial no
              Brasil, com mais de 7.000 alunos formados.
            </p>
            <p>
              Criador do Ruptura, o método de criação de conteúdo audiovisual
              com IA mais avançado do mercado nacional, e do PromptX, a
              plataforma de prompts profissionais para criadores e
              profissionais digitais.
            </p>
            <p>
              Tiago não ensina teoria. Ele ensina o que usa na própria
              operação, e o Claude Code é hoje parte central de como ele
              trabalha, cria e escala.
            </p>
            <p className="font-bold text-primary">
              "Eu só ensino o que roda na minha operação. Tudo que você vai
              aprender nessa imersão está ativo hoje no meu negócio."
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
            <Calendar className="h-4 w-4 text-primary" /> SÁBADO, 16 DE MAIO
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 09H ÀS 17H
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
      a: "O evento é 100% ao vivo. Ao finalizar sua inscrição, você terá a opção de adquirir o acesso à gravação.",
    },
    {
      q: "Não tenho experiência técnica. Vou conseguir implementar?",
      a: "Sim. A imersão foi desenhada para qualquer pessoa, sem precisar escrever código.",
    },
    {
      q: "Preciso criar conta no Claude Code antes?",
      a: "Não é obrigatório. Vamos te orientar passo a passo no dia.",
    },
    {
      q: "Funciona para qualquer nicho?",
      a: "Sim. O método de orquestração de agentes se aplica a qualquer área de atuação.",
    },
    {
      q: "Tem garantia?",
      a: "Sim, 7 dias de garantia incondicional. Se não fizer sentido, devolvemos 100% do valor.",
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
