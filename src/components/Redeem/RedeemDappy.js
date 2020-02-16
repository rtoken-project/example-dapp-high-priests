import React, { useContext, useEffect, useState } from "react"
import hat from "../../images/hat.svg"
import styled from "styled-components"
import Dappy from "../Flock/Dappy"
import { Link } from "gatsby"

import {
  UnlockWalletVisual,
  InstallWalletVisual,
  ChangeNetworkVisual,
  LoadWalletVisual,
  TxConfirmVisual,
  TxErrorVisual,
  TxPendingBasicVisual,
  SuccessVisual,
  InitialVisual,
  TxAbortedVisual,
} from "../Flock/Feather"

const options = {
  stepDetails: {
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
  },
  stepOrder: ["initial", "unlockWallet", "loadWallet", "redeemAll", "success"],
}

const onToggleActive = id => {
  console.log(`Dappy ${id} is active`)
}

const Container = styled.div`
  width: 420px;
  margin: 40px auto 0;

  @media (max-width: 960px) {
    width: 96%;
  }
`

const RedeemDappy = ({ isFollower, firstName, hatID }) => {
  return (
    <Container>
      <Dappy
        options={options}
        onToggleActive={onToggleActive}
        infuraKey={process.env.REACT_APP_INFURA_ENDPOINT_KEY}
      />
    </Container>
  )
}

export default RedeemDappy
