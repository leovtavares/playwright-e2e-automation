# Relatório de Bugs (Bug Reports) - TAVARDT

Este documento simula a documentação profissional de falhas encontradas durante os ciclos de testes (manuais ou automatizados) no ambiente do cliente.

---

## BUG-001: Ausência de Validação Visual no Campo de E-mail

**Feature:** Formulário de Contato (ag.tavardt.com/br/contato)  
**Ambiente:** Chrome 120 (Desktop 1080p) / Windows 11  
**Severidade:** 🟠 Média  
**Prioridade:** Alta  
**Status:** Aberto  

### Descrição
Ao tentar submeter o formulário de contato com um e-mail com formato inválido (ex: ausência do "@" ou domínio), a aplicação não exibe um feedback visual de erro de formulário (ex: texto em vermelho indicando formato inválido) antes da submissão. O formulário não avança, porém o usuário fica sem feedback visível.

### Passos para Reproduzir
1. Acessar a página raiz `https://ag.tavardt.com`.
2. Navegar até a seção do formulário de contato.
3. Preencher o campo "Nome Completo" com um valor válido (ex: "Teste QA").
4. Preencher o campo "Email Profissional" com um valor inválido (ex: `testesemarrobadominio.com`).
5. Preencher o campo "Empresa" com um valor válido (ex: "Google").
6. Selecionar a opção "Serviço de Interesse" com um valor válido (ex: "Todos / Outro").
7. Clicar no botão "Enviar Mensagem".

### Resultado Atual
A página não apresenta indicação visual de erro sob o campo de e-mail. A requisição de submissão não é enviada (bloqueada nativamente pelo navegador) mas o sistema não exibe alertas customizados e o usuário fica confuso sobre o que ocorreu.

### Resultado Esperado
O sistema deveria aplicar uma máscara ou validação no frontend e, ao clicar no botão ou perder o foco do campo (blur), exibir um alerta visual imediato ("Por favor, insira um endereço de e-mail válido") mantendo a consistência do design do site.

### Evidências
- **Vídeo da execução:** `[Link-Loom-Placeholder]`
- **Log do Console:** Nenhuma exceção capturada no Console do DevTools.
- **Requisições de Rede:** Nenhum *Payload* disparado na aba Network.

---
*Nota: Este é um documento fictício, elaborado para fins de portfólio, demonstrando organização e clareza na comunicação de falhas entre as equipes de QA e Desenvolvimento.*
