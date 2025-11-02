import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Product Designer",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "AJ",
    status: "active",
    tasksCompleted: 24,
  },
  {
    name: "Bob Smith",
    role: "Frontend Developer",
    email: "bob@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "BS",
    status: "active",
    tasksCompleted: 18,
  },
  {
    name: "Charlie Brown",
    role: "Backend Developer",
    email: "charlie@example.com",
    phone: "+1 (555) 345-6789",
    avatar: "CB",
    status: "away",
    tasksCompleted: 31,
  },
  {
    name: "Diana Prince",
    role: "DevOps Engineer",
    email: "diana@example.com",
    phone: "+1 (555) 456-7890",
    avatar: "DP",
    status: "active",
    tasksCompleted: 15,
  },
  {
    name: "Eve Martinez",
    role: "UI Developer",
    email: "eve@example.com",
    phone: "+1 (555) 567-8901",
    avatar: "EM",
    status: "active",
    tasksCompleted: 22,
  },
  {
    name: "Frank Wilson",
    role: "QA Engineer",
    email: "frank@example.com",
    phone: "+1 (555) 678-9012",
    avatar: "FW",
    status: "active",
    tasksCompleted: 19,
  },
];

const Team = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Team</h1>
        <p className="text-muted-foreground mt-1">
          Manage your team members and their roles
        </p>
      </div>

      {/* Team stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{teamMembers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {teamMembers.filter(m => m.status === "active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Tasks Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {teamMembers.reduce((acc, m) => acc + m.tasksCompleted, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team members grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.email} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">{member.avatar}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </div>
                <Badge variant={member.status === "active" ? "default" : "secondary"}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
              <div className="pt-3 border-t flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tasks Completed</span>
                <span className="text-lg font-bold text-primary">{member.tasksCompleted}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
