export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Digital TAU. Educational Project.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Built with Next.js, TypeScript, Prisma, and PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
}
