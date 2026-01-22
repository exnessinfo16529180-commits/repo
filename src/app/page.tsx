export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center p-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Digital TAU
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Educational Project Starter
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to Digital TAU starter project!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Built with Next.js, TypeScript, Prisma, and PostgreSQL
          </p>
        </div>
      </main>
    </div>
  );
}
