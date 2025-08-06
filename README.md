# 📍 Formulário de Endereço

> Criado com **React Hook Form**, totalmente livre de `useState`.  
> Validação com **Zod** e consumo de uma API que carrega dados a partir do **CEP**.

---

## 🧠 `useForm`: Hook principal do React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<AdressFormType>({
  criteriaMode: 'all',
  mode: 'all',
  resolver: zodResolver(schemaAdress),
});
```

- `useForm` retorna métodos e propriedades para manipular o formulário
- `register`, conecta os inputs ao sistema de formulários
- `handleSubmit`, lida com o envio do formulário
- `formState`, contém o estado do formulário, incluindo erros
- `useForm` vai de acordo com o tipo generico definido para os dados

### Propriedades passadas para o useForm()

> Esse formulário deve validar todos os erros de cada campo `(criteriaMode: 'all')` em todos os momentos `(mode: 'all')` usando o schema de endereço definido com Zod `(resolver: zodResolver(schemaAdress))`

- `criteriaMode: 'all'`: <br>Exibe todos os erros, não só o primeiro a ser encontrado, mas todos os possíveis
- `mode: 'all'`: <br>Modo de validação, em que momento os campos serão válidados, só quando envia, quando tem foco, quando não tem foco ou enquanto digita? Ou ainda sim, em todos estes? que o caso do all
- `resolver: zodResolver(schemaAdress)`: <br>Integra o schema de validação ao formulário

## Criação de Schema

>  Criando um schema, uma **descrição formal das regras** que os dados a serem preenchidos devem seguir

```tsx
const schemaAdress = z.object({
  zipCode: z.string().min(9, 'Por favor, informe um CEP válido'),
  street: z.string().min(1, 'Por favor, informe uma rua válida'),
  number: z.string().min(1, 'Por favor, informe um número válido'),
  district: z.string().min(1, 'Por favor, informe um bairro válido'),
  complement: z.string(),
  city: z.string().min(1, 'Por favor, informe uma cidade válida'),
  state: z.string().min(1, 'Por favor, informe um estado válido'),
});
```

- `z.object` indica que estamos criando um schema para um objeto que tem essas chaves com esses tipos especificos
- `z.string()` indica o tipo de dado e .min() é o minimo de caracteres que a string deve conter, e se não for atingido a mensagem como segundo parâmetro será exibida como erro no preenchimento
