import { Parallax } from "react-parallax";


const Cover = ({ img, title, subtitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Menu banner"
        strength={-200}
      >
        <div className="hero h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 uppercase">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>

    </div>
  );
};

export default Cover;
