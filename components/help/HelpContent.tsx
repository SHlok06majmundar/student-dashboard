'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function HelpContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the query submission logic (e.g., sending to API)
    console.log('Query submitted:', query);
    setQuery(''); // Clear the input after submission
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Help &amp; Support</h2>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4 bg-gray-50 text-gray-900 hover:bg-gray-100">Ask for Help</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit a Query</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleQuerySubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="query">Your Query</Label>
                <Input
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
