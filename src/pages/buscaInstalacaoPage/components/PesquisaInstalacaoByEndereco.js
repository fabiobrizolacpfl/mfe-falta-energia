import Box from "@mui/material/Box";
import {Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";
import * as React from "react";
import {useEffect, useState} from "react";
import CustomTextField from "../../../components/customTextField/CustomTextField";

const PesquisaInstalacaoByEndereco = ({setIstalacoes}) =>{

    const formDataJson = {
        cep: "",
        estado: "",
        cidade: "",
        endereco: "",
        numero: ""
    }

    const [formData, setFormData] = useState(formDataJson);

    //region mock
    const response_estados = [
        {"MG": "MINAS GERAIS"},
        {"PR": "PARANA"},
        {"RS": "RIO GRANDE DO SUL"},
        {"SP": "SAO PAULO"}
    ];

    const response_cidades = [
        {"codigo": 3104106, "nome": "ARCEBURGO", "nomeAbreviado": "ARCEBURGO", "uf": "MG"},
        {"codigo": 3132909, "nome": "ITAMOGI", "nomeAbreviado": "ITAMOGI", "uf": "MG"},
        {"codigo": 3143203, "nome": "MONTE SANTO DE MINAS", "nomeAbreviado": "MONTE S D MINAS", "uf": "MG"}
    ];
    //endregion

    useEffect(() => {
        setEstados(response_estados)
    }, []);

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [pesquisarPor, serPesquisarPor] = useState('Pesquisar pelo CEP');
    const [checkBoxNumEndereco, setCheckBoxNumEndereco] = useState(false);

    const isPesquisaPorCEP = pesquisarPor === "Pesquisar pelo CEP";

    const handleChangeCheckBoxNumEndereco = (event) => {
        const newChecked = event.target.checked;

        if(newChecked){
            document.getElementById('id-check-box-numero-endereco').value = null;
        }
        setCheckBoxNumEndereco(newChecked);
    };

    const buscaInstalacoes = () => {
        setIstalacoes([]);
    }

    const handleButtonFieldText = () =>{
        setFormData(formDataJson)
        serPesquisarPor(isPesquisaPorCEP ? "Não sei meu CEP" : "Pesquisar pelo CEP");
    }

    const buscaCidadesDoEstado = (event) =>{
        const estadoSelecionado = event.target.value;
        setFormData({...formData, estado: estadoSelecionado})
        //TODO BUSCA CIDADES DO ESTADO
        //axios.get(urlBase + estadoSelecionado)
        setCidades(response_cidades);
    }

    const buscaEndereco = (event) =>{
        const cidadeSelecionada = event.target.value;
        setFormData({...formData, cidade: cidadeSelecionada})
    }


    const buscaEnderecoPorCEP = (event) => {
        const cep = event.target.value;
        setFormData({...formData, cep: cep})
        // const cep = event.target.value;
        // const endereco = buscarEnderecoCep(cep, TRUE);
        // setFormData({
        //     ...formData,
        //     estado: endereco.uf,
        //     cidade: endereco.codigoMunicipio
        // })
    }

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
                <div>CEP</div>
                <a href="#" onClick={handleButtonFieldText}>{pesquisarPor}</a>
            </Box>
            <CustomTextField
                fullWidth
                placeholder="_____-___"
                onChange={buscaEnderecoPorCEP}
                value={formData.cep}
                disabled={!isPesquisaPorCEP}
                inputProps={{maxlength: 9}}
            />

            <Grid container spacing={4}>
                <Grid item md={6}>
                    <FormControl className="custom-field" fullWidth>
                        <div>Estado</div>
                        <Select onChange={buscaCidadesDoEstado} value={formData.estado} disabled={estados?.length <= 0 || isPesquisaPorCEP}>
                            {estados?.map((estado) => {
                                const chave = Object.keys(estado)[0];
                                const valor = estado[chave];
                                return (
                                    <MenuItem key={chave} value={chave}>
                                        {valor}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item md={6}>
                    <FormControl className="custom-field" fullWidth>
                        <div>Cidade</div>
                        <Select
                            value={formData.cidade}
                            disabled={cidades?.length <= 0}
                            onChange={buscaEndereco}
                        >
                            {cidades?.map((cidade) => (
                                <MenuItem key={cidade.codigo} value={cidade.codigo}>
                                    {cidade.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box mt={2}>Endereço</Box>
            <CustomTextField
                type="select"
                fullWidth
                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                value={formData.endereco}
                disabled={!formData.cidade}
            />

            <Grid container spacing={4}>
                <Grid item md={8}>
                    <div>Número do Endereço</div>
                    <CustomTextField
                        id="id-check-box-numero-endereco"
                        disabled={checkBoxNumEndereco || isPesquisaPorCEP}
                        type="number"
                        fullWidth
                        value={formData.numero}
                        onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                    />
                </Grid>
                <Grid item md={4} mt={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkBoxNumEndereco}
                                onChange={handleChangeCheckBoxNumEndereco}
                            />
                        }
                        label="Sem número"
                    />
                </Grid>
            </Grid>

            <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
                <CustomButton label="Buscar"/>
            </Box>
        </Box>
    );
}

export default PesquisaInstalacaoByEndereco;