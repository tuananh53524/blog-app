"use client";
import "@/css/Home.css";
import { Container, Button, Col, Row, Image, Card } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

const Homepage = () => {
  return (
    <>
      <section className="main-title align-middle text-white fs-1 text-center fw-medium">
        Do you love your kitchen?
      </section>
      <section className="py-5 more-about">
        <div className="container text-center">
          <div className="btn-outline-dark mx-auto p-3 btn fs-3">
            More about Mon.ne
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 text-justify">
              Welcome to our kitchen decor haven, where style meets
              functionality to transform your culinary space into a haven of
              charm and efficiency. At our shop, we understand that the kitchen
              is the heart of the home, and we're passionate about helping you
              infuse it with personality and warmth. From trendy wall art to
              chic countertop accessories, our curated collection caters to
              every taste and design preference. Explore an array of themes,
              from modern and minimalist to rustic and farmhouse, ensuring
              there's something for everyone. Whether you're a seasoned chef or
              just love to whip up a simple meal, our thoughtfully selected
              decor items add that perfect finishing touch to make your kitchen
              uniquely yours.
            </div>
            <div className="col-12 col-lg-6 text-justify mt-4 mt-lg-0">
              Indulge in high-quality kitchenware, exquisite linens, and
              eye-catching decorative pieces that seamlessly blend aesthetics
              with practicality. Our knowledgeable and friendly staff are here
              to guide you through our carefully chosen inventory, offering
              insights and tips to help you create a space that reflects your
              personal style. Elevate your kitchen experience with our premium
              selection of products that promise to turn your cooking space into
              a welcoming retreat. Visit us today and embark on a journey to
              revitalize your kitchen, making it a place where memories are made
              and shared.
            </div>
          </div>
        </div>
      </section>
      <section className="two-title align-middle text-white fs-1 text-center fw-medium">
        <blockquote data-animation-role="quote">
          <span>“</span> We were all dreamers once. Some of us still are.{" "}
          <span>”</span>
        </blockquote>
      </section>
      <section className="py-5 blogs-post">
        <div className="container text-center">
          <div className="btn-outline-dark mx-auto p-3 btn fs-3">Blog</div>
        </div>
        <div className="container mt-5">
          <div className="row row-gap-4 align-items-stretch">
            <div className="col-12 col-md-6 col-xl-3">
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-1.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-3.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-4.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link{" "}
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="three-title align-middle text-white fs-1 text-center fw-medium">
        <blockquote data-animation-role="quote">
          Life is a new journey and photos will capture your smile
        </blockquote>
      </section>
      <section className="py-5 photos">
      <div className="container text-center">
          <div className="btn-outline-dark mx-auto p-3 btn fs-3">Photos</div>
        </div>
        <div className="container mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>              
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
              </SwiperSlide>

              <SwiperSlide>              
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
              </SwiperSlide>

              <SwiperSlide>              
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
              </SwiperSlide>

              <SwiperSlide>              
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
              </SwiperSlide>

              <SwiperSlide>              
              <Card className="card-style">
                <Card.Img variant="top" src="/images/blog/blog-2.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#" className="link-under">
                    Card Link
                  </Card.Link>
                </Card.Body>
              </Card>
              </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Homepage;
