import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip"
import { SanityLive } from "@/sanity/lib/live";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";

type Props = {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <main>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <SanityLive />
        </main>
      </CartStoreProvider>
    </ClerkProvider>
  )
}

export default Layout
