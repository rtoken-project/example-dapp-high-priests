// *************************************
// We're sorry! This component uses "Dappy",
// a closed-source package created by the team at https://dappy.dev
// It is purposefully ommited from this repo  :_(
// If you're interested in working on Dappy,
// or want to chat then drop us a line!
// *************************************

import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import hat from "../../images/hat.svg"

import {
  InitialNonFollower,
  InitialFollower,
  MissingDappy,
} from "./VisualComponents"

const BASE_AMOUNT = 40
const HIGHER_AMOUNT = 120

const nonFollowerOptions = {
  id: "nonFollower",
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
          visual: "InitialNonFollower",
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
          visual: "UnlockWalletVisual",
          props: {},
        },
        install: {
          visual: "InstallWalletVisual",
          props: {},
        },
        network: {
          visual: "ChangeNetworkVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
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
          visual: "LoadWalletVisual",
          props: {},
        },
        insufficientBalance: {
          visual: "InsufficientBalanceVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
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
          visual: "PreApproveVisual",
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
          visual: "TxPendingBasicVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
          props: {},
        },
        aborted: {
          visual: "TxAbortedVisual",
          props: {},
        },
        confirm: {
          visual: "TxConfirmVisual",
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
          visual: "PreMintVisual",
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
          visual: "TxPendingMintVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
          props: {},
        },
        aborted: {
          visual: "TxAbortedVisual",
          props: {},
        },
        confirm: {
          visual: "TxConfirmVisual",
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
          visual: "SuccessVisual", // todo
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
const followerOptions = {
  id: "follower",
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
          visual: "InitialFollower",
          props: {
            amountActive: 0,
            amountDAI: HIGHER_AMOUNT,
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
          visual: "UnlockWalletVisual",
          props: {},
        },
        install: {
          visual: "InstallWalletVisual",
          props: {},
        },
        network: {
          visual: "ChangeNetworkVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
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
      requiredBalances: { dai: HIGHER_AMOUNT },
      allowSwap: false,
      visualComponents: {
        loading: {
          visual: "LoadWalletVisual",
          props: {},
        },
        insufficientBalance: {
          visual: "InsufficientBalanceVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
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
          visual: "PreApproveVisual",
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
          visual: "TxPendingBasicVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
          props: {},
        },
        aborted: {
          visual: "TxAbortedVisual",
          props: {},
        },
        confirm: {
          visual: "TxConfirmVisual",
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
          visual: "PreMintVisual",
          props: {
            totalAmount: HIGHER_AMOUNT,
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
          visual: "TxPendingMintVisual",
          props: {},
        },
        error: {
          visual: "TxErrorVisual",
          props: {},
        },
        aborted: {
          visual: "TxAbortedVisual",
          props: {},
        },
        confirm: {
          visual: "TxConfirmVisual",
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
          visual: "SuccessVisual", // todo
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

const onToggleActive = id => {
  console.log(`Dappy ${id} is active`)
}

const DappyModule = ({ isFollower, firstName, hatID, amountActive }) => {
  const [clicked, setClicked] = useState(false)
  const onSubmit = () => setClicked(true)

  nonFollowerOptions.stepDetails.initial.visualComponents.initial.props.firstName = firstName
  nonFollowerOptions.stepDetails.mintWithSelectedHat.hatID = hatID
  followerOptions.stepDetails.mintWithSelectedHat.hatID = hatID
  followerOptions.stepDetails.initial.visualComponents.initial.props.amountActive = amountActive
  if (firstName === "") {
    return <>Loading...</>
  }
  if (isFollower) {
    return <InitialFollower onSubmit={onSubmit} />
  }
  if (clicked) {
    return <MissingDappy />
  }

  return <InitialNonFollower onSubmit={onSubmit} />
}

export default DappyModule
