import styled from '@emotion/styled';
import React from 'react';

export const Description = styled.div`
  font-size:14px;
`

const About = () => {
  return (
    <div>
      <h1 style={{
        marginTop: '2rem'
      }}>How M.I Works</h1>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit laboriosam amet rem nemo cum maxime, minus dolore distinctio voluptatum quis facilis quae, architecto dignissimos natus voluptas odio optio magni quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate eaque impedit, delectus fuga adipisci iusto, illum pariatur nemo quaerat doloribus ipsa quasi nostrum, laboriosam assumenda sint voluptatem ullam asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati iure minus optio blanditiis sapiente fugit non magnam quis, reiciendis dicta nostrum quia sit, deleniti perferendis quaerat. Asperiores, pariatur ducimus!</Description>
    </div>
  );
};

export default About;