import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const WHATSAPP_NUMBER = '5511982822443';

const PRODUTOS = [
  'Ar-condicionado', 'Geladeira / Refrigerador', 'Máquina de Lavar', 'Lava e Seca',
  'Micro-ondas', 'Fogão / Cooktop', 'Forno Elétrico', 'Freezer',
  'Secadora de Roupas', 'Adega / Frigobar', 'Outro',
];

const MARCAS = [
  'CONSUL', 'ELECTROLUX', 'SAMSUNG', 'LG', 'BRASTEMP', 'MIDEA'
];

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  // Endereço estruturado
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  // Aparelho
  produto: string;
  marca: string;
  defeito: string;
}

const empty: FormData = {
  nome: '', email: '', telefone: '',
  cep: '', rua: '', numero: '', bairro: '', cidade: '', uf: '',
  produto: '', marca: '', defeito: '',
};

function formatEndereco(d: FormData) {
  const parts = [d.rua, d.numero, d.bairro, d.cidade, d.uf, d.cep]
    .filter(Boolean).join(', ');
  return parts || '—';
}

function formatWhatsApp(d: FormData): string {
  const msg = [
    '🔧 *Solicitação de Atendimento – MachTec*',
    '',
    `👤 *Nome:* ${d.nome}`,
    `📧 *E-mail:* ${d.email || '—'}`,
    `📱 *Telefone:* ${d.telefone}`,
    '',
    `📍 *Endereço:*`,
    `   CEP: ${d.cep}`,
    `   Rua: ${d.rua}${d.numero ? `, ${d.numero}` : ''}`,
    `   Bairro: ${d.bairro}`,
    `   Cidade: ${d.cidade} – ${d.uf}`,
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
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <Icon icon={icon} className="text-primary text-base" />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all disabled:bg-gray-50 disabled:text-gray-400';

export function ContactFormSection() {
  const [form, setForm] = useState<FormData>(empty);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState('');
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  // ViaCEP autocomplete
  const handleCepBlur = async () => {
    const raw = form.cep.replace(/\D/g, '');
    if (raw.length !== 8) return;

    setCepLoading(true);
    setCepError('');
    try {
      const res = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
      const data = await res.json();
      if (data.erro) {
        setCepError('CEP não encontrado.');
      } else {
        setForm(prev => ({
          ...prev,
          rua:    data.logradouro || prev.rua,
          bairro: data.bairro     || prev.bairro,
          cidade: data.localidade || prev.cidade,
          uf:     data.uf         || prev.uf,
        }));
      }
    } catch {
      setCepError('Erro ao buscar CEP. Verifique sua conexão.');
    } finally {
      setCepLoading(false);
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // format: 00000-000
    const raw = e.target.value.replace(/\D/g, '').slice(0, 8);
    const formatted = raw.length > 5 ? `${raw.slice(0, 5)}-${raw.slice(5)}` : raw;
    setForm(prev => ({ ...prev, cep: formatted }));
    setCepError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(formatWhatsApp(form), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const isValid = form.nome && form.telefone && form.produto && form.defeito;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-600 border border-green-200 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
        >
          <Icon icon="logos:whatsapp-icon" className="text-xs" />
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
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/60 p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Informações Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Field label="Nome completo" icon="mdi:account">
                <input type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} required className={inputCls} />
              </Field>
              <Field label="Telefone / WhatsApp" icon="mdi:phone">
                <input type="tel" placeholder="(11) 99999-9999" value={form.telefone} onChange={set('telefone')} required className={inputCls} />
              </Field>
              <Field label="E-mail" icon="mdi:email">
                <input type="email" placeholder="seu@email.com" value={form.email} onChange={set('email')} className={inputCls} />
              </Field>
            </div>

            {/* ─── Endereço ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="text-primary" />
                Endereço do atendimento
              </p>

              <div className="grid grid-cols-12 gap-4 md:gap-5">
                {/* CEP */}
                <div className="col-span-12 md:col-span-3">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">CEP</label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="00000-000"
                      value={form.cep}
                      onChange={handleCepChange}
                      onBlur={handleCepBlur}
                      maxLength={9}
                      className={`${inputCls} pr-10`}
                    />
                    {cepLoading && (
                      <Icon
                        icon="mdi:loading"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl animate-spin"
                      />
                    )}
                  </div>
                  {cepError && <p className="text-xs text-red-500 mt-1">{cepError}</p>}
                </div>

                {/* Rua */}
                <div className="col-span-8 md:col-span-7">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Rua / Logradouro</label>
                  <input type="text" placeholder="Rua das Flores" value={form.rua} onChange={set('rua')} className={inputCls} />
                </div>

                {/* Número */}
                <div className="col-span-4 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Número</label>
                  <input type="text" placeholder="123" value={form.numero} onChange={set('numero')} className={inputCls} />
                </div>

                {/* Bairro */}
                <div className="col-span-12 md:col-span-5">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Bairro</label>
                  <input type="text" placeholder="Centro" value={form.bairro} onChange={set('bairro')} className={inputCls} />
                </div>

                {/* Cidade */}
                <div className="col-span-8 md:col-span-5">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Cidade</label>
                  <input type="text" placeholder="São Paulo" value={form.cidade} onChange={set('cidade')} className={inputCls} />
                </div>

                {/* UF */}
                <div className="col-span-4 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">UF</label>
                  <input type="text" placeholder="SP" value={form.uf} onChange={set('uf')} maxLength={2} className={`${inputCls} uppercase`} />
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
                className="rounded-2xl bg-gray-50 border border-gray-200 p-4 text-xs text-gray-500 font-mono leading-relaxed overflow-hidden"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Icon icon="mdi:eye" /> Pré-visualização da mensagem
                </p>
                <pre className="whitespace-pre-wrap break-words">
{`🔧 Solicitação de Atendimento – MachTec

👤 Nome: ${form.nome}
📧 E-mail: ${form.email || '—'}
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
                <><Icon icon="logos:whatsapp-icon" className="text-2xl" /> Enviar pelo WhatsApp</>
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
