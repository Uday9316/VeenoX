"use client";
import { ContextTradeInfo, MobileActiveSectionType } from "@/models";
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface GeneralContextProps {
  showMobileTradeCreator: boolean;
  setShowMobileTradeCreator: Dispatch<SetStateAction<boolean>>;
  tradeInfo: ContextTradeInfo;
  setTradeInfo: Dispatch<SetStateAction<ContextTradeInfo>>;
  mobileActiveSection: MobileActiveSectionType;
  setMobileActiveSection: Dispatch<SetStateAction<MobileActiveSectionType>>;
}

const INITIAL_TRADE_INFO = {
  type: "Market",
  side: "Buy",
  size: 100, // Percentage
  price: 0,
  reduce_only: false,
  tp_sl: false,
  tp: 0,
  sl: 0,
  leverage: 1,
};

export const GeneralContext = React.createContext({} as GeneralContextProps);

export const useGeneralContext = () => useContext(GeneralContext);

export const GeneralProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showMobileTradeCreator, setShowMobileTradeCreator] = useState(false);
  const [tradeInfo, setTradeInfo] = useState(INITIAL_TRADE_INFO);
  const [mobileActiveSection, setMobileActiveSection] = useState(null);
  const value = useMemo(
    () => ({
      showMobileTradeCreator,
      setShowMobileTradeCreator,
      tradeInfo,
      setTradeInfo,
      mobileActiveSection,
      setMobileActiveSection,
    }),
    [showMobileTradeCreator, tradeInfo, mobileActiveSection]
  );

  return (
    <GeneralContext.Provider value={value as any}>
      {children}
    </GeneralContext.Provider>
  );
};
