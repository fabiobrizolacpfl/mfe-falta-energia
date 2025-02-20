class ApiManager {

    // constructor() {
    //     this.baseURL = process.env.bff_base_url;
    //     this.ocp_subscription_key = process.env.ocp_subscription_key;
    // }
    //
    // async request(endpoint, method = 'GET', body = null) {
    //
    //     const headers = {
    //         'Ocp-Apim-Subscription-Key': this.ocp_subscription_key,
    //         "api-version": "1.0.0"
    //     };
    //
    //     const options = {
    //         method,
    //         headers
    //     };
    //
    //     if (body) {
    //         options.body = JSON.stringify(body);
    //     }
    //
    //     try {
    //         const response = await fetch(`${this.baseURL}${endpoint}`, options);
    //         if (!response.ok) {
    //             throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         console.error('Erro na requisição:', error);
    //         throw error;
    //     }
    // }
}