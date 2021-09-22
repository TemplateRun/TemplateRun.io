import styled from "styled-components";
export const AboutWrapper = styled.div`
padding: 5rem 1rem 5rem 10rem;
h2{
    text-align: center;
}
.column {
    float: left;
    width: 50%;
  }
 .subs{
     width:30%;
     padding: 0 3rem 0 3rem;
     text-align: center;
 } 
  .about{
    width: 40%;
    text-align: left;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 1155px) {
    padding: 5rem 0rem 5rem 5rem;
    .subs{
        padding: 0 1rem 0 1rem;
        text-align: left;
    } 
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem 5rem 1rem;
    .column {
      width: 100%;
      text-align: center;
    }
  }
`;