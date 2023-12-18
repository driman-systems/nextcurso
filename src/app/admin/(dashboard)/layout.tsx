import Logo from "@/components/admin/dashboard/logo";
import NewPageButton from "@/components/admin/dashboard/new-page-button";


async function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">

            <header className="flex flex-col min-w-full border dark:bg-background">
                <nav className="flex items-center justify-between p-4 border">

                    <div className="flex items-center justify-center space-x-2">
                        <Logo />
                        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-300">
                            HOTSell
                        </span>
                    </div>

                    <div className="hidden md:flex items-center justify-center space-x-8">
                        <NewPageButton />
                    </div>
                </nav>
            </header>

            <main className="flex flex-grow w-full">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;
