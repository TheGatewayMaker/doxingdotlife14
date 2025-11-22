export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-2">Doxing Dot Life</h3>
            <p className="text-sm text-muted-foreground">
              A secure database for doxing information sharing
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>By Country</li>
              <li>By City</li>
              <li>By Server</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Advanced Search</li>
              <li>Comprehensive Database</li>
              <li>Regular Updates</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Doxing Dot Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
