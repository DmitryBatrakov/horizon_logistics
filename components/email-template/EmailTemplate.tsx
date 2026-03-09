import { EmailPayload } from "@/feature/email/model";

export function EmailTemplate({
    firstName,
    lastName,
    phone,
    serviceType,
    message,
    email,
    locale,
}: EmailPayload) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">New request from website</h1>
                <p className="text-gray-500">
                    Name: {firstName} {lastName}
                </p>
                <p className="text-gray-500">Phone: {phone}</p>
                <p className="text-gray-500">Service Type: {serviceType}</p>
                <p className="text-gray-500">Message: {message}</p>
                <p className="text-gray-500">Email: {email}</p>
            </div>
        </div>
    );
}
