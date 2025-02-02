export default function Profile() {
    return <div className="p-4">
        <div className="flex-col  flex justify-center items-center">
            <div className="flex-shrink-0">
                <a href="#" className="relative block">
                    <img alt="profil" src="/image.png" className="mx-auto object-cover rounded-full h-20 w-20 " />
                </a>
            </div>
            <div className="mt-2 text-center flex flex-col">
                <span className="text-lg font-medium text-gray-600 dark:text-white">
                    Hean Hiut
                </span>
                <span className="text-xs text-gray-400">
                    Designer
                </span>
            </div>
        </div>
    </div>;
}