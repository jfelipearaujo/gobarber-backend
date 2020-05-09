# Recuperação de senha

**Requisitos Funcionais**
- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**
- Utilizar Mailtrap para testar os envios de e-mail em ambiente de desenvolvimento;
- Utilizar Amazon SES para os envios de e-mail em ambiente de produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio**
- O link enviado por e-mail para resetar a senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha antes de realizar o reset;

# Atualização do perfil

**Requisitos Funcionais**
- O usuário deve poder atualizar seu nome, e-mail, senha;

**Requisitos Não Funcionais**

**Regras de Negócio**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar sua senha;

# Painel do prestador

**Requisitos Funcionais**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O usuário deve receber uma notificação sempre que houver um novo agendamento;
- O usuário deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negócio**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais**
- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos 1 horário disponível de um prestador de serviço;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador de serviço;
- O usuário deve poder realizar um novo agendamento com um prestador de serviço;

**Requisitos Não Funcionais**
- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis das 8h até às 18h (primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário do passado;
- O usuário não pode agendar serviços consigo mesmo;
