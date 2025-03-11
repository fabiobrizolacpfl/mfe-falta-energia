import Box from "@mui/material/Box";
import {Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Select} from "@mui/material";
import CustomButton from "../../../../../components/customButton/CustomButton";
import * as React from "react";
import {useEffect, useState} from "react";
import CustomTextField from "../../../../../components/customTextField/CustomTextField";
import apiManager from "../../../../../services/ApiManager";

const PesquisaInstalacaoByEndereco = ({setIstalacoes}) => {

    const [requestParams, setRequestParams] = useState({
        codigoMunicipio: '',
        codigoLogradouro: '',
        codigoBairro: '',
        codigoSegmento: '',
        numero: '',
        tipoComplemento: '',
        complemento: '',
        page: 1,
        religacao: false,
        statusInstalacao: ''
    });

    const formInitialState = {
        cep: "",
        estado: "",
        cidade: "",
        endereco: "",
        numero: "",
        checkBoxNumEndereco: false
    }

    const [formData, setFormData] = useState(formInitialState);

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [enderecos, setEnderecos] = useState([]);

    const [pesquisarPor, serPesquisarPor] = useState('Pesquisar pelo CEP');

    const isPesquisaPorCEP = pesquisarPor === "Pesquisar pelo CEP";

    useEffect(() => {
        const fetchEstados = async () => {
            const data = await apiManager.buscarEstados();
            setEstados(data?.ufs);
        };
        fetchEstados();
    }, []);

    useEffect(() => {
        if (formData.estado) {
            const fetchMunicipios = async () => {
                const data = await apiManager.buscarMunicipios(formData.estado);
                setCidades(data?.municipios);
            };
            fetchMunicipios();
        }
    }, [formData.estado]);

    const handleChangeCheckBoxNumEndereco = (event) => {
        const newChecked = event.target.checked;
        setFormData({
            ...formData,
            numero: newChecked ? '' : formData.numero,
            checkBoxNumEndereco: newChecked
        });
    };

    const handleButtonFieldText = () => {
        serPesquisarPor(isPesquisaPorCEP ? "Não sei meu CEP" : "Pesquisar pelo CEP");
        setFormData(formInitialState);
    };

    const buscaEnderecoPorCEP = async (event) => {

        const cep = event.target.value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            cep: cep
        }));

        if (cep.length !== 9) return;

        const data = await apiManager.buscarEnderecoCep(cep, true);

        const enderecos = data?.enderecos;

        if (enderecos && enderecos.length > 1) {
            // TODO: Implementar a validação para quando múltiplos endereços forem encontrados.
            // No acquia a comparação entre o endereço e suas opções é feita da seguinte forma:
            // if ($search_endereco[0] == $endereco->codigoLogradouro && $search_endereco[1] == $endereco->codigoBairro)
            // Verificar como aplicar essa lógica, utilizando o campo 'endereco' e suas opções de maneira apropriada.

        } else {

            //CEP CONTEM APÉNAS UM ENDEREÇO

            const endereco = enderecos[0];

            setRequestParams({
                ...requestParams,
                codigoMunicipio: endereco.codigoMunicipio,
                codigoLogradouro: endereco.codigoLogradouro,
                codigoBairro: endereco.codigoBairro,
                codigoSegmento: endereco.codigoSegmento
            });

            setFormData((prevFormData) => ({
                ...prevFormData,
                estado: endereco.uf,
                cidade: endereco.codigoMunicipio,
                endereco: endereco.logradouro
            }));
        }
    };

    const buscarInstalacaoPorEndereco = async () => {

        const data = await apiManager.buscarInstalacaoPorEndereco(
            requestParams.codigoMunicipio,
            requestParams.codigoLogradouro,
            requestParams.codigoBairro,
            requestParams.codigoSegmento,
            formData.checkBoxNumEndereco ? null : requestParams.numero,
            requestParams.tipoComplemento,
            requestParams.complemento,
            "1",
            requestParams.religacao,
            requestParams.statusInstalacao
        );

        setIstalacoes(data?.instalacoes);
    }

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" sx={{mb: 2}}>
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
                        <Select
                            onChange={(e) => setFormData({...formData, estado: e.target.value})}
                            value={formData.estado}
                            disabled={estados?.length <= 0 || isPesquisaPorCEP}
                        >
                            {estados?.map((estado) => (
                                <MenuItem key={estado.codigo} value={estado.codigo}>
                                    {estado.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item md={6}>
                    <FormControl className="custom-field" fullWidth>
                        <div>Cidade</div>
                        <Select
                            value={formData.cidade}
                            disabled={cidades?.length <= 0 || !formData.estado || isPesquisaPorCEP}
                            onChange={(e) => setFormData({...formData, cidade: e.target.value})}
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
                onChange={(e) => setFormData({...formData, endereco: e.target.value})}
                value={formData.endereco}
                disabled={!formData.cidade || isPesquisaPorCEP}
            />

            <Grid container spacing={4}>
                <Grid item md={8}>
                    <div>Número do Endereço</div>
                    <CustomTextField
                        id="id-check-box-numero-endereco"
                        disabled={formData.checkBoxNumEndereco}
                        type="number"
                        fullWidth
                        value={formData.numero}
                        onChange={(e) => setFormData({...formData, numero: e.target.value})}
                    />
                </Grid>
                <Grid item md={4} mt={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.checkBoxNumEndereco}
                                onChange={handleChangeCheckBoxNumEndereco}
                            />
                        }
                        label="Sem número"
                    />
                </Grid>
            </Grid>

            <Box display="flex" justifyContent="flex-end" sx={{mt: 3}}>
                <CustomButton label="Buscar" onClick={buscarInstalacaoPorEndereco}/>
            </Box>
        </Box>
    );
}

export default PesquisaInstalacaoByEndereco;
