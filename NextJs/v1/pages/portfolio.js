import Container from "../components/Container";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Link from "next/link";
import Image from "next/image";
const Portfolio = () => {
  return (
    <Container>
      <div className="container">
        <div className="row mt-5 pt-3 text-center">
          <h1 style={{ color: "white" }}>Projects</h1>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            style={{
              display: "flex",
              flex: "1 0 200px",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                transition: "all ease-in-out 0.3s",
                boxShadow: "0px 2px 15px #e04f5f;",
              }}
            >
              <Flippy
                style={{
                  width: "200px",
                  height: "300px",
                  textAlign: "center",
                  color: "rgb(255, 255, 255)",
                  fontSize: "30px",
                  justifyContent: "center",
                }}
              >
                <FrontSide
                  style={{
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    transitionDuration: "0.6s",
                  }}
                >
                  <Image
                    src="/assets/images/academic/uvaq.png"
                    alt="Soft Inc Admin System – UVAQ"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />

                  <h2
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      bottom: "-50px",
                      width: "100%",
                    }}
                  >
                    Soft Inc Admin System – UVAQ
                  </h2>
                </FrontSide>
                <BackSide
                  style={{
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    transitionDuration: "0.6s",
                  }}
                >
                  <Image
                    src="/assets/images/academic/uvaq.png"
                    alt="Soft Inc Admin System – UVAQ"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                  <h2
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      bottom: "-25px",
                      width: "100%",
                    }}
                  >
                    Soft Inc Admin System – UVAQ
                  </h2>
                  <span
                    style={{
                      fontSize: "15px",
                      position: "relative",
                      bottom: "-30px",
                      width: "100%",
                    }}
                  >
                    This is an application as simulator admin
                    <Link href="https://sistema-softinc.vercel.app/">
                      <a target="_blank" className="btn btn-primary">
                        <button type="button" className="btn btn-primary">
                          Visit page
                        </button>
                      </a>
                    </Link>
                  </span>
                </BackSide>
              </Flippy>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            style={{
              display: "flex",
              flex: "1 0 200px",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                transition: "all ease-in-out 0.3s",
                boxShadow: "0px 2px 15px #e04f5f;",
              }}
            >
              <Flippy
                style={{
                  width: "200px",
                  height: "300px",
                  textAlign: "center",
                  color: "rgb(255, 255, 255)",
                  fontSize: "30px",
                  justifyContent: "center",
                }}
              >
                <FrontSide
                  style={{
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    transitionDuration: "0.6s",
                  }}
                >
                  <Image
                    src="/assets/images/academic/uvaq.png"
                    alt="Soft Inc Admin System – UVAQ"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                  <h2
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      bottom: "-50px",
                      width: "100%",
                    }}
                  >
                    Soft Inc Admin System – UVAQ
                  </h2>
                </FrontSide>
                <BackSide
                  style={{
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    transitionDuration: "0.6s",
                  }}
                >
                  <Image
                    src="/assets/images/academic/uvaq.png"
                    alt="Soft Inc Admin System – UVAQ"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                  <h2
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      bottom: "-25px",
                      width: "100%",
                    }}
                  >
                    Soft Inc Admin System – UVAQ
                  </h2>
                  <span
                    style={{
                      fontSize: "15px",
                      position: "relative",
                      bottom: "-30px",
                      width: "100%",
                    }}
                  >
                    This is an application as simulator admin
                    <Link href="https://sistema-softinc.vercel.app/">
                      <a target="_blank" className="btn btn-primary">
                        <button type="button" className="btn btn-primary">
                          Visit page
                        </button>
                      </a>
                    </Link>
                  </span>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Portfolio;
