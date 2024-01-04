# Weather Now ⛅

App para saber sobre o clima/tempo de uma cidade no exato momento da pesquisa.

## Executando o projeto 💻

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando as dependências.

```sh
git clone https://github.com/matheusc1/weather-now
cd weather-now
npm install
```

Após isso é preciso obter uma API key, seguindo os passos a seguir:

1. Abra o site **[openweathermap](https://openweathermap.org/)**
2. Crie uma conta e confirme seu e-mail
3. Vá a seção Pricing e clique em **Get API Key** na parte Free
4. Vá ao seu perfil e navegue para a página de **API keys**
5. Copie a key e crie na raiz do projeto um arquivo chamado **.env.local**

- No Windows pode ser feito da seguinte forma
```
echo . > .env.local
code .env.local
```

6. Crie uma variável chamada **NEXT_PUBLIC_WEATHER_API** dentro do arquivo e coloque sua API key lá

```
NEXT_PUBLIC_WEATHER_API = API_KEY
```

7. Após isso basta esperar algumas horas para sua key ser ativada e executar o projeto

```
npm run dev
```

## Tecnologias utilizadas ⚛️

- [React](https://github.com/facebook/react)
- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://github.com/microsoft/TypeScript)