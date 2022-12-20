import { getUser } from '$api';

export const load = async ({
	depends
}: {
	depends: (key: string) => void;
}) => {
	depends('user');

	return {
		user: getUser()
	};
};
