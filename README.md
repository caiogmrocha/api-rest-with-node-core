# Estrutura de Pastas

- **entities** - Aqui teremos as entidades da aplicação. Elas definem a regra de negócio e têm como responsabilidade validar e definir qual a estrutura de dados de cada recurso.
- **repositories** - Os repositories são responsáveis por executar ações no Banco de Dados, como a criação, edição, recuperação e exclusão de registros. (usa as `entities` como moldes de dados)
- **services** - Aqui teremos os serviços da aplicação. Eles gerenciam a regra de negócios da aplicação. (usa os `repositories` e as `entities`)
- **controllers** - Os controllers gerenciam as requisições HTTP adaptando-as para os `services` executarem algum caso de uso com os dados fornecidos e no fim retornam uma resposta HTTP para o cliente.
- **factories** - Os factories irão gerar as instâncias que serão fornecidas como dependência do nosso controller e por fim retornar uma instância do próprio controller