import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-12 bg-white text-center">

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Nosotros</h2>
      <h2 className="text-3xl font-bold mb-4">Marc palas entérate qué hacemos</h2>

      <div className="slider-nosotros max-w-4xl mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/pala2.png" alt="" loading="lazy" className="mx-auto" />
            <p className="mt-4 font-medium"><strong>Compromiso</strong>: Nos dedicamos con pasión a cada proyecto.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/cargue2.png" alt="" loading="lazy" className="mx-auto" />
            <p className="mt-4 font-medium"><strong>Trabajo en equipo</strong>: La colaboración es nuestra base.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/procontours2.png" alt="" loading="lazy" className="mx-auto" />
            <p className="mt-4 font-medium"><strong>Innovación</strong>: Buscamos siempre mejorar y evolucionar.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/thermal.png" alt="Thermal" loading="lazy" className="mx-auto" />
            <p className="mt-4 font-medium"><strong>Seguridad</strong>: Cuidamos a nuestro equipo en cada paso.</p>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination mt-4" />
      </div>

      <div className="container mx-auto mt-16 flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-semibold mb-4">¿Quiénes Somos?</h2>
          <p className="mb-4">
            En <strong>MARC PALAS Cerrejón</strong> estamos comprometidos con la excelencia...
          </p>
          <p>
            Con una cultura basada en el respeto, el compromiso y la mejora continua...
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/logo75.png" alt="Nuestro equipo" loading="lazy" className="w-full rounded-xl shadow" />
        </div>
      </div>
    </section>
  );
}