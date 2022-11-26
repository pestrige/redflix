import { requestApi } from '@app/services/api/request.api';

import { getUsersUrl } from '@app/config';

export const AdminService = {
	async getUsersCount() {
		return requestApi<number>({
			url: getUsersUrl('/count'),
			method: 'GET'
		});
	}
};
