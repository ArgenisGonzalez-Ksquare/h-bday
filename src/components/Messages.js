import React from 'react';
import styled from 'styled-components';

const Messages = () => {
  return (
    <MessagesContainer>
      <Message>Te AMO mucho,espero aprender a amarte cada día más</Message>
      <Message>Gracias por ser mi compañera de vida</Message>
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #fff5f7;
  color: #d35575;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1rem;
`;

export default Messages;
