# Security Audit Checklist — Week 14

- **Wallet:** `EUpX3WNe7Uv3YP1nya2h2bBo6sRJCMVdDcsFhLc6fESQ`
- **Token:** `romaisaev` (`ROMA`, Token-2022)
- **Mint:** `5mYLe...XU9az`

## Audit Items
- [x] **Signer Checks:** Only `authority` can trigger `deposit` and `withdraw`.
- [x] **PDA Validation:** Seeds `["vault", authority]` strictly enforced.
- [x] **Math Safety:** Used `checked_add` and `checked_sub` to avoid overflow.
- [x] **Token Program:** Restricted to SPL Token-2022 interface.
