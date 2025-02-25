import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalInstalacoes({ instalacao, open, handleClose, nextStep }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          O relato de falta de energia será no endereço informado abaixo:
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>CEP:</strong> {instalacao.cep}<br />
          <strong>Endereço:</strong> {instalacao.endereco}<br />
          <strong>Complemento:</strong> {instalacao.complemento}<br />
          <strong>Cidade:</strong> {instalacao.cidade} - {instalacao.estado}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          ATENÇÃO: Confirme se o endereço está correto para que nossa equipe tenha maior precisão ao se deslocar para o local informado.
        </Typography>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ width: '48%' }}
          >
            Revisar Endereço
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              nextStep();
              handleClose();  // Fechar a modal ao avançar
            }}
            sx={{ width: '48%' }}
          >
            Confirmar Endereço
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

