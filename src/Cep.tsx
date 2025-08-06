// useForm é o hook principal do react-hook-form
import { useForm } from 'react-hook-form';
import { Button, CepContainer, Input, InputsContainer } from './Cep.style';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaAdress = z.object({
  zipCode: z.string().min(9, 'Por favor, informe um CEP válido'),
  street: z.string().min(1, 'Por favor, informe uma rua válida'),
  number: z.string().min(1, 'Por favor, informe um número válido'),
  district: z.string().min(1, 'Por favor, informe um bairro válido'),
  complement: z.string(),
  city: z.string().min(1, 'Por favor, informe uma cidade válida'),
  state: z.string().min(1, 'Por favor, informe um estado válido'),
});

type AdressFormType = z.infer<typeof schemaAdress>;

const Cep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdressFormType>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaAdress),
  });

  const handleFormSubmit = (data: AdressFormType) => {
    console.log(data);
  };

  return (
    <>
      <CepContainer>
        <h2>Endereço</h2>
        <InputsContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="text"
            {...register('zipCode')}
            placeholder="CEP"
            maxLength={9}
          />
          <Input type="text" {...register('street')} placeholder="Rua" />
          <Input type="text" {...register('number')} placeholder="Número" />
          <Input type="text" {...register('district')} placeholder="Bairro" />
          <Input
            type="text"
            {...register('complement')}
            placeholder="Complemento"
          />
          <Input type="text" {...register('city')} placeholder="Cidade" />
          <Input type="text" {...register('state')} placeholder="Estado" />

          <Button type="submit">Enviar</Button>
        </InputsContainer>
      </CepContainer>
    </>
  );
};

export default Cep;
