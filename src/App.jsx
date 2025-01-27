import {
  Carousel,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

import './App.css'
import { useState } from 'react';

let reload = true
export function CarouselDefault() {
  return (
    <Carousel
      autoplayDelay={2000}
      transition={{ duration: 2.5 }}
      autoplay={true}
      loop={true}
      className="rounded-lg max-w-80 m-auto h-96 my-5 shadow-sm shadow-blue-gray-400"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src='../src/assets/img1.jpg'
        alt="image 1"
        className="h-full w-full p-2 object-cover"
      />
      <img
        src='../src/assets/img2.jpg'
        alt="image 2"
        className="h-full w-full p-2 object-cover"
      />
      <img
        src='../src/assets/img3.jpg'
        alt="image 3"
        className="h-full w-full p-2 object-cover"
      />
      <img
        src='../src/assets/img5.jpg'
        alt="image 5"
        className="h-full w-full p-2 object-cover object-top"
      />
    </Carousel>
  );
}

export function CardDefault({ image, title, paragraph }) {
  return (
    <Card className="py-12 w-full shadow-sm shadow-blue-gray-400">
      <CardHeader color="blue-gray" className="relative h-72 shadow-sm shadow-blue-gray-400">
        <img
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant='lead'>
          {paragraph}
        </Typography>
      </CardBody>
    </Card>
  );
}


function App() {

  return (
    <>
      <div>
        <div className='sm:w-80 h-full p-2 mx-auto bg-light-blue-900'>
          <header className=" rounded-md p-2 my-1 text-2xl text-blue-100 text-center w-full">
            <h1 className='animate-pulse transition-all'>Daniela eu te amo!</h1>
          </header>

          <main className='flex rounded-lg justify-center flex-col items-center p-2 bg-gray-50 shadow-md'>
            <h2 className='text-blue-900 text-2xl bold'>16.02.2024</h2>
            <p className='text-purple-900 text-xl'>Você lembra dessa data?</p>
            <CarouselDefault />
          </main>

          <div className='mt-8'>
            <CardDefault
              title='Foi o dia em que te conheci'
              paragraph='
          O dia que conheci e a vida voltou a fazer sentido novamente.
          Conheci a pessoa que eu sempre sonhei que existiria.
          Conheci uma mulher inteligente, amiga e safada,
          Conheci o amor da minha vida.
          '
              image='../src/assets/img4.jpg'
            />
          </div>

          <div className='mt-8'>
            <CardDefault
              title='Você é tudo pra mim'
              paragraph='
          Você é tudo pra mim, a cada dia que passa, percebo
          o quanto sou feliz ao teu lado, espero que tu também seja feliz comigo,
          tento retribuir da melhor maneira possível
          sempre te fazendo se sentir amada e desejada.
          '
              image='../src/assets/img2.jpg'
            />
          </div>

          <div className='mt-8'>
            <CardDefault
              title='Sempre um pelo outro'
              paragraph='
          tudo começou com uma grande curtição, tanto para mim,
          como para você, jamais imaginariamos que íamos ficar completamente
          apaixonados um pelo outro, e a melhor decisão da minha vida sem dúvidas
          foi querer me relacionar sério com você. Tu foi a melhor coisa que me aconteceu
          e só tem a somar a cada dia que passa como vem fazendo, somos grandes amigos acima de tudo
          mas também somos eternos namorados adolescente cheio de fogo e tesão um pelo outro.
          Te amo mais que tudo nessa vida
          Te amo minha véia
          Espero que dure por muito tempo toda essa parceria, amor, compreenção que temos
          um pelo outro.
          Te amo
          '
              image='../src/assets/img4.jpg'
            />
          </div>

          <div className='mt-8'>
            <CardDefault
              title='Te amo meu amor ❤️'
              paragraph=''
              image='../src/assets/img5.jpg'
            />
          </div>
        </div>
      </div>
    </>
  )

}

export default App
