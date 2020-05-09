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

