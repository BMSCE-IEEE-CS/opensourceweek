import { ProvidersClient } from "@/components/ProviderClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProvidersClient>{children}</ProvidersClient>;
}
