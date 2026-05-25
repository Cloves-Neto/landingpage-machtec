import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const WHATSAPP_NUMBER = '5511982822443';

const PRODUTOS = [
  'Máquina de Lavar', 'Secadora', 'Lava e Seca', 'Micro-ondas', 'Freezer', 'Frigobar', 'Outros'
];

const MARCAS = [
  'CONSUL', 'ELECTROLUX', 'SAMSUNG', 'LG', 'BRASTEMP', 'MIDEA'
];

interface FormData {
  nome: string;
  telefone: string;
  numero: string;
  bairro: string;
  cidade: string;
  produto: string;
  marca: string;
  defeito: string;
}

const empty: FormData = {
  nome: '', telefone: '',
  numero: '', bairro: '', cidade: '',
  produto: '', marca: '', defeito: '',
};

function formatEndereco(d: FormData) {
  const parts = [d.bairro, d.cidade].filter(Boolean);
  if (parts.length === 0) return '—';
  return `${d.bairro}, ${d.cidade}${d.numero ? `, Nº ${d.numero}` : ''}`;
}

function formatWhatsApp(d: FormData): string {
  const msg = [
    '🔧 *Solicitação de Atendimento – MachTec*',
    '',
    `👤 *Nome:* ${d.nome}`,
    `📱 *Telefone:* ${d.telefone}`,
    '',
    `📍 *Endereço:*`,
    `   Cidade: ${d.cidade}`,
    `   Bairro: ${d.bairro}`,
    `   Número: ${d.numero}`,
    '',
    `🛠️ *Produto:* ${d.produto}`,
    `🏷️ *Marca:* ${d.marca || '—'}`,
    `⚠️ *Defeito apresentado:*`,
    d.defeito,
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function Field({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-200">
        <Icon icon={icon} className="text-sky-400 text-base" />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all disabled:bg-gray-50 disabled:text-gray-400';

export function ContactFormSection() {
  const [form, setForm] = useState<FormData>(empty);
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(formatWhatsApp(form), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const isValid = form.nome && form.telefone && form.cidade && form.bairro && form.numero && form.produto && form.defeito;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-md"
        >
          <Icon icon="mdi:whatsapp" className="text-sm" />
          Contato via WhatsApp
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl md:text-5xl font-black text-dark leading-tight mb-4"
        >
          Solicite seu{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Orçamento Grátis
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-lg max-w-xl mx-auto"
        >
          Preencha as informações abaixo para enviar o orçamento diretamente para o nosso WhatsApp. Retornamos em poucos minutos!
        </motion.p>
      </div>

      {/* Form */}
      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-dark rounded-[2.5rem] border border-white/10 shadow-2xl p-8 md:p-12 text-white"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Informações Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nome" icon="mdi:account">
                <input type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} required className={inputCls} />
              </Field>
              <Field label="Telefone / WhatsApp" icon="mdi:phone">
                <input type="tel" placeholder="(11) 98282-2443" value={form.telefone} onChange={set('telefone')} required className={inputCls} />
              </Field>
            </div>

            {/* ─── Endereço ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="text-sky-400 text-sm" />
                Endereço do atendimento
              </p>

              <div className="grid grid-cols-12 gap-4 md:gap-5">
                {/* Cidade */}
                <div className="col-span-12 md:col-span-5">
                  <label className="text-sm font-semibold text-gray-200 mb-1.5 block">Cidade</label>
                  <input type="text" placeholder="São Bernardo do Campo" value={form.cidade} onChange={set('cidade')} required className={inputCls} />
                </div>

                {/* Bairro */}
                <div className="col-span-12 md:col-span-5">
                  <label className="text-sm font-semibold text-gray-200 mb-1.5 block">Bairro</label>
                  <input type="text" placeholder="Centro" value={form.bairro} onChange={set('bairro')} required className={inputCls} />
                </div>

                {/* Número */}
                <div className="col-span-12 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-200 mb-1.5 block">Número</label>
                  <input type="text" placeholder="123" value={form.numero} onChange={set('numero')} required className={inputCls} />
                </div>
              </div>
            </div>

            {/* Produto + Marca */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Produto" icon="mdi:washing-machine">
                <select value={form.produto} onChange={set('produto')} required className={inputCls}>
                  <option value="">Selecione o produto…</option>
                  {PRODUTOS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="Marca" icon="mdi:tag">
                <select value={form.marca} onChange={set('marca')} className={inputCls}>
                  <option value="">Selecione a marca…</option>
                  {MARCAS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
            </div>

            {/* Defeito */}
            <Field label="Defeito apresentado" icon="mdi:alert-circle">
              <textarea
                rows={4}
                placeholder="Descreva o problema que o aparelho está apresentando…"
                value={form.defeito}
                onChange={set('defeito')}
                required
                className={`${inputCls} resize-none`}
              />
            </Field>

            {/* Preview */}
            {form.nome && form.produto && form.defeito && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-gray-300 font-mono leading-relaxed overflow-hidden"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Icon icon="mdi:eye" /> Pré-visualização da mensagem
                </p>
                <pre className="whitespace-pre-wrap break-words">
{`🔧 Solicitação de Atendimento – MachTec

👤 Nome: ${form.nome}
📱 Telefone: ${form.telefone || '—'}

📍 Endereço: ${formatEndereco(form)}

🛠️ Produto: ${form.produto}
🏷️ Marca: ${form.marca || '—'}
⚠️ Defeito: ${form.defeito}`}
                </pre>
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-4 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 transition-all
                bg-gradient-to-r from-[#25D366] to-[#128C7E]
                hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1
                disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
            >
              {sent ? (
                <><Icon icon="mdi:check-circle" className="text-2xl" /> WhatsApp aberto!</>
              ) : (
                <><Icon icon="mdi:whatsapp" className="text-2xl" /> Enviar pelo WhatsApp</>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              Ao clicar, você será redirecionado para o WhatsApp com a mensagem já formatada.
            </p>

          </form>
        </motion.div>
      </div>

    </section>
  );
}
