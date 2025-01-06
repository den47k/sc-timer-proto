import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AuthenticatedLayoutProto from '@/Layouts/AuthenticatedLayoutProto';
import { Head } from '@inertiajs/react';

export default function Dashboard({ profilePhotoUrl }) {
    return (
        <AuthenticatedLayoutProto
            profilePhotoUrl={profilePhotoUrl}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
          <Head title="Dashboard" />
        </AuthenticatedLayoutProto>
    );
}
