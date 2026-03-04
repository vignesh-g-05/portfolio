import { Button } from "./components/ui/shadcn/button";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen space-y-10 p-10">
      <h1 className="font-heading text-3xl font-semibold">Theme Preview</h1>

      {/* Core Surface */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Surfaces</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-card text-card-foreground border-border rounded-lg border p-6">
            Card Surface
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-lg p-6">
            Secondary Surface
          </div>

          <div className="bg-muted text-muted-foreground rounded-lg p-6">
            Muted Surface
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-primary-foreground rounded-lg px-6 py-2">
            Primary
          </button>

          <button className="bg-accent text-accent-foreground rounded-lg px-6 py-2">
            Accent
          </button>

          <button className="bg-destructive rounded-lg px-6 py-2 text-white">
            Destructive
          </button>

          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">destructive</Button>
        </div>
      </section>

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Input & Border</h2>

        <input
          className="bg-input border-border focus:ring-ring rounded-lg border px-4 py-2 outline-none focus:ring-2"
          placeholder="Focus me"
        />
      </section>

      {/* Sidebar */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Sidebar</h2>

        <div className="bg-sidebar text-sidebar-foreground border-sidebar-border space-y-3 rounded-lg border p-6">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground rounded px-4 py-2">
            Sidebar Primary
          </div>
          <div className="bg-sidebar-accent text-sidebar-accent-foreground rounded px-4 py-2">
            Sidebar Accent
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Chart Colors</h2>

        <div className="flex gap-4">
          <div className="bg-chart-1 h-12 w-12 rounded" />
          <div className="bg-chart-2 h-12 w-12 rounded" />
          <div className="bg-chart-3 h-12 w-12 rounded" />
          <div className="bg-chart-4 h-12 w-12 rounded" />
          <div className="bg-chart-5 h-12 w-12 rounded" />
        </div>
      </section>
    </div>
  );
}
