"use client";
import { OrderlyAppProvider } from "@orderly.network/react";
import { FC, PropsWithChildren } from "react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OrderlyAppProvider
      networkId="mainnet"
      brokerId="orderly"
      brokerName="woofi_pro"
      theme={"dark"}
      shareOptions={{} as any}
    >
      {children}
    </OrderlyAppProvider>
  );
};
