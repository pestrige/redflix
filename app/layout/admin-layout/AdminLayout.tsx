import { FC, PropsWithChildren } from 'react';

import AdminHeader from '@app/layout/admin-layout/admin-header/AdminHeader';
import ScreenLayout from '@app/layout/screen-layout/ScreenLayout';

interface AdminLayoutProps {
	title: string;
	isBackButton?: boolean;
}

const AdminLayout: FC<PropsWithChildren<AdminLayoutProps>> = ({
	title,
	isBackButton,
	children
}) => {
	return (
		<ScreenLayout>
			<AdminHeader title={title} isBackButton={isBackButton} />
			{children}
		</ScreenLayout>
	);
};

export default AdminLayout;
