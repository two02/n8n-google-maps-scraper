import type { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

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
}
