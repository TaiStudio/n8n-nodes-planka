"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlankaApi = void 0;
class PlankaApi {
    constructor() {
        this.name = 'plankaApi';
        this.displayName = 'Planka API';
        this.documentationUrl = '';
        this.properties = [
            {
                displayName: 'API URL',
                name: 'apiUrl',
                type: 'string',
                default: '',
                placeholder: 'https://your-planka-instance.com',
                required: true,
                description: 'The URL of your Planka instance API',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                required: true,
                description: 'Your Planka account email',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                required: true,
                description: 'Your Planka account password',
            },
        ];
    }
}
exports.PlankaApi = PlankaApi;
//# sourceMappingURL=PlankaApi.credentials.js.map