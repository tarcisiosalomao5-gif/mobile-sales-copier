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
    <div className="fixed inset-x-0 bottom-0 z-50 bg-primary px-4 py-2 text-primary-foreground">
      <p className="text-center text-[11px] font-bold tracking-wide">
        VAGAS DESTE LOTE JÁ VENDIDAS:
      </p>
      <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-white/40">
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
      <section className="bg-[var(--dark-section)]">
        <img
          src={heroImg}
          alt="Missão Claude Code"
          width={1024}
          height={1024}
          className="mx-auto block h-[30vh] min-h-[205px] max-h-[245px] w-full object-cover object-top"
        />
      </section>

      <section className="px-5 pt-4 text-center">
        <div className="flex items-center justify-center gap-2 text-[2rem] font-black leading-none tracking-tight">
          <Sparkles className="h-9 w-9 text-primary" />
          <span>Claude</span>
        </div>
        <p className="-mt-0.5 text-xs font-bold tracking-[0.38em] text-primary">CODE</p>

        <div className="mx-auto mt-4 flex max-w-sm items-center justify-center gap-3 rounded-md border border-border bg-card px-3 py-3 text-sm font-semibold">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" /> Sábado, 16 de Maio
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" /> 09h às 17h
          </span>
        </div>

        <h1 className="mx-auto mt-4 max-w-sm text-[1.58rem] font-extrabold leading-[1.22]">
          1 Dia para implementar Claude Code e{" "}
          <em className="not-italic text-primary">Construir Times de I.A</em>{" "}
          que trabalham por você!
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-[1rem] leading-snug">
          <HighlightOrange>
            Aprenda ao vivo e online, como criar squads
          </HighlightOrange>{" "}
          de agentes autônomos que executam tarefas, substituem ferramentas e
          liberam o seu tempo, independente do seu nicho ou área de atuação.
        </p>

        <div className="mx-auto mt-4 max-w-sm">
          <a href="#inscricao" className={ctaBtn}>
            QUERO GARANTIR MINHA VAGA
          </a>
        </div>
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

      <StickyVagas />
    </main>
  );
}
