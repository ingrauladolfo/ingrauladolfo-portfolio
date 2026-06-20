import Navbar from "./Navbar";
import Head from "next/head";
// import Footer from '../pages/Footer'
const Container = (props) => (
  <div style={{ backgroundColor: "black" }}>
    {/* <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
      <script src="https://kit.fontawesome.com/997ed15eaf.js" crossOrigin="anonymous" />
    </Head> */}
    <Navbar />
    <div>{props.children}</div>
    {/* <Footer /> */}
  </div>
);

export default Container;
