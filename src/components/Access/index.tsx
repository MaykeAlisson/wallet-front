import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Media from '../../utils/mediaBreackPoint';
import fundo from '../../../public/fundo.webp';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const acoes = {
  1: 'LOGIN',
  2: 'CADASTRO',
};

const Access = ({ onAcessSuccess }) => {
  const [acao, setAcao] = useState(acoes['1']);

  useEffect(() => {}, [acao]);

  return (
    <Container>
      <SessionAcesso>
        <Typography
          variant="h4"
          style={{
            fontFamily: 'cursive',
            textAlign: 'center',
          }}
          gutterBottom
          component="div"
          color={'secundary'}
        >
          Regra nº1 nunca perca dinheiro.
          <br />
          Regra nº2 nunca esqueça a regra nº1
        </Typography>
        {acao === 'LOGIN' ? (
          <Login
            trocarAcao={() => setAcao(acoes['2'])}
            onAcessSuccess={onAcessSuccess}
          />
        ) : (
          <Cadastro
            trocarAcao={() => setAcao(acoes['1'])}
            onAcessSuccess={onAcessSuccess}
          />
        )}
      </SessionAcesso>
    </Container>
  );
};

Access.propTypes = {
  onAcessSuccess: PropTypes.func,
};

Access.defaultProps = {
  onAcessSuccess: () => {},
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-image: url(${fundo.src});
  background-position: center; //centraliza imagem
  background-size: cover; //imagem cobre toda área do div
  opacity: 0.75;
`;

const SessionAcesso = styled.section`
  order: 1;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Access;
