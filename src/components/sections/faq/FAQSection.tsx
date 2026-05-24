import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { Icon } from '@iconify/react';

const faqsLeft = [
  {
    q: 'Atendem em quais regiões?',
    a: 'Atuamos fortemente em toda a região metropolitana. Contamos com equipes distribuídas estrategicamente para garantir que o seu chamado seja atendido no mesmo dia ou no máximo em 24h úteis.'
  },
  {
    q: 'Quanto custa a visita técnica?',
    a: 'A visita possui uma pequena taxa de deslocamento que varia de acordo com o seu CEP. A excelente notícia é que, ao aprovar o orçamento do conserto, essa taxa de visita é 100% abatida do valor total!'
  },
  {
    q: 'O conserto é feito na hora?',
    a: 'Na maioria absoluta dos casos, sim! Nossos técnicos levam peças de reposição frequentes no veículo. Se o problema for mais complexo ou exigir uma peça específica sob encomenda, agendamos o retorno com prioridade.'
  }
];

const faqsRight = [
  {
    q: 'Vocês utilizam peças originais?',
    a: 'Sim, a qualidade é inegociável. Trabalhamos primariamente com peças originais de fábrica para assegurar a durabilidade e a segurança do seu eletrodoméstico, mantendo a performance ideal.'
  },
  {
    q: 'Qual é o prazo de garantia do conserto?',
    a: 'Todos os nossos serviços e peças substituídas contam com garantia formal de 90 dias, conforme o Código de Defesa do Consumidor. Caso o mesmo problema volte a ocorrer, priorizamos o seu atendimento.'
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Para sua comodidade, aceitamos pagamento via PIX, cartões de crédito (com opção de parcelamento para serviços maiores) e cartões de débito, recebendo diretamente na maquininha com o técnico.'
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6"
          >
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Frequentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Tudo o que você precisa saber antes de solicitar a nossa visita técnica especializada.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid md:grid-cols-2 gap-6"
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqsLeft.map((faq, idx) => (
              <Accordion.Item 
                key={`left-${idx}`} 
                value={`left-${idx}`} 
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm data-[state=open]:bg-dark data-[state=open]:border-white/10 transition-colors duration-300"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-dark hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                    <span className="group-data-[state=open]:text-transparent group-data-[state=open]:bg-clip-text group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-primary group-data-[state=open]:to-secondary transition-all">
                      {faq.q}
                    </span>
                    <Icon icon="mdi:chevron-down" className="text-2xl text-gray-400 group-data-[state=open]:text-white transition-transform duration-300 ease-out shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-gray-600 group-data-[state=open]:text-white/90 px-6 pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqsRight.map((faq, idx) => (
              <Accordion.Item 
                key={`right-${idx}`} 
                value={`right-${idx}`} 
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm data-[state=open]:bg-dark data-[state=open]:border-white/10 transition-colors duration-300"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-dark hover:text-primary transition-colors [&[data-state=open]>svg]:rotate-180">
                    <span className="group-data-[state=open]:text-transparent group-data-[state=open]:bg-clip-text group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-primary group-data-[state=open]:to-secondary transition-all">
                      {faq.q}
                    </span>
                    <Icon icon="mdi:chevron-down" className="text-2xl text-gray-400 group-data-[state=open]:text-white transition-transform duration-300 ease-out shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-gray-600 group-data-[state=open]:text-white/90 px-6 pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
