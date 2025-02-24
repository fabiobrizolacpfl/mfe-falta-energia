import React, { useState } from "react";
import { Box, Typography, FormControl } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const options = [
  { id: "objetos-rede", label: "Objetos na rede", tooltip: "Objeto estranho na rede..." },
  { id: "poste-caido", label: "Poste caído", tooltip: "Poste caído na área." },
  { id: "fio-partido", label: "Fio partido", tooltip: "Fios partidos na rua." },
  { id: "faiscamento", label: "Faiscamento", tooltip: "Faíscas visíveis na rede elétrica." },
  { id: "risco-morte", label: "Risco de morte", tooltip: "Risco de vida devido a falha elétrica." },
  { id: "outros", label: "Outros", tooltip: "Outro tipo de problema não listado." }
];

export default function SeletorProblema() {
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Mensagens de warning
  const warningMessages = {
    "poste-caido": 'Você escolheu a opção <strong>"Poste Caído"</strong>, esta é uma situação emergencial. Certifique-se que você escolheu</br> a opção correta, e para sua segurança <strong>afaste-se da rede elétrica</strong>!',
    "fio-partido": `
      Você escolheu a opção <strong>"Fio Partido"</strong>, esta é uma situação emergencial. 
      Certifique-se que você escolheu a opção correta, e para sua segurança afaste-se da rede elétrica!
      <ul>
        <li><strong>Mantenha</strong> distância da situação e <strong>aguarde</strong> a equipe da CPFL/RGE chegar no local para prestar o atendimento.</li>
        <li>As pessoas que estiverem fora do veículo não devem socorrer ou retirar o fio de cima. <strong>Mantenha</strong> distância da situação, pois o solo pode estar energizado.</li>
      </ul>
    `,    "risco-morte": 'Você escolheu a opção <strong>"Risco de Morte"</strong>, esta é uma situação emergencial.</br> Certifique-se que você escolheu a opção correta, e para sua segurança <strong>afaste-se da rede elétrica!</strong> Caso exista dependência de pessoas com uso de aparelho para sobreviver no local: <strong>Acione imediatamente a emergência médica de sua cidade</strong> ou <strong>desloque a pessoa para um hospital!</strong>'
  };

  return (
    <div className="options-container">
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className={`custom-label ${selected === option.id ? "selected" : ""}`}
          onClick={() => setSelected(option.id)}
        >
          {option.label}
        </label>
      ))}

      {/* Exibe o warning apenas se a opção selecionada for uma das que você deseja */}
      {selected && (selected === "poste-caido" || selected === "fio-partido" || selected === "risco-morte") && (
        <Box className="falta-energia-seletor-warning">
          <FormControl component="fieldset" className="radio-container">
            <Box className="radio-container-filho">
              <WarningAmberIcon sx={{ width: 40, height: 50, marginRight:2}} />
              <Typography
                dangerouslySetInnerHTML={{ __html: warningMessages[selected] }}
              />
            </Box>
          </FormControl>
        </Box>
      )}
    </div>
  );
}
