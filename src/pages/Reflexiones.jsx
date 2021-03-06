import Header from "../components/generals/Header";
import ImageHeader from "../img/biografia/img2.png";
import useReflexiones from "../hooks/useReflexiones";
import MetaTags from 'react-meta-tags';

const Reflexiones = () => {
  const { reflexiones } = useReflexiones();

  return (
    <>
      <MetaTags>
      <title>{`Reflexiones | Hoower Cajicá`}</title>
        <meta
          name="description"
          content="Reflexiones de Hoower Cajicá. Visita mi canal de Youtube."
        />
        <meta name='keywords' content="Hoower Cajica, Reflexiones, Religión, Youtube, Blog, Laudes"/>
        <meta property="fb:app_id" content="123456789" />
        <meta
          property="og:image"
          content="https://yt3.ggpht.com/ytc/AKedOLQhleKl-s_qkN9MUER2fgwCjhG07jwFDEtLdm4R=s900-c-k-c0x00ffffff-no-rj"
        ></meta>
        <meta
          property="og:description"
          content="Reflexiones de Hoower Cajicá. Visita mi canal de Youtube."
        />
        <meta property="og:url" content="https://www.hoowercajica.com/reflexiones"></meta>
        <meta property="og:type" content="website"></meta>
      </MetaTags>
      <div className="h-full w-full">
        <Header bg="bg-five" reverse={true} img={ImageHeader}>
          {" "}
          Reflexiones{" "}
        </Header>
        <div className="md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto md:flex ">
          {reflexiones.length > 0 ? (
            <>
              {/* Left */}
              <div className="w-full md:w-2/3 p-5">
                <h1 className="font-merri text-4xl font-black">Vídeos</h1>
                {/* Cards Container */}
                <div className="flex flex-col mt-5 gap-3 md:gap-10">
                  {/* Cards */}
                  {reflexiones.slice(0, 8).map((reflexion) => (
                    <div
                      key={reflexion._id}
                      className="bg-gray-200 hover:bg-gray-300 transition-all duration-300 w-full h-[400px] md:flex md:h-[200px]"
                    >
                      {/* Image */}
                      <div className="h-2/5 md:h-full md:w-2/5">
                        <img
                          src={reflexion.img_header}
                          alt="Vista previa de la reflexión"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-3/5 flex flex-col justify-center md:h-full md:w-3/5">
                        {/* Text */}
                        <div className="h-3/5 p-5 flex flex-col justify-center">
                          <h2 className="text-xl text-center font-semibold font-merri md:text-left">
                            {reflexion.title}
                          </h2>
                        </div>
                        {/* Buttons */}
                        <div className="h-2/5">
                            <a
                              href={`https://www.youtube.com/watch?v=${reflexion.url}`}
                              target="_blank"
                              className="block mx-[150px] text-center py-2 bg-third text-white rounded-xl font-bold hover:bg-secondary transition-all duration-500">
                              Ver
                            </a>{" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="my-10 text-3xl font-merri font-semibold w-2/3">
                No hay reflexiones
              </h2>
            </>
          )}
          {/* Right */}
          <div className="hidden md:block w-1/3 bg-white pt-20 h-full p-5  transition-all duration-500 sticky top-0 right-0">
            <h1 className="text-black font-merri font-semibold text-2xl text-center">
              Visita mi canal de Youtube
            </h1>
            <div className="h-[200px] w-[200px] rounded-full bg-gray-100 mx-auto mt-5 mb-5">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLQhleKl-s_qkN9MUER2fgwCjhG07jwFDEtLdm4R=s900-c-k-c0x00ffffff-no-rj"
                alt="Canal de Youtube Hoower Cajicá"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

              <a 
                href="https://www.youtube.com/c/PadreHoowerCajic%C3%A1"
                target="_blank"
                className="block mx-[70px] py-2 text-center bg-third text-white rounded-xl font-bold hover:bg-secondary transition-all duration-500"
              >
                Ir a youtube
              </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflexiones;
