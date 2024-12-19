import WordEffect from "@/components/common/word/WordEffect";
import SearchInput from "@/components/inputs/SearchInput";
export default function Hero() {
  return (
      <section className="flat-slider home-1">
          <div className="container relative">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="slider-content">
                          <div className="d-flex flex-column align-items-center text-center gap-12">
                              <div className="title-large text-white animationtext slide">
                                  Find Your <WordEffect strings={['Dream Clinic', 'Perfect Clinic']} />
                              </div>
                              <p className="text-white body-2 wow fadeInUp mt-6 w-75 mx-auto" data-wow-delay=".2s">
                                  MediFinder helps you locate trusted clinics, hospitals, and pharmacies worldwide
                              </p>
                              <div className="mt-12 w-75">
                                  <SearchInput />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="overlay" />
      </section>
  );
}
