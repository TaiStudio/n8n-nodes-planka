import {
    Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties
} from 'n8n-workflow';

export class PlankaApi implements ICredentialType {
    name = 'plankaApi';
    displayName = 'Planka API';
    documentationUrl = '';
    icon: Icon = "file:../nodes/Planka/planka.png";
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
    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials?.apiUrl}}',
            url: '/api/config',
        },
    };
}