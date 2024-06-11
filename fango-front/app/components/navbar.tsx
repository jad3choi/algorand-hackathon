'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { PeraWalletConnect } from "@perawallet/connect";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const peraWallet = new PeraWalletConnect();

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts) => {
      peraWallet.connector?.on("disconnect", () => {
        setAccountAddress(null);
      });
      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    }).catch((error) => {
    });
  }, []);

  const handleConnect = async () => {
    try {
      const newAccounts = await peraWallet.connect();
      setAccountAddress(newAccounts[0]);
      peraWallet.connector?.on("disconnect", () => {
        setAccountAddress(null);
      });
    } catch (error) {
    }
  };
  const formattedAccountAddress = accountAddress ? `${accountAddress.substring(0, 6)}...${accountAddress.substring(accountAddress.length - 4)}` : null;
  return (
    <>
      <div className="flex justify-between">
        <Link href={"/"} className="ml-80 mt-6 pb-4 text-2xl font-bold">
          Fangorand
        </Link>
        {accountAddress && (
          <p className="mt-8 text-sm font-semibold" style={{marginLeft: '5rem'}}>
            Wallet Address: {formattedAccountAddress}
          </p>
        )}
        <div className="flex justify-end items-center space-x-5" style={{marginLeft: '20rem'}}>
          <button className="mt-8 text-sm font-semibold bg-indigo-400 rounded px-4 py-2" onClick={handleConnect}>Wallet
            Connect
          </button>
        </div>
        <div className="flex items-center space-x-5" style={{marginLeft: '2rem'}}>
          <Link href={"/account"} className="mr-80 mt-8 text-sm font-semibold">
            My Page
          </Link>
        </div>
      </div>
    </>
  );
}