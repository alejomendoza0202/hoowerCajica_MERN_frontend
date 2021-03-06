import Header from "../components/generals/Header";
import ImageHeader from "../img/biografia/img3.png";
import { Link } from "react-router-dom";
import useReflexiones from "../hooks/useReflexiones";
import MetaTags from 'react-meta-tags';

const Noticias = () => {
  // ------------------- HOOKS -------------------

  // ------------------- useReflexiones
  const { reflexiones, noticias } = useReflexiones();

  return (
    <>
      <MetaTags>
        <title>{`Noticias | Hoower Cajicá`}</title>
        <meta
          name="description"
          content="Noticias del sitio web oficial de Hoower Cajicá."
        />
        <meta name="keywords" content="Hoower Cajica, Noticias, Blog" />
        <meta property="fb:app_id" content="123456789" />
        <meta
          property="og:image"
          content="https://yt3.ggpht.com/ytc/AKedOLQhleKl-s_qkN9MUER2fgwCjhG07jwFDEtLdm4R=s900-c-k-c0x00ffffff-no-rj"
        ></meta>
        <meta
          property="og:description"
          content="Noticias del sitio web oficial de Hoower Cajicá."
        />
        <meta
          property="og:url"
          content="https://www.hoowercajica.com/noticias"
        ></meta>
        <meta property="og:type" content="website"></meta>
      </MetaTags>
      <div className="w-full">
        <Header bg="bg-third" reverse={false} img={ImageHeader}>
          Noticias
        </Header>
        <div className="md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto md:flex md:gap-2">
          {/* Left */}
          <div className="flex flex-col w-full md:w-2/3 gap-3 my-5">
            {/* Card */}
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <Link
                  key={noticia._id}
                  to={`/post/${noticia._id}`}
                  className="h-[500px] 2xl:h-[600px] bg-five hover:bg-secondary transition-all duration-500"
                >
                  {/* Header */}
                  <div className="h-1/2">
                    <img
                      src={noticia.img_header}
                      alt="Imágen de encabezado de la noticia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Information */}
                  <div className="h-1/2 p-5 flex flex-col gap-3 text-white">
                    <h2 className="text-xl font-semibold font-merri">
                      {noticia.title}
                    </h2>
                    <p className="font-merri">
                      <span className="capitalize">
                        Autor: {String(noticia.author)}
                      </span>{" "}
                      | Publicado el: {String(noticia.createdAt).slice(0, 10)}
                    </p>
                    <p className="text-md ">
                      {noticia.body
                        .split(" ")
                        .slice(0, 40)
                        .join(" ")
                        .replace(
                          /(<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;)/gi,
                          " "
                        )}
                      ...
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div className="w-full">
                  <h1 className="text-3xl font-semibolf font-merri text-center">
                    No hay noticias
                  </h1>
                </div>
              </>
            )}
          </div>
          {/* Right */}
          <div className="hidden md:block w-1/3 bg-gray-100 h-1/2 rounded-md my-5 p-5 sticky">
            {noticias.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold font-merri">
                  Publicaciones recientes
                </h2>
                {noticias.slice(0, 5).map((noticia) => (
                  <Link key={noticia._id} to={`/post/${noticia._id}`}>
                    <p className="my-5 text-lg ">{noticia.title}</p>
                  </Link>
                ))}
              </>
            )}
            <div className="hidden md:block w-full h-[2px] bg-primary mb-7" />

            <h2 className="text-2xl font-semibold font-merri mt-3">
              Reflexión del día
            </h2>
            {reflexiones.slice(0, 1).map((reflexion, index) => (
              <a
                href={`https://www.youtube.com/watch?v=${reflexion.url}`}
                className={`md:w-[240px]`}
                target="_blank"
                key={index}
              >
                <div className="relative h-[400px] md:h-[300px] w-full mx-auto bg-white shadow-xl transition-all duration-500 my-10 md:w-full hover:bg-gray-100">
                  <div className="h-1/2 w-full bg-third">
                    <img
                      src={reflexion.img_header}
                      className="w-full h-full object-cover"
                      alt="Imágen de vista previa a la reflexión"
                    />
                  </div>

                  {/* Title */}
                  <div className="h-1/2 w-full flex justify-center items-center">
                    <p className="w-2/3 text-[16px] text-center font-semibold md:text-[md] lg:text-md">
                      {reflexion.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
