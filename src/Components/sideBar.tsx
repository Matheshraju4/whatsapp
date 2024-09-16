import { useState } from "react";

import { Home, Settings, HelpCircle, Menu, User, LogOut } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  BarChart2,
  MessageSquare,
  ShoppingCart,
  Printer,
  Package,
  Truck,
  Archive,
  PieChart,
  MessageCircle,
  CreditCard,
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      icon: <BarChart2 className="w-4 h-4 mr-2" />,
      href: "/dashboard",
    },
    {
      name: "Chat",
      icon: <MessageCircle className="w-4 h-4 mr-2" />,
      href: "/chat",
    },
    {
      name: "Orders",
      icon: <ShoppingCart className="w-4 h-4 mr-2" />,
      href: "/orders",
    },
    {
      name: "Printing",
      icon: <Printer className="w-4 h-4 mr-2" />,
      href: "/printing",
    },
    {
      name: "Packing",
      icon: <Package className="w-4 h-4 mr-2" />,
      href: "/packing",
    },
    {
      name: "Tracking",
      icon: <Truck className="w-4 h-4 mr-2" />,
      href: "/tracking",
    },
    {
      name: "Holding",
      icon: <Archive className="w-4 h-4 mr-2" />,
      href: "/holding",
    },
    {
      name: "Analytics",
      icon: <PieChart className="w-4 h-4 mr-2" />,
      href: "/analytics",
    },
    {
      name: "Flows",
      icon: <MessageSquare className="w-4 h-4 mr-2" />,
      href: "/flows",
    },
    {
      name: "Payments",
      icon: <CreditCard className="w-4 h-4 mr-2" />,
      href: "/payments",
    },
    {
      name: "Settings",
      icon: <Settings className="w-4 h-4 mr-2" />,
      href: "/settings",
    },
    {
      name: "Help",
      icon: <HelpCircle className="w-4 h-4 mr-2" />,
      href: "/help",
    },
  ];
  const [open, setOpen] = useState(false);

  const SidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold">My App</h2>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-2 p-2">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start pl-3 gap-3"
              >
                {item.icon}
                {item.name}
              </Button>
            </a>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 mt-auto">
        <div className="flex items-center space-x-4 mb-2">
          <User className="w-10 h-10 rounded-full bg-muted p-2" />
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <LogOut className="w-4 h-4 mr-2" />
          Log out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex">
      {/* Desktop sidebar */}
      <aside className="w-52 hidden md:block border-r">{SidebarContent}</aside>

      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-40"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          {SidebarContent}
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <p>This is the main content area. Your page content goes here.</p>
      </main>
    </div>
  );
}
