import {
    Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from 'n8n-workflow';

export class PlankaApi implements ICredentialType {
    name = 'plankaApi';
    displayName = 'Planka API';
    documentationUrl = 'https://docs.planka.cloud/docs/category/api-reference/';
    icon: Icon = "file:../nodes/Planka/planka.svg";
    properties: INodeProperties[] = [
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
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
            description: 'Your Planka API key',
        },
    ];
    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials?.apiUrl}}',
            url: '/api/config',
            headers: {
                'X-Api-Key': '={{$credentials?.apiKey}}',
            },
        },
    };
}