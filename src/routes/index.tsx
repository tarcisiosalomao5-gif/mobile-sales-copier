import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-claude.jpg";
import {
  Calendar,
  Clock,
  Check,
  X,
  Sparkles,
  Users,
  Cloud,
  Code2,
  MessageSquare,
  Bot,
  Search,
  Brain,
  Network,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { Minus, Plus, ShieldCheck, Award, Lock } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Missão Claude Code — 1 Dia para construir Times de I.A" },
      {
        name: "description",
        content:
          "Aprenda ao vivo, em 1 sábado, a montar squads de agentes autônomos com Claude Code que executam tarefas e liberam o seu tempo.",
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
  const item = "MISSÃO CLAUDE CODE";
  return (
    <div className="overflow-hidden bg-primary py-3 text-primary-foreground">
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
    <div className="fixed inset-x-0 bottom-0 z-50 bg-primary px-4 py-2 text-primary-foreground md:px-[18px] md:py-3">
      <p className="text-center text-[11px] font-bold tracking-wide md:text-xs">
        VAGAS DESTE LOTE JÁ VENDIDAS:
      </p>
      <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-white/40 md:h-3">
        <div className="flex h-full w-[87%] items-center justify-end rounded-full bg-[var(--dark-section)] pr-2">
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
          <div className="flex items-center justify-center gap-2 text-[1.75rem] font-black leading-none tracking-tight md:text-[2rem]">
            <Sparkles className="h-10 w-10 text-primary md:h-12 md:w-12" />
            <span>Claude</span>
          </div>
          <p className="-mt-0.5 text-xs font-bold tracking-[0.38em] text-primary">
            CODE
          </p>
        </div>

        {/* 2. Date box */}
        <div className="mx-auto my-[10px] flex max-w-sm items-center justify-center gap-3 rounded-md border border-border bg-card px-[14px] py-[10px] text-[13px] font-semibold md:my-5 md:px-[18px] md:py-4 md:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" /> Sábado, 16 de Maio
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 09h às 17h
          </span>
        </div>

        {/* 3. Headline */}
        <h1 className="mx-auto mb-3 max-w-sm text-[24px] font-extrabold leading-[1.15] md:mb-6 md:mt-5 md:text-[1.875rem] md:leading-[1.22]">
          1 Dia para implementar Claude Code e{" "}
          <em className="not-italic text-primary">Construir Times de I.A</em>{" "}
          que trabalham por você!
        </h1>

        {/* 4. Tag laranja */}
        <div className="mb-[10px] md:mb-0 md:mt-[18px]">
          <span className="inline-block bg-primary px-[14px] py-[7px] text-[13px] font-bold tracking-wide text-primary-foreground md:px-[18px] md:py-[10px]">
            Aprenda ao vivo · sem enrolação
          </span>
        </div>

        {/* 5. Parágrafo */}
        <p className="mx-auto mb-[18px] max-w-sm text-[14px] leading-[1.5] md:mb-0 md:mt-[14px] md:text-[15.5px] md:leading-snug">
          Crie squads de agentes autônomos que executam tarefas, substituem
          ferramentas e liberam o seu tempo, independente do seu nicho ou área
          de atuação.
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
            "Ao vivo e online",
            "Acesso à gravação",
            "Suporte direto no dia",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={3} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* AFTER IMERSÃO */}
      <section className="px-5 pt-12">
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6">
          <div className="-mt-10 mb-4 inline-block bg-primary px-4 py-2 text-sm font-extrabold tracking-wide text-primary-foreground">
            DEPOIS DA IMERSÃO!
          </div>
          <ul className="space-y-3 text-sm font-bold">
            {[
              "Squad de agentes configurado",
              "Processos rodando sozinhos",
              "I.A. Integrada na sua operação",
              "Sistema replicável",
              "Operação escalável",
              "Clareza sobre qual ferramenta usar quando",
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
            QUERO MONTAR MEU SQUAD
          </a>
        </div>
      </section>

      {/* DARK — 4 BLOCOS */}
      <section className="mt-12 bg-[var(--dark-section)] px-5 py-12 text-[var(--dark-section-foreground)]">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/60 px-5 py-2 text-xs font-bold italic text-primary">
            O QUE VAMOS IMPLEMENTAR
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight">
            Os 4 blocos da
            <br />
            <em className="not-italic text-primary">Missão na Prática</em>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed">
            <strong>Nada de conteúdo solto.</strong> A experiência foi
            organizada para você sair do diagnóstico até a multiplicação com uma
            linha lógica e prática de implementação.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {[
            {
              n: "BLOCO 1",
              t: "DIAGNÓSTICO",
              icon: Search,
              d: "Antes de criar qualquer agente, você precisa saber para onde olhar primeiro. Vamos mapear os processos que mais drenam tempo e energia da sua operação.",
            },
            {
              n: "BLOCO 2",
              t: "CRIAÇÃO",
              icon: Brain,
              d: "Você vai configurar instruções, definir função e criar cada agente do seu time de I.A do zero, ao vivo, na sua tela, sem escrever uma linha de código.",
            },
            {
              n: "BLOCO 3",
              t: "ORQUESTRAÇÃO",
              icon: Network,
              d: "Agentes isolados executam tarefas. Squads executam operações. Aqui você conecta os agentes, monta a sequência de trabalho e testa o sistema funcionando em tempo real.",
            },
            {
              n: "BLOCO 4",
              t: "MULTIPLICAÇÃO",
              icon: Users,
              d: "O raciocínio que você usou para montar o primeiro Squad serve para qualquer outro. Aqui você entende como replicar e escalar.",
            },
          ].map(({ n, t, d, icon: Icon }) => (
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
              <h3 className="mt-1 border-b-2 border-primary/60 pb-1 text-2xl font-extrabold italic">
                {t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{d}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-primary/30 bg-black/30 p-5">
            <div className="flex items-start gap-4">
              <HelpCircle className="h-12 w-12 flex-shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-extrabold italic text-primary">
                  TIRA-DÚVIDAS AO VIVO
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Sessão aberta de perguntas e respostas em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GLOSSARY */}
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-extrabold leading-tight">
            Descubra <em className="not-italic text-primary">de uma vez por todas!</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm">
            Vamos explicar os principais termos que você vai usar durante a
            imersão.
          </p>
          <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-4">
            {[
              { l: "Skills", i: Sparkles },
              { l: "Squads", i: Users },
              { l: "Cloud CoWork", i: Cloud },
              { l: "Cloud Code", i: Code2 },
              { l: "Cloud Chat", i: MessageSquare },
              { l: "Agentes", i: Bot },
            ].map(({ l, i: Icon }) => (
              <div
                key={l}
                className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/15 to-transparent p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mx-auto my-3 h-0.5 w-6 bg-primary" />
                <p className="text-sm font-extrabold">{l}</p>
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
          PARA QUEM É
        </span>
        <h2 className="mt-6 text-3xl font-extrabold leading-tight">
          Essa Missão é
          <br />
          <em className="not-italic text-primary">para VOCÊ</em> se:
        </h2>

        <div className="mt-8 space-y-4 text-left">
          {[
            {
              t: "É CRIADOR DE CONTEÚDO",
              s: "A meta não é só criar mais rápido.",
              d: "É montar agentes que produzem por você, imagem, texto, fluxo de publicação, enquanto você foca no que só você pode fazer.",
            },
            {
              t: "TEM AGÊNCIA OU PRESTADOR DE SERVIÇOS",
              s: "A meta não é só ganhar tempo.",
              d: "É sair da posição de gargalo e construir uma operação onde o volume de entrega não depende da sua disponibilidade.",
            },
            {
              t: "TEM NEGÓCIO E QUER ESCALAR",
              s: "A meta não é só cortar custo fixo.",
              d: "É substituir processos manuais por sistemas inteligentes, e crescer sem precisar contratar para cada nova demanda.",
            },
            {
              t: "TRABALHA SOZINHO",
              s: "A meta não é só ser mais eficiente.",
              d: "É operar com a capacidade de entrega de quem tem equipe, sem ter ninguém na folha.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border-2 border-primary/40 bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                <h3 className="text-base font-extrabold">{b.t}</h3>
              </div>
              <p className="mt-3 text-sm font-bold">{b.s}</p>
              <p className="mt-1 text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>

        {/* DARK closing card */}
        <div className="mt-8 rounded-2xl bg-[var(--dark-section)] p-6 text-left text-white">
          <h3 className="text-xl font-extrabold leading-tight">
            ACOMPANHA A IA AVANÇAR MAS NUNCA PAROU PARA AGIR
          </h3>
          <p className="mt-4 inline-block bg-primary px-2 py-1 text-sm font-bold">
            O objetivo não é só estar atualizado.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            É parar de assistir a IA avançar sem você e usar um sábado para
            mudar de posição de vez.
            <br />
            <br />
            Você não tem 8 horas pra eu te colocar a par da IA mais poderosa do
            mercado?
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
          <h2 className="text-lg font-extrabold">
            ESSA IMERSÃO{" "}
            <em className="not-italic text-primary">NÃO É PARA VOCÊ</em> SE:
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Quer assistir sem implementar nada",
              "Está esperando o momento perfeito para começar",
              "Quer resultado sem mudar como trabalha hoje",
              "Não quer aumentar a produtividade",
              "Sempre dependendo da sua execução",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-8 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            ESSA MISSÃO É PARA MIM!
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
