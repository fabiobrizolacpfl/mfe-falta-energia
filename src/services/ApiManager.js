class ApiManager {

    constructor() {
        this.baseUrl = "http://localhost:3333/api";
    }

    async buscarEstados(apenasAreaConcessao = true) {
        const endpoint = `/logradouro/uf?apenasAreaConcessao=${apenasAreaConcessao ? "true" : "false"}`;
        return await this.doRequest(endpoint);
    }

    async buscarMunicipios(uf, apenasAreaConcessao = true) {
        const endpoint = `/logradouro/uf/${uf}/municipios?apenasAreaConcessao=${apenasAreaConcessao ? "true" : "false"}`;
        return await this.doRequest(endpoint);
    }

    async buscarEnderecoCep(cep, salvarCepNaoEncontrado = false) {
        let endpoint = `/logradouro/endereco/${cep}`;

        if(salvarCepNaoEncontrado){
            endpoint += "?salvarCepNaoEncontrado=true"
        }
        return await this.doRequest(endpoint);
    }

    async buscarInstalacaoPorCodigo(numInstalacao, isReligacao = false) {
        let endpoint = `/falta-energia/api/v1/Instalacao/codigo/${numInstalacao}?religacao=`;
        endpoint += isReligacao ? "true" : "false"
        return await this.doRequest(endpoint);
    }

    async buscarInstalacaoPorNumeroMedidor(numMedidor, isReligacao = false) {
        let endpoint = `/falta-energia/api/v1/Instalacao/medidor/${numMedidor}?religacao=`;
        endpoint += isReligacao ? "true" : "false"
        return await this.doRequest(endpoint);
    }

    async buscarInstalacaoPorEndereco(codigoMunicipio, codigoLogradouro, codigoBairro, codigoSegmento, numero, tipoComplementoId, complemento, page, religacao = false, status = "") {
        let endpoint = `/falta-energia/api/v1/Instalacao/endereco/${codigoMunicipio}/${codigoLogradouro}/${codigoBairro}/${codigoSegmento}`;

        let params = [];

        if (numero) {
            params.push(`numero=${numero}`);
        }

        if (tipoComplementoId) {
            params.push(`tipoComplementoId=${tipoComplementoId}`);
        }

        if (complemento) {
            params.push(`complemento=${complemento}`);
        }

        if (status) {
            params.push(`status=${status}`);
        }

        params.push(`religacao=${religacao ? "true" : "false"}`);
        params.push(`pagina=${page}`);

        if (params.length > 0) {
            endpoint += '?' + params.join('&');
        }

        return await this.doRequest(endpoint);
    }


    async doRequest(endpoint = "", method = "GET", body = null) {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

const apiManager = new ApiManager();
export default apiManager;
