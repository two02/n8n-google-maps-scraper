import type { ICredentialType, INodeProperties, Icon, ICredentialTestRequest } from 'n8n-workflow';

export class GeoScraperApi implements ICredentialType {
	name = 'geoScraperApi';
	displayName = 'GeoScraper API';
	icon = 'file:GeoScraperGoogleMap.svg' as Icon;
	documentationUrl = 'https://docs.geoscraper.net/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
			placeholder: 'Your GeoScraper API token',
			required: true,
			noDataExpression: true,
			typeOptions: {
				password: true,
			},
		},
	];

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'http://api.geoscraper.net/test-api-key',
			headers: {
				'X-Berserker-Token': '={{$credentials.apiToken}}',
				'Authorization': 'Bearer {{$credentials.apiToken}}',
			},
		},
	};
}
