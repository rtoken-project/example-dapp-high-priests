import React, { useContext, useEffect, useState } from "react"
import hat from "../../images/hat.svg"
import styled from "styled-components"
import Dappy from "./Dappy"

import { InitialNonFollower } from "./VisualComponents"
import {
  UnlockWalletVisual,
  InstallWalletVisual,
  ChangeNetworkVisual,
  LoadWalletVisual,
  InsufficientBalanceVisual,
  PreApproveVisual,
  TxConfirmVisual,
  TxErrorVisual,
  TxPendingBasicVisual,
  PreMintVisual,
  TxPendingMintVisual,
  SuccessVisual,
  TxAbortedVisual,
} from "./Feather"

const BASE_AMOUNT = 10

const options = {
  id: "supporter",
  // optional
  stepOrder: [
    "initial",
    "unlockWallet",
    "loadWallet",
    "preApprove",
    "approve",
    "preMint",
    "mintWithSelectedHat",
    "success",
  ],
  stepDetails: {
    initial: {
      category: "info",
      type: "basic",
      visualComponents: {
        initial: {
          visual: InitialNonFollower,
          props: {
            amountDAI: BASE_AMOUNT,
            firstName: "",
          },
        },
      },
      commonVisualProps: {
        size: "large",
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
        size: "large",
      },
    },
    loadWallet: {
      category: "web3",
      type: "load-wallet",
      contractsToLoad: ["dai", "rdai"], // optional
      allowancesRequested: { tokens: ["dai"], spenders: ["rdai"] }, // optional
      balancesRequested: ["dai"], // optional
      requiredBalances: { dai: BASE_AMOUNT },
      allowSwap: false,
      visualComponents: {
        loading: {
          visual: LoadWalletVisual,
          props: {},
        },
        insufficientBalance: {
          visual: InsufficientBalanceVisual,
          props: {},
        },
        error: {
          visual: TxErrorVisual,
          props: {},
        },
      },
      commonVisualProps: {
        size: "large",
      },
    },
    preApprove: {
      category: "info",
      type: "prompt", // Since the user can select an option, and setContext is called
      visualComponents: {
        preApprove: {
          visual: PreApproveVisual,
          props: {},
        },
      },
      commonVisualProps: {
        size: "large",
      },
    },
    approve: {
      category: "web3",
      type: "transaction",
      functionName: "approve",
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
        size: "large",
      },
    },
    preMint: {
      category: "info",
      type: "basic",
      visualComponents: {
        default: {
          visual: PreMintVisual,
          props: {
            totalAmount: BASE_AMOUNT,
          },
        },
      },
      commonVisualProps: {
        size: "large",
      },
    },
    mintWithSelectedHat: {
      category: "web3",
      type: "transaction",
      functionName: "mintWithSelectedHat",
      hatId: "75",
      visualComponents: {
        confirming: {
          visual: TxPendingMintVisual,
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
        size: "large",
      },
    },
    success: {
      category: "info",
      type: "basic",
      visualComponents: {
        default: {
          visual: SuccessVisual, // todo
          props: {
            onSubmitActionType: "props",
            onSubmit: event => {
              event.preventDefault()
              location.reload()
            },
          },
        },
      },
      commonVisualProps: {
        size: "large",
        // onSubmit: event => {
        //   event.preventDefault();
        //   navigate('/grove');
        // }
      },
    },
  },
}

// <img src={hat} />
// <h3>Join Kevin's flock</h3>
// <p>Support Kevin’s selected causes with interest your DAI generates.</p>

const onToggleActive = id => {
  console.log(`Dappy ${id} is active`)
}

const DappyModule = ({ isFollower, firstName, hatID }) => {
  options.stepDetails.initial.visualComponents.initial.props.firstName = firstName
  options.stepDetails.mintWithSelectedHat.hatID = hatID
  if (isFollower) return <>Follower</>
  return (
    <>
      <Dappy
        options={options}
        onToggleActive={onToggleActive}
        infuraKey={process.env.REACT_APP_INFURA_ENDPOINT_KEY}
      />
    </>
  )
}

export default DappyModule
