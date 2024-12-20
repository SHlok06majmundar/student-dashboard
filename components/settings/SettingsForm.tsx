import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SettingsForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="your.email@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Password</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="current-password">Current Password</Label>
          <Input type="password" id="current-password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="new-password">New Password</Label>
          <Input type="password" id="new-password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input type="password" id="confirm-password" />
        </div>
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  )
}

