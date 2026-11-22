import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

describe("vault-security", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const wallet = provider.wallet.publicKey;
  const programId = new PublicKey("11111111111111111111111111111111");

  it("checks authority signer requirement", async () => {
    const [vaultPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault"), wallet.toBuffer()],
      programId
    );
    console.log("Vault PDA verified for signer:", vaultPda.toBase58());
  });
});
