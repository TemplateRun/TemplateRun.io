import styled from "styled-components";
export const FooterWrapper = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

p{
  color: aliceblue;
}
  

footer {
  margin: auto;
  background-color: #210248;
  width: 100%;
  color: aliceblue;
  display: grid;
  position: absolute;
  grid-template-areas:
    "about icons pro"
    "hr hr hr"
    ". . copy";
}

.about {
  /* background-color: aqua; */
  width: 20rem;
  margin-left: 4rem;
  grid-area: about;
  margin-top: 2rem;
}

.about p {
  margin-top: 1rem;
  color: aliceblue;
}

img {
  width: 37%;
}
.img {
  display: flex;
  justify-content: center;
}
.icons {
  display: flex;
  margin-left: 4rem;
  align-items: center;
  flex-direction: column;
  width: 25rem;
}

.projects {
  grid-area: pro;
  padding-left: 9.5rem;
  width: 25rem;
  margin-top: 2rem;
}

.projects ul {
  list-style: none;
  margin-top: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}

.projects li {
  padding: 10px 0;
  transition: all 0.3s linear;;
}

.projects li:hover{
  color: #9AA4ec;
}

.social-links {
  display: flex;
  margin-top: 10px;
}

.social-links a {
  width: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: 2px solid #9921e8;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  margin: 0 10px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
}

.social-links a .fab {
  font-size: 20px;
  line-height: 50px;
  position: relative;
  top:26%;
  z-index: 10;
  transition: color 0.5s;
}

.social-links a::after {
  content: "";
  width: 100%;
  height: 100%;
  top: -90px;
  left: 0;
  background: #000;
  background: background-color #9921e8;
  background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
  position: absolute;
  transition: 0.5s;
}

.social-links a:hover::after {
  top: 0;
}

.social-links a:hover .fab {
  color: #fff;
}

.social-links a:hover {
  transform: translateY(-10px);
}

hr {
  width: 100%;
  grid-area: hr;
  border: 1px solid #9921e8;
  height: 1px;
  margin-top: 1rem;
}

.copy {
  margin-left: 4rem;
  grid-area: copy;
  width: fit-content;
  padding: 0.7rem 0 0.7rem 0;
}

.copy p{
  color: aliceblue;
  font-size: 0.7rem;
}

@media only screen and (max-width: 768px) {
  .footer {
    overflow: hidden !important; 
    height: 11rem;
  }

  .icons {
    display: flex;
    /* background-color: burlywood; */
    flex-direction: column;
    justify-content: center;
    width: 100%;

    margin-left: 0;
    align-items: center;
  }

  img {
    width: 25%;
  }

  .about {
    display: none;
  }

  .projects {
    display: none;
  }

  hr {
    position: relative;
    top: -2rem;
  }

  .copy {
    position: absolute;
    bottom: -1rem; 
    margin-left: -19.5rem;
    font-size: 0.6rem;
  }

  .social-links {
    padding-bottom: 2rem;
    margin-top: -0.5rem;
  }
  .social-links a {
    width: 35px;
    height: 35px;
  }

  /* .social-links a .fab {
    line-height: 33px;
  } */
  .social-links a .fab {
    top:18%;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .icons {
    height: 10rem;
    width: 1024px;
    overflow-y: hidden;
  }

  img {
    width: 40%;
    margin-left: -15rem;
  }

  .social-links {
    margin-top: -0.5rem;
    margin-left: -15rem;
  }

  .social-links a .fab {
    top:18%;
  }
}

@media only screen and (max-device-height: 720px) and (min-device-width: 540px) {
  .icons {
    overflow-y: hidden;
  }
  .img {
    width: 80%;
  }
  .icons {
    height: 10rem;
  }
  .social-links {
    margin-top: -0.5rem;
  }
  .copy {
    margin-left: -25.5rem;
  }
  .social-links a .fab {
    top: 18%;
  }
}

@media screen and (max-device-width: 1366px) and (min-device-height: 1024px) {
  img{
    width: 15%;
  }
  .footer {
    height: 13rem;

    overflow: hidden;
  }
  .about {
    display: none;
  }
  .projects {
    display: none;
  }
  .copy {
    margin-left: -48rem;
  }
  hr {
    margin-top: -1rem;
  }
  .icons {
    margin-left: 9rem;
  }
  .social-links a .fab {
    top:25%;
  }
}

@media screen and (max-device-width: 768px) and (min-device-height: 1024px) {
  img{
    width: 13%;
  }
  .icons {
    margin-left: -1rem;
  }
  hr {
    margin-top: 1rem;
  }
  .copy {
    margin-left: -47.5rem;
  }
}

@media screen and (max-device-width: 280px) and (min-device-height: 653px) {
  .footer {
    height: 10rem;
  }
  .social-links {
    margin-top: 0.5rem;
  }
  .copy {
    font-size: 8px;
    margin-left: -20rem;
    left: 1.5rem;
  }
  .social-links a .fab {
    top: 18%;
  }
}

@media screen and (max-device-width: 320px) and (min-device-height: 568px) {
  .copy {
    margin-left: -17.5rem;
  }
  .copy p{
    font-size: 0.6rem;
  }
}

@media screen and (max-device-width: 411px) and (min-device-height: 823px) {
  .copy {
    margin-left: -23rem;
  }
}

@media screen and (max-device-width: 411px) and (min-device-height: 731px) {
  .copy {
    margin-left: -21.5rem;
  }
}

@media screen and (max-device-width: 414px) and (min-device-height: 736px) {
  .copy {
    margin-left: -21.5rem;
  }
  .social-links a .fab {
    top:18%;
  }
}

@media screen and (max-device-width: 375px) and (min-device-height: 812px) {
  .copy {
    margin-left: -20rem;
  }
  .social-links a .fab {
    top:18%;
  }
}

@media screen and (max-device-width: 375px) and (min-device-height: 667px) {
  .copy {
    margin-left: -20.5rem;
  }
}
`;
