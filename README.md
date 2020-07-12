## Banco de Dados:

```docker
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

## Padrão de nomeação no Banco de dados
- snack_case

## Criação de Migrations:

```yarn
yarn typeorm migration:create -n CreateAppointments
```

## Execução de Migrations:

### Executa o método up() da última migration
```yarn
yarn typeorm migration:run
```

### Executa o método down() da última migration
```yarn
yarn typeorm migration:revert
```

### Exibe as migrations executadas
```yarn
yarn typeorm migration:show
```

### Mapeando features do sistema

# Recuperação de senha

**Requisitos funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon Simple E-mail Service (SES) para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de negócio**

- O link enviado por e-mail para resetar senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisitos funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**Regras de negócio**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outra pessoa;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Agendamento de serviços

**Requisitos funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de negócio**

- Cada agendamento deve durar exatamente 1h;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário no passado;
- O usuário não pode agendar serviços consigo mesmo;

# Painel do prestador

**Requisitos funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não funcionais**

- Os agendamentos do prestadores no dia devem ser armazenada em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

