import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip"
import { SanityLive } from "@/sanity/lib/live";

type Props = {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <ClerkProvider>
      <main>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <SanityLive />
      </main>
    </ClerkProvider>
  )
}

export default Layout
