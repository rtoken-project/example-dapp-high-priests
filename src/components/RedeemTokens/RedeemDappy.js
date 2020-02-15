import React from "react"
import styled from "styled-components"

import InitialVisual from "../VisualComponents/InitialVisual"
import InstallWalletVisual from "../VisualComponents/InstallWalletVisual"
import UnlockWalletVisual from "../VisualComponents/UnlockWalletVisual"
import ChangeNetworkVisual from "../VisualComponents/ChangeNetworkVisual"
import LoadWalletVisual from "../VisualComponents/LoadWalletVisual"
import TxAbortedVisual from "../VisualComponents/TxAbortedVisual"
import TxConfirmVisual from "../VisualComponents/TxConfirmVisual"
import TxErrorVisual from "../VisualComponents/TxErrorVisual"
import TxPendingBasicVisual from "../VisualComponents/TxPendingBasicVisual"
import SuccessVisual from "../VisualComponents/SuccessVisual"

import Wizard from "../Dappi/DappFlow/Wizard"
import "../fonts.css"

const Container = styled.div`
  width: 420px;
  margin: 40px auto 0;

  @media (max-width: 960px) {
    width: 96%;
  }
`

const redeemSteps = {
  initial: {
    category: "info",
    type: "basic",
    visualComponents: {
      initial: {
        visual: InitialVisual,
        props: {
          type: "redeem",
          name: "Stop",
          growthRate: "Get back your DAI",
          backgroundColor: "#FF5964",
          primaryColor: "white",
          buttonText: "rgb(127, 15, 23)",
          buttonColor:
            "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 174, 179) 100%)",
          boxShadow: "rgba(165, 41, 49, 0.5) 0px 17px 20px -5px",
          emoji: "🛑",
        },
      },
    },
    commonVisualProps: {
      size: "small",
    },
  },
  unlockWallet: {
    category: "web3",
    type: "unlock-wallet",
    visualComponents: {
      unlock: {
        visual: UnlockWalletVisual,
        props: {},
      },
      install: {
        visual: InstallWalletVisual,
        props: {},
      },
      network: {
        visual: ChangeNetworkVisual,
        props: {},
      },
      error: {
        visual: TxErrorVisual,
        props: {},
      },
    },
    commonVisualProps: {
      size: "small",
    },
  },
  loadWallet: {
    category: "web3",
    type: "load-wallet",
    visualComponents: {
      loading: {
        visual: LoadWalletVisual,
        props: {},
      },
      error: {
        visual: TxErrorVisual,
        props: {},
      },
    },
    commonVisualProps: {
      size: "small",
    },
    contractsToLoad: ["rdai"], // optional
    pauseTimeMs: 500, // optional
  },
  redeemAll: {
    category: "web3",
    type: "transaction",
    functionName: "redeemAll",
    visualComponents: {
      confirming: {
        visual: TxPendingBasicVisual,
        props: {},
      },
      error: {
        visual: TxErrorVisual,
        props: {},
      },
      aborted: {
        visual: TxAbortedVisual,
        props: {},
      },
      confirm: {
        visual: TxConfirmVisual,
        props: {},
      },
    },
    commonVisualProps: {
      size: "small",
    },
  },
  success: {
    category: "info",
    type: "basic",
    visualComponents: {
      default: {
        visual: SuccessVisual, // todo
        props: {
          onSubmitActionType: "restart",
          message: "You just got all your DAI back.",
        },
      },
    },
    commonVisualProps: {
      size: "small",
    },
  },
}

const stepOrder = [
  "initial",
  "unlockWallet",
  "loadWallet",
  "redeemAll",
  "success",
]

const RedeemDappy = () => {
  return (
    <Container>
      <Wizard id="redeem" stepOrder={stepOrder} stepDetails={redeemSteps} />
    </Container>
  )
}

export default RedeemDappy
