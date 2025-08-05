// useForm é o hook principal do react-hook-form
import { useForm } from 'react-hook-form';
import { Button, CepContainer, Input, InputsContainer } from './Cep.style';

type AdressFormType = {
  zipCode: string;
  street: string;
  district: string;
  complement: string;
  city: string;
  state: string;
};

const Cep = () => {
  // useForm retorna métodos e propriedades para manipular o formulário
  // register, conecta os inputs ao sistema de formulários
  // handleSubmit, lida com o envio do formulário
  // formState, contém o estado do formulário, incluindo erros
  // o useForm vai de acordo com o tipo generico definido para os dados
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdressFormType>();

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
