import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip"

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
      </main>
    </ClerkProvider>
  )
}

export default Layout
